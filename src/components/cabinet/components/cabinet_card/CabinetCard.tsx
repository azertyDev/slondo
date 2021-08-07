import {FC} from 'react';
import {Box, Grid, Hidden, Typography, useMediaQuery, useTheme} from '@material-ui/core';
import {ChevronRight} from '@material-ui/icons';
import {CardDataType} from '@root/interfaces/CardData';
import {BreadcrumbsComponent} from '@src/components/elements/breadcrumbs/Breadcrumbs';
import {ListCard} from '@src/components/elements/card/list_card/ListCard';
import {useTranslation} from 'react-i18next';
import {CloseIcon, NotificationIcon, RocketIcon, SettingsIcon} from '@src/components/elements/icons';
import {useRouter} from 'next/router';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {useStyles} from './useStyles';
import {root} from 'postcss';

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

    const {query: {page}} = useRouter();
    const {t} = useTranslation('cabinet');

    const {
        observer,
        category,
        adsable,
        ads_type,
        status,
        creator
    } = cardData;

    const isXsDown = useMediaQuery(useTheme().breakpoints.down('xs'));
    const isPublic = status === 'public';
    const isModeration = status === 'moderation';
    const isSold = status === 'sold';

    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box mb={1}>
                <div className='breadcrumbs'>
                    <Hidden xsDown>
                        <BreadcrumbsComponent
                            category={category.name}
                            type={adsable?.type?.name}
                            subcategory={adsable?.sub_category.name}
                        />
                    </Hidden>
                    <Box
                        display='flex'
                        alignItems='center'
                        justifyContent={isXsDown ? 'space-between' : ''}
                        width={isXsDown ? 1 : 'auto'}
                    >
                        <Typography variant="subtitle1" color="initial">
                        <span className={ads_type}>
                            {t(`common:${ads_type}`)} №:&nbsp;
                        </span>
                            {cardData.id}
                        </Typography>
                        <div className='status'>
                            <Typography variant='subtitle2'>
                                {t(status)}
                            </Typography>
                        </div>
                    </Box>
                </div>
            </Box>
            <Box position='relative'>
                <ListCard cardData={cardData}/>
                <Grid container spacing={1} className='bottom-btns'>
                    <Hidden mdUp>
                        <Grid item xs={5} sm={4} container justify='center'>
                            {page?.includes('favorite')
                                ? <Grid item xs={6} container justify='center'>
                                    <CustomButton
                                        onClick={handleOpenModal(cardData.id)}
                                    >
                                        <CloseIcon />
                                    </CustomButton>
                                </Grid>
                                : (<>
                                        {handleNotificationsOpen && (
                                            <Grid item xs={6} container justify='center'>
                                                <CustomButton
                                                    className='icons'
                                                    onClick={handleNotificationsOpen}
                                                    // disabled={!observer?.number_of_notifications}
                                                >
                                                    <NotificationIcon />
                                                </CustomButton>
                                            </Grid>
                                        )}
                                        {creator && isPublic && (
                                            <Grid item xs={6} container justify='center'>
                                                <CustomButton
                                                    className='icons'
                                                    onClick={handleSettingsOpen}
                                                >
                                                    <SettingsIcon />
                                                </CustomButton>
                                            </Grid>
                                        )}
                                    </>
                                )}
                        </Grid>
                    </Hidden>
                    {handleDetailedOpen && (
                        <Grid
                            item
                            xs={isPublic || isModeration || isSold ? 7 : 12}
                            sm={isPublic || isModeration ? 8 : 12}
                            md={12}
                        >
                            <CustomButton
                                className='unfold-btn'
                                onClick={handleDetailedOpen}
                            >
                                <Typography variant='subtitle1' component='p'>
                                    {t('cabinet:unfold')}
                                </Typography>&nbsp;
                                <ChevronRight color='action' />
                            </CustomButton>
                        </Grid>
                    )}
                </Grid>
                <Hidden mdDown>
                    <div className='card-btns'>
                        {page?.includes('favorite')
                            ? <CustomButton
                                onClick={handleOpenModal(cardData.id)}
                            >
                                <CloseIcon />
                            </CustomButton>
                            : <>
                                {creator && isPublic && (
                                    <>
                                        <CustomButton
                                            disabled
                                            className='icons'
                                        >
                                            <RocketIcon/>
                                            <Typography variant='subtitle1' component='p'>
                                                Рекламировать
                                            </Typography>
                                        </CustomButton>
                                        <CustomButton
                                            className='icons'
                                            onClick={handleSettingsOpen}
                                        >
                                            <SettingsIcon/>
                                        </CustomButton>
                                    </>
                                )}
                                <CustomButton
                                    className='icons'
                                    onClick={handleNotificationsOpen}
                                    // disabled={!observer.number_of_notifications}
                                >
                                    <NotificationIcon/>
                                </CustomButton>
                            </>}
                    </div>
                </Hidden>
            </Box>
        </Box>
    );
};
