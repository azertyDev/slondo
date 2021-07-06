import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {Box, Table, TableBody, TableCell, TableContainer, TableRow, Typography} from '@material-ui/core';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {useModal} from '@src/hooks/useModal';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {BetsListModal} from '@src/components/elements/bets_list/BetsListModal';
import {numberPrettier} from '@src/helpers';
import {RefreshIcon} from '@src/components/elements/icons';
import {useStyles} from './useStyles';

type BetsListPropsType = {
    bets,
    betsCount: number,
    title: string,
    auctionId: number,
    showBetsCount: number,
    handleRefresh: () => void
}

export const BetsList: FC<BetsListPropsType> = (props) => {
    const {
        bets,
        betsCount,
        title,
        auctionId,
        showBetsCount,
        handleRefresh
    } = props;

    const {t} = useTranslation('auction');
    const {modalOpen, handleModalOpen, handleModalClose} = useModal();

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography className='bets-header' variant="subtitle2" color="initial" gutterBottom>
                <div>
                    {title}
                </div>
                <div onClick={handleRefresh} style={{cursor: 'pointer'}}>
                    <RefreshIcon/>
                </div>
            </Typography>
            <TableContainer className='bets-table'>
                <Table>
                    <TableBody>
                        {bets.map((bet, index) => (
                            <TableRow key={index}>
                                <TableCell component="td" align="left">
                                    <Typography variant="subtitle1" noWrap gutterBottom className='participant-name'>
                                        {bet.user.name}
                                        {bet.number_of_bets && <span>({bet.number_of_bets})</span>}
                                    </Typography>
                                    <Box display='flex' className='dateAndTime'>
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
                                <TableCell align="right" className='bet'>
                                    <Typography
                                        noWrap
                                        variant="subtitle1"
                                        className="per-bet"
                                        gutterBottom
                                    >
                                        {numberPrettier(bet.bet)}
                                    </Typography>
                                    <Typography
                                        noWrap
                                        variant="subtitle2"
                                        className="outbid"
                                    >
                                        {index === betsCount - 1
                                            ? <span className='started-price'>Стартовая цена</span>
                                            : `+ ${numberPrettier(bet.outbid)}`}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {betsCount > showBetsCount && (
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
                handleModalClose={handleModalClose}
            />
        </div>
    );
};
