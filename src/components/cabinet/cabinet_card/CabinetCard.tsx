import {FC} from 'react';
import {Box, Typography} from '@material-ui/core';
import {CardDataType} from '@root/interfaces/CardData';
import {useStyles} from './useStyles';
import {BreadcrumbsComponent} from '@src/components/elements/breadcrumbs/Breadcrumbs';
import {ListCard} from '@src/components/elements/card/list_card/ListCard';
import {useTranslation} from 'react-i18next';
import {CloseIcon, NotificationIcon, SettingsIcon} from '@src/components/elements/icons';
import {useRouter} from 'next/router';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

type CabinetCardPropsType = {
    cardData: CardDataType,
    handleSettingsOpen?: (id: number, post?, index?: number) => () => void,
    handleDetailedOpen?: (id: number, post) => () => void,
    handleOpenModal?: (id: number) => () => void,
    handleOpenDialog?: () => void,
    fetchAuctionNotifications?: (post) => () => void
}

export const CabinetCard: FC<CabinetCardPropsType> = (props) => {
    const {
        cardData,
        handleSettingsOpen,
        handleDetailedOpen,
        handleOpenModal,
        handleOpenDialog,
        fetchAuctionNotifications
    } = props;
    const {pathname} = useRouter();
    const {t} = useTranslation('common');

    const {
        category,
        adsable,
        ads_type,
        id,
        status
    } = cardData;

    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box mb={1}>
                <div className='breadcrumbs'>
                    <BreadcrumbsComponent
                        category={category.name}
                        subcategory={adsable?.sub_category.name}
                        type={adsable?.type?.name}
                    />
                    <Box display='flex' alignItems='center'>
                        <Typography variant="subtitle1" color="initial">
                        <span className={ads_type}>
                            {t(`common:${ads_type}`)} №:&nbsp;
                        </span>
                            {id}
                        </Typography>
                        <div className='status'>
                            <Typography variant='subtitle2'>
                                {getStatus(status)}
                            </Typography>
                        </div>
                    </Box>
                </div>
            </Box>
            <Box position='relative'>
                <ListCard cardData={cardData} />
                {cardData.creator && (
                    <CustomButton className='unfold-btn' onClick={handleDetailedOpen(id, cardData)}>
                        <Typography variant='subtitle1'>
                            Раскрыть объявление
                        </Typography>
                        &nbsp;
                        <ChevronRightIcon color='action' />
                    </CustomButton>
                )}
                <div className='card-btn'>
                    {pathname?.includes('favorite')
                        ?
                        <CustomButton className='isFavorite' onClick={handleOpenModal(id)}>
                            <CloseIcon />
                        </CustomButton>
                        : cardData.creator && (
                        <>
                            <CustomButton
                                className='notifications'
                                onClick={handleOpenDialog}
                                onMouseEnter={fetchAuctionNotifications(cardData)}
                            >
                                <NotificationIcon />
                            </CustomButton>
                            <CustomButton className='settings' onClick={handleSettingsOpen(cardData.id, null, 1)}>
                                <SettingsIcon />
                            </CustomButton>
                        </>
                    )}
                </div>
            </Box>
        </Box>
    );
    function getStatus(postStatus: string): string {
        switch (postStatus) {
            case 'new':
                return 'new';
            case 'suspend':
                return 'suspend';
            case 'success':
                return 'success';
            case 'accepted':
                return 'accepted';
            case 'reject':
                return 'reject';
            case 'sold':
                return 'sold';
            default:
                return postStatus;
        }
    }
};
