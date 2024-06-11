import {FC, useState} from 'react';
import {Box, Typography} from '@material-ui/core';
import {useTranslation} from 'next-i18next';
import {ResponsiveModal} from '@src/components/elements/responsive_modal/ResponsiveModal';
import {BETS_PER_PAGE} from '@src/constants';
import {CustomPagination} from '@src/components/elements/custom_pagination/CustomPagination';
import {useBetsData} from '@src/hooks/useBetsData';
import {CustomCircularProgress} from '@src/components/elements/custom_circular_progress/CustomCircularProgress';
import {ModalHeader} from '@src/components/cabinet/components/modal_header/ModalHeader';
import {BetsTable} from "@src/components/elements/bets_list/bets_table/BetsTable";

type BetsListPropsType = {
    auctionId: number,
    modalOpen: boolean,
    handleModalClose: () => void
}

export const BetsListModal: FC<BetsListPropsType> = (props) => {
    const {
        auctionId,
        modalOpen,
        handleModalClose
    } = props;

    const {t} = useTranslation('auction');
    const [page, setPage] = useState(1);

    const {isBetsFetch, bets, betsCount} = useBetsData(
        {
            auction_id: auctionId,
            page: page,
            itemsPerPage: BETS_PER_PAGE
        }
    );

    const handlePagePagination = (_, pageNum) => {
        setPage(pageNum);
    };

    return (
        <ResponsiveModal
            maxWidth='lg'
            openDialog={modalOpen}
            handleCloseDialog={handleModalClose}
        >
            <ModalHeader
                title={t('allBets')}
                handleCloseDialog={handleModalClose}
            />
            {isBetsFetch
                ? <CustomCircularProgress/>
                : <>
                    <Box
                        p={2}
                        width={1}
                        display='flex'
                        justifyContent='center'
                        flexDirection='column'
                    >
                        <Box
                            mb={2}
                            textAlign='center'
                        >
                            <Typography variant='subtitle2'>
                                {`${t(`common:auc`)} №: ${auctionId}`}
                            </Typography>
                        </Box>
                        <BetsTable bets={bets} betsCount={betsCount}/>
                        <div className='pagination' style={{marginTop: '15px'}}>
                            <CustomPagination
                                currentPage={page}
                                totalItems={betsCount}
                                itemsPerPage={BETS_PER_PAGE}
                                handlePagePagination={handlePagePagination}
                            />
                        </div>
                    </Box>
                </>}
        </ResponsiveModal>
    );
};
