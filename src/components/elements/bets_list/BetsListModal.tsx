import {FC, useEffect, useState} from 'react';
import {
    Box,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from '@material-ui/core';
import {useTranslation} from 'react-i18next';
import {ResponsiveModal} from '@src/components/elements/responsive_modal/ResponsiveModal';
import {numberPrettier} from '@src/helpers';
import {CloseIcon} from '@src/components/elements/icons';
import {BETS_PER_PAGE} from '@src/constants';
import {CustomPagination} from '@src/components/elements/custom_pagination/CustomPagination';
import {useBetsData} from '@src/hooks/useBetsData';
import {useStyles} from './useStyles';

type BetsListPropsType = {
    archive?: number,
    auctionId: number,
    modalOpen: boolean,
    handleModalClose: () => void
}

export const BetsListModal: FC<BetsListPropsType> = (props) => {
    const {
        archive,
        auctionId,
        modalOpen,
        handleModalClose
    } = props;

    const {t} = useTranslation('auction');
    const [page, setPage] = useState(1);
    const {bets, betsCount, setFetchedBetsData} = useBetsData(
        {
            auction_id: auctionId,
            page: page,
            itemsPerPage: BETS_PER_PAGE,
            archive
        }
    );

    const handlePagePagination = (_, pageNum) => {
        setPage(pageNum);
    };

    useEffect(() => {
        setFetchedBetsData();
    }, [page]);

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
                <CloseIcon/>
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
                            {bets.map((bet, index) => (
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
                                            {(index + 1) === betsCount
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
                    </Table>
                </TableContainer>
                <div className={classes.pagination}>
                    <CustomPagination
                        currentPage={page}
                        totalItems={betsCount}
                        itemsPerPage={BETS_PER_PAGE}
                        handlePagePagination={handlePagePagination}
                    />
                </div>
            </Box>
        </ResponsiveModal>
    );
};