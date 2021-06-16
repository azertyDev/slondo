import {FC, useState} from 'react';
import {
    Box,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHead,
    TablePagination,
    TableRow,
    Typography
} from '@material-ui/core';
import {useStyles} from './useStyles';
import {useTranslation} from 'react-i18next';
import {ResponsiveModal} from '@src/components/elements/responsive_modal/ResponsiveModal';
import {numberPrettier} from '@src/helpers';
import {CloseIcon} from '@src/components/elements/icons';

type BetsListPropsType = {
    bets,
    auctionId: number,
    modalOpen: boolean,
    handleModalClose: () => void
}

export const BetsListModal: FC<BetsListPropsType> = (props) => {
    const {
        bets,
        auctionId,
        modalOpen,
        handleModalClose
    } = props;
    const {t} = useTranslation('auction');

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const classes = useStyles();
    return (
        <ResponsiveModal
            openDialog={modalOpen}
            handleCloseDialog={handleModalClose}
            maxWidth='lg'
        >
            <IconButton
                onClick={handleModalClose}
                className={classes.closeBtn}
                size='small'
            >
                <CloseIcon />
            </IconButton>
            <Box
                p={3}
                display='flex'
                justifyContent='center'
                flexDirection='column'
            >
                <Box
                    mb={2}
                    textAlign='center'
                >
                    <Typography variant='h6' gutterBottom>
                        <strong>{t('allBets')}</strong>
                    </Typography>
                    <Typography variant='subtitle2'>
                        {`${t(`auc`)} №: ${auctionId}`}
                    </Typography>
                </Box>
                <TableContainer component={Paper}>
                    <Table size='medium'>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">{t('player')}</TableCell>
                                <TableCell align="center">{t('date')}</TableCell>
                                <TableCell align="center">{t('time')}</TableCell>
                                <TableCell align="center">{t('difference')}</TableCell>
                                <TableCell align="center">{t('bet')}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(rowsPerPage > 0
                                    ? bets.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    : bets
                            ).map((bet) => (
                                <TableRow key={bet.id}>
                                    <TableCell component="td" align="center">
                                        <Typography variant="subtitle1" noWrap>
                                            {bet.user.name}
                                            {bet.number_of_bets && <span>({bet.number_of_bets})</span>}
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Typography
                                            noWrap
                                            variant="subtitle1"
                                            className="bet-date"
                                        >
                                            {bet.created_at?.slice(0, 10)}
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Typography
                                            noWrap
                                            variant="subtitle1"
                                            className="bet-time"
                                        >
                                            {bet.created_at?.slice(11, 16)}
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="center">
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
                                    <TableCell align="center">
                                        <Typography
                                            noWrap
                                            variant="subtitle1"
                                            className="final-bet"
                                        >
                                            {numberPrettier(bet.bet)}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    rowsPerPageOptions={[5, 10]}
                                    labelRowsPerPage={
                                        <Typography variant='subtitle1'>
                                            {t('numberOfLines')}
                                        </Typography>
                                    }
                                    page={page}
                                    count={bets.length}
                                    rowsPerPage={rowsPerPage}
                                    onChangePage={handleChangePage}
                                    onChangeRowsPerPage={handleChangeRowsPerPage}
                                />
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
            </Box>
        </ResponsiveModal>
    );
};
