import {FC} from 'react';
import {Box, Typography} from '@material-ui/core';
import {ChevronRight} from '@material-ui/icons';
import {CardDataType} from '@root/interfaces/CardData';
import {BreadcrumbsComponent} from '@src/components/elements/breadcrumbs/Breadcrumbs';
import {ListCard} from '@src/components/elements/card/list_card/ListCard';
import {useTranslation} from 'react-i18next';
import {CloseIcon, NotificationIcon, RocketIcon, SettingsIcon} from '@src/components/elements/icons';
import {useRouter} from 'next/router';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {useStyles} from './useStyles';

type CabinetCardPropsType = {
    cardData: CardDataType,
    handleOpenModal?: (id: number) => () => void,
    handleDetailedOpen?: () => void,
    handleSettingsOpen?: () => void,
    handleNotificationsOpen?: () => void
}

export const CabinetCard: FC<CabinetCardPropsType> = (props) => {
    const {
        cardData,
        handleOpenModal,
        handleDetailedOpen,
        handleSettingsOpen,
        handleNotificationsOpen
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

    const isPublic = status === 'public';

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
                        onClick={handleDetailedOpen}
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
                            onClick={handleOpenModal(cardData.id)}
                        >
                            <CloseIcon/>
                        </CustomButton>
                        : cardData.creator && isPublic && (
                        <>
                            <CustomButton
                                disabled
                                className='icons'
                            >
                                <RocketIcon/>
                                <Typography variant='subtitle1'>
                                    Рекламировать
                                </Typography>
                            </CustomButton>
                            <CustomButton
                                className='icons'
                                onClick={handleNotificationsOpen}
                                disabled={!observer.number_of_notifications}
                            >
                                <NotificationIcon/>
                            </CustomButton>
                            <CustomButton
                                className='icons'
                                onClick={handleSettingsOpen}
                            >
                                <SettingsIcon/>
                            </CustomButton>
                        </>
                    )}
                </div>
            </Box>
        </Box>
    );
};
