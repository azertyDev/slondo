import {FC} from 'react';
import {useTranslation} from 'next-i18next';
import {Box, Typography} from '@material-ui/core';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {useModal} from '@src/hooks/useModal';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {BetsListModal} from '@src/components/elements/bets_list/bets_modal/BetsListModal';
import {RefreshIcon} from '@src/components/elements/icons';
import {BetsTable} from "@src/components/elements/bets_list/bets_table/BetsTable";
import {useStyles} from './useStyles';

type BetsListPropsType = {
    bets,
    betsCount: number,
    title: string,
    auctionId: number,
    showBetsCount: number
}

export const BetsList: FC<BetsListPropsType> = (props) => {
    const {
        bets,
        betsCount,
        title,
        auctionId,
        showBetsCount
    } = props;

    const {t} = useTranslation('auction');
    const {modalOpen, handleModalOpen, handleModalClose} = useModal();

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Box className='bets-header'>
                <Typography variant="subtitle2" color="initial">
                    {title}
                </Typography>
            </Box>
            <BetsTable bets={bets} betsCount={betsCount}/>
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
