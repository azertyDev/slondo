import {FC} from 'react';
import {useRouter} from 'next/router';
import {useTranslation} from 'react-i18next';
import {ChevronRight} from '@material-ui/icons';
import {CardDataType} from '@root/interfaces/CardData';
import {Box, Grid, Hidden, Typography, useMediaQuery, useTheme} from '@material-ui/core';
import {BreadcrumbsComponent} from '@src/components/elements/breadcrumbs/Breadcrumbs';
import {CloseIcon, NotificationIcon, RocketIcon, SettingsIcon} from '@src/components/elements/icons';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {CabinetCard} from '@src/components/cabinet/components/cabinet_card/CabinetCard';
import {useStyles} from './useStyles';

type CabinetCardPropsType = {
    cardData: CardDataType,
    handleDetailedOpen?: () => void,
    handleSettingsOpen?: () => void,
    handleNotificationsOpen?: () => void,
    handleOpenModal?: (id: number) => () => void
}

export const CabinetCardWrapper: FC<CabinetCardPropsType> = (props) => {
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
        category,
        adsable,
        ads_type,
        status,
        creator
    } = cardData;

    const isXsDown = useMediaQuery(useTheme().breakpoints.down('xs'));
    const isPublic = status === 'public';
    const isSold = status === 'sold';
    const isSuspend = status === 'suspended';
    const isArchive = status === 'archive';
    const isHistory = status === 'history';
    const isModeration = status === 'moderation';
    const isBanned = status === 'banned';
    const isReject = status === 'reject' || 'refuse';

    const allowSettings = isPublic || isArchive;

    const classes = useStyles({status});
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
                        width={isXsDown ? 1 : 'auto'}
                        justifyContent={isXsDown ? 'space-between' : ''}
                    >
                        <Typography variant="subtitle1" color="initial" component='p'>
                            <span className={ads_type}>
                                {t(`common:${ads_type}`)} №:&nbsp;
                            </span>
                            {cardData.id}
                        </Typography>
                        <div className='status'>
                            <Typography variant='subtitle2' component='p'>
                                {t(status)}
                            </Typography>
                        </div>
                    </Box>
                </div>
            </Box>
            <Box position='relative'>
                <CabinetCard cardData={cardData}/>
                <Grid container spacing={1} className='bottom-btns'>
                    <Hidden mdUp>
                        <Grid item xs={5} sm={4} container justifyContent='center'>
                            {page?.includes('favorite')
                                ? <Grid item xs={6} container justifyContent='center'>
                                    <CustomButton onClick={handleOpenModal(cardData.id)}>
                                        <CloseIcon/>
                                    </CustomButton>
                                </Grid>
                                : <>
                                    {creator && !isBanned && handleNotificationsOpen && (
                                        <Grid item xs={6} container justifyContent='center'>
                                            <CustomButton
                                                className='icons'
                                                onClick={handleNotificationsOpen}
                                            >
                                                <NotificationIcon/>
                                            </CustomButton>
                                        </Grid>
                                    )}
                                    {creator && (isPublic || isArchive) && (
                                        <Grid item xs={6} container justifyContent='center'>
                                            <CustomButton
                                                className='icons'
                                                disabled={!allowSettings}
                                                onClick={handleSettingsOpen}
                                            >
                                                <SettingsIcon/>
                                            </CustomButton>
                                        </Grid>
                                    )}
                                </>}
                        </Grid>
                    </Hidden>
                    {handleDetailedOpen && (
                        <Grid
                            item
                            md={12}
                            xs={isPublic || isModeration || isSold || isSuspend || isReject ? 7 : 12}
                            sm={isPublic || isModeration || isSuspend || isArchive || isHistory || isReject ? 8 : 12}
                        >
                            <CustomButton
                                className='unfold-btn'
                                onClick={handleDetailedOpen}
                            >
                                <Typography variant='subtitle1' component='p'>
                                    {t('cabinet:unfold')}
                                </Typography>&nbsp;
                                <ChevronRight color='action'/>
                            </CustomButton>
                        </Grid>
                    )}
                </Grid>
                <Hidden smDown>
                    <div className='card-btns'>
                        {page?.includes('favorite')
                            ? <CustomButton onClick={handleOpenModal(cardData.id)}>
                                <CloseIcon/>
                            </CustomButton>
                            : <>
                                {creator && (isPublic || isArchive) && (
                                    <>
                                        {isPublic && (
                                            <CustomButton
                                                disabled
                                                className='icons'
                                            >
                                                <RocketIcon/>
                                            </CustomButton>
                                        )}
                                        <CustomButton
                                            className='icons'
                                            disabled={!allowSettings}
                                            onClick={handleSettingsOpen}
                                        >
                                            <SettingsIcon/>
                                        </CustomButton>
                                    </>
                                )}
                                {creator && handleNotificationsOpen && !isBanned && (
                                    <CustomButton
                                        className='icons'
                                        onClick={handleNotificationsOpen}
                                    >
                                        <NotificationIcon/>
                                    </CustomButton>
                                )}
                            </>}
                    </div>
                </Hidden>
            </Box>
        </Box>
    );
};
