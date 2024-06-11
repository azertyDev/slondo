import {FC} from 'react';
import {useTranslation} from 'next-i18next';
import {Box, Table, TableBody, TableCell, TableContainer, TableRow, Typography} from '@material-ui/core';
import {numberPrettier} from '@src/helpers';
import {useStyles} from './useStyles';

type BetsListPropsType = {
    bets,
    betsCount: number,
}

export const BetsTable: FC<BetsListPropsType> = (props) => {
    const {
        bets,
        betsCount
    } = props;

    const {t} = useTranslation('auction');

    const classes = useStyles();
    return (
        <TableContainer className={classes.root}>
            <Table>
                <TableBody>
                    {bets.map((bet, index) => (
                        <TableRow key={index}>
                            <TableCell align="left">
                                <Typography variant="subtitle1" noWrap gutterBottom className='participant-name'>
                                    {bet.user.name}
                                    {bet.number_of_bets && <span>({bet.number_of_bets})</span>}
                                </Typography>
                                <Box display='flex' className='dateAndTime'>
                                    <Box width={0.4}>
                                        <Typography
                                            variant="subtitle2"
                                            className="bet-time"
                                        >
                                            {bet.created_at?.slice(11, 16)}
                                        </Typography>
                                    </Box>
                                    <Box width={0.6} textAlign='end'>
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
                                        ? <span className='started-price'>{t('post:startingPrice')}</span>
                                        : `+ ${numberPrettier(bet.outbid)}`}
                                </Typography>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
