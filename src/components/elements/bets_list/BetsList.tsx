import {FC} from 'react';
import {Box, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography} from '@material-ui/core';
import {useStyles} from './useStyles';
import {useTranslation} from 'react-i18next';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {useModal} from '@src/hooks/useModal';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {BetsListModal} from '@src/components/elements/bets_list/BetsListModal';
import {numberPrettier} from '@src/helpers';

type BetsListPropsType = {
    bets,
    title: string,
    auctionId: number,
    showBetsCount: number,
}

export const BetsList: FC<BetsListPropsType> = (props) => {
    const {
        bets,
        title,
        auctionId,
        showBetsCount
    } = props;
    const {t} = useTranslation(['auction', 'main']);
    const {modalOpen, handleModalOpen, handleModalClose} = useModal();

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="subtitle1" color="initial">
                {title}
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableBody>
                        {bets.map((bet) => (
                            <TableRow key={bet.name}>
                                <TableCell component="th" align="left" padding='none'>
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
            {/*<div*/}
            {/*    className="participants"*/}
            {/*    style={{*/}
            {/*        height: showAll ? 400 : 200,*/}
            {/*        overflow: showAll ? 'auto' : 'hidden'*/}
            {/*    }}*/}
            {/*>*/}
            {/*    <ul>*/}
            {/*        {bets.map((item) => (*/}
            {/*            <li key={item.id}>*/}
            {/*                <div>*/}
            {/*                    <div className="participant-name">*/}
            {/*                        <Typography variant="subtitle1" noWrap>*/}
            {/*                            {item.user.name}*/}
            {/*                            {item.number_of_bets && <span>({item.number_of_bets})</span>}*/}
            {/*                        </Typography>*/}
            {/*                    </div>*/}
            {/*                    <div className="dateAndTime">*/}
            {/*                        <Typography*/}
            {/*                            noWrap*/}
            {/*                            variant="subtitle1"*/}
            {/*                            className="bet-time"*/}
            {/*                        >*/}
            {/*                            {item.created_at?.slice(11, 16)}*/}
            {/*                        </Typography>*/}
            {/*                        <Typography*/}
            {/*                            noWrap*/}
            {/*                            variant="subtitle1"*/}
            {/*                            className="bet-date"*/}
            {/*                        >*/}
            {/*                            {item.created_at?.slice(0, 10)}*/}
            {/*                        </Typography>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div className="bet">*/}
            {/*                    <Typography*/}
            {/*                        noWrap*/}
            {/*                        variant="subtitle1"*/}
            {/*                        className="final-bet"*/}
            {/*                    >*/}
            {/*                        {numberPrettier(item.bet)}*/}
            {/*                    </Typography>*/}
            {/*                    <Typography*/}
            {/*                        noWrap*/}
            {/*                        variant="subtitle1"*/}
            {/*                        className="per-bet"*/}
            {/*                    >*/}
            {/*                        {item.outbid === 0*/}
            {/*                            ? <span className='started-price'>Стартовая цена</span>*/}
            {/*                            : `+ ${numberPrettier(item.outbid)}`}*/}
            {/*                    </Typography>*/}
            {/*                </div>*/}
            {/*            </li>*/}
            {/*        ))}*/}
            {/*    </ul>*/}
            {/*</div>*/}
            <CustomButton
                onClick={handleModalOpen}
                className={classes.showMore}
            >
                <Typography variant="subtitle1" className="show-hide-all-bet">
                    {t('auction:allBets')}
                </Typography>
                <ChevronRightIcon color='action' />
            </CustomButton>
            <BetsListModal
                bets={bets}
                auctionId={auctionId}
                modalOpen={modalOpen}
                handleModalClose={handleModalClose}
            />
        </div>
    );
};
