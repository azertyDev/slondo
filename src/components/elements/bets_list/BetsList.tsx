import {FC, useEffect, useState} from 'react';
import {Box, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography} from '@material-ui/core';
import {useTranslation} from 'react-i18next';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {useModal} from '@src/hooks/useModal';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {BetsListModal} from '@src/components/elements/bets_list/BetsListModal';
import {userAPI} from '@src/api/api';
import {setErrorMsgAction} from '@src/redux/slices/errorSlice';
import {useDispatch} from 'react-redux';
import {numberPrettier} from '@src/helpers';
import {useStyles} from './useStyles';

type BetsListPropsType = {
    archive: number,
    title: string,
    auctionId: number,
    showBetsCount: number,
}

export const BetsList: FC<BetsListPropsType> = (props) => {
    const {
        title,
        archive,
        auctionId,
        showBetsCount
    } = props;

    const dispatch = useDispatch();

    const {t} = useTranslation('auction');
    const {modalOpen, handleModalOpen, handleModalClose} = useModal();
    const [isFetch, isFetFetch] = useState(false);
    const [bets, setBets] = useState([]);
    const [itemsCount, setItemsCount] = useState(0);

    const getBetsByPage = async (page, per_page) => {
        try {
            const params = {
                auction_id: auctionId,
                page,
                per_page,
                archive
            };
            return await userAPI.getAuctionBets(params);
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };

    const setFetchedBets = async () => {
        isFetFetch(true);

        const {data, total} = await getBetsByPage(1, showBetsCount);

        setBets(data);
        setItemsCount(total);

        isFetFetch(false);
    };

    useEffect(() => {
        setFetchedBets();
    }, []);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="subtitle2" color="initial" gutterBottom>
                {title}
            </Typography>
            <TableContainer component={Paper} className='bets-table'>
                <Table>
                    <TableBody>
                        {bets.map((bet, index) => (
                            <TableRow key={index}>
                                <TableCell component="td" align="left" padding='none'>
                                    <Typography variant="subtitle1" noWrap>
                                        {bet.user.name}
                                        {bet.number_of_bets && <span>({bet.number_of_bets})</span>}
                                    </Typography>
                                    <Box display='flex'>
                                        <Box width={0.5}>
                                            <Typography
                                                variant="subtitle2"
                                                className="bet-time"
                                            >
                                                {bet.created_at?.slice(11, 16)}
                                            </Typography>
                                        </Box>
                                        <Box width={0.5} textAlign='end'>
                                            <Typography
                                                variant="subtitle2"
                                                className="bet-date"
                                            >
                                                {bet.created_at?.slice(0, 10)}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </TableCell>
                                <TableCell align="right" padding='none'>
                                    <Typography
                                        noWrap
                                        variant="subtitle1"
                                        className="final-bet"
                                    >
                                        {numberPrettier(bet.bet)}
                                    </Typography>
                                    <Typography
                                        noWrap
                                        variant="subtitle1"
                                        className="per-bet"
                                    >
                                        {bet.outbid === 0
                                         ? <span className='started-price'>Стартовая цена</span>
                                         : `+ ${numberPrettier(bet.outbid)}`}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {itemsCount > showBetsCount && (
                <CustomButton
                    onClick={handleModalOpen}
                    className={classes.showMore}
                >
                    <Typography variant="subtitle1" className="show-hide-all-bet">
                        {t('auction:allBets')}
                    </Typography>
                    <ChevronRightIcon color='action'/>
                </CustomButton>
            )}
            <BetsListModal
                auctionId={auctionId}
                modalOpen={modalOpen}
                getBetsByPage={getBetsByPage}
                handleModalClose={handleModalClose}
            />
        </div>
    );
};
