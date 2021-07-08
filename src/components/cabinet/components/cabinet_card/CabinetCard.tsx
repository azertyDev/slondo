import {FC} from 'react';
import {Box, Typography} from '@material-ui/core';
import {ChevronRight} from '@material-ui/icons';
import {CardDataType} from '@root/interfaces/CardData';
import {BreadcrumbsComponent} from '@src/components/elements/breadcrumbs/Breadcrumbs';
import {ListCard} from '@src/components/elements/card/list_card/ListCard';
import {useTranslation} from 'react-i18next';
import {CloseIcon, NotificationIcon, RocketIcon} from '@src/components/elements/icons';
import {useRouter} from 'next/router';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {useStyles} from './useStyles';

type CabinetCardPropsType = {
    archive?: boolean,
    cardData: CardDataType,
    handleDetailedOpen?: (post) => () => void,
    handleOpenModal?: (id: number) => () => void,
    handleNotificationsOpen?: (post: CardDataType) => () => void
}

export const CabinetCard: FC<CabinetCardPropsType> = (props) => {
    const {
        cardData,
        archive = false,
        handleDetailedOpen,
        handleNotificationsOpen,
        handleOpenModal
    } = props;

    const {pathname} = useRouter();
    const {t} = useTranslation('common');

    const {
        observer,
        category,
        adsable,
        ads_type,
        status
    } = cardData;

    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box mb={1}>
                <div className='breadcrumbs'>
                    <BreadcrumbsComponent
                        category={category.name}
                        type={adsable?.type?.name}
                        subcategory={adsable?.sub_category.name}
                    />
                    <Box display='flex' alignItems='center'>
                        <Typography variant="subtitle1" color="initial">
                        <span className={ads_type}>
                            {t(`common:${ads_type}`)} №:&nbsp;
                        </span>
                            {cardData.id}
                        </Typography>
                        <div className='status'>
                            <Typography variant='subtitle2'>
                                {status}
                            </Typography>
                        </div>
                    </Box>
                </div>
            </Box>
            <Box position='relative'>
                <ListCard cardData={cardData}/>
                {handleDetailedOpen && (
                    <CustomButton
                        className='unfold-btn'
                        onClick={handleDetailedOpen(cardData)}
                    >
                        <Typography variant='subtitle1'>
                            Раскрыть объявление
                        </Typography>&nbsp;
                        <ChevronRight color='action'/>
                    </CustomButton>
                )}
                <div className='card-btns'>
                    {pathname?.includes('favorite')
                        ? <CustomButton
                            className='delete_favorite'
                            onClick={handleOpenModal(cardData.id)}
                        >
                            <CloseIcon/>
                        </CustomButton>
                        : cardData.creator && (
                        <>
                            {!archive && (
                                <CustomButton
                                    disabled
                                    className='advertise'
                                >
                                    <RocketIcon/>
                                    <Typography variant='subtitle1'>
                                        Рекламировать
                                    </Typography>
                                </CustomButton>
                            )}
                            <CustomButton
                                className='notifications'
                                onClick={handleNotificationsOpen(cardData)}
                                disabled={!observer.number_of_notifications}
                            >
                                <NotificationIcon/>
                            </CustomButton>
                        </>
                    )}
                </div>
            </Box>
        </Box>
    );
};
