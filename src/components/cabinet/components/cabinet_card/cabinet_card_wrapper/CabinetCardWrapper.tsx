import {FC} from 'react';
import {useRouter} from 'next/router';
import {useTranslation} from 'react-i18next';
import {ChevronRight} from '@material-ui/icons';
import {CardDataType} from '@root/interfaces/CardData';
import {
    Box,
    Grid,
    Hidden,
    Typography,
    useMediaQuery,
    useTheme
} from '@material-ui/core';
import {BreadcrumbsComponent} from '@src/components/elements/breadcrumbs/Breadcrumbs';
import {
    CloseIcon,
    NotificationIcon,
    RocketIcon,
    SettingsIcon
} from '@src/components/elements/icons';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {CabinetCard} from '@src/components/cabinet/components/cabinet_card/CabinetCard';
import {TurboRocket} from '@src/assets/icons';
import TopIcon from '@src/assets/icons/top.svg';
import {useStyles} from './useStyles';

type CabinetCardPropsType = {
    cardData: CardDataType;
    handleDetailedOpen?: () => void;
    handleSettingsOpen?: () => void;
    handlePromoteOpen?: () => void;
    handleNotificationsOpen?: () => void;
    handleOpenModal?: (id: string) => () => void;
};

export const CabinetCardWrapper: FC<CabinetCardPropsType> = props => {
    const {
        cardData,
        handleOpenModal,
        handlePromoteOpen,
        handleDetailedOpen,
        handleSettingsOpen,
        handleNotificationsOpen
    } = props;

    const {
        query: {page}
    } = useRouter();
    const {t} = useTranslation('cabinet');

    const {category, adsable, ads_type, status, creator} = cardData;
    const {top = false, turbo_sale = false} = cardData.slondo_services
        ? cardData.slondo_services.reduce<any>((keys, item) => {
              keys[item.service.name] = true;
              return keys;
          }, {})
        : {};

    const isXsDown = useMediaQuery(useTheme().breakpoints.down('xs'));

    const isPublic = status === 'public';
    const isSold = status === 'sold';
    const isSuspend = status === 'suspended';
    const isArchive = status === 'archive';
    const isHistory = status === 'history';
    const isModeration = status === 'moderation';
    const isReject = status === 'reject' || 'refuse';

    const allowSettings = isPublic || isArchive;

    const classes = useStyles({status});
    return (
        <Box className={classes.root}>
            <Box mb={1}>
                <div className="breadcrumbs">
                    <Hidden xsDown>
                        <BreadcrumbsComponent
                            category={category.name}
                            type={adsable?.type?.name}
                            subcategory={adsable?.sub_category.name}
                        />
                    </Hidden>
                    <Box display="flex">
                        <Box className="services">
                            {top && (
                                <div className="service-item top">
                                    <TopIcon />
                                    <Typography>{t('common:top')}</Typography>
                                </div>
                            )}
                            {turbo_sale && (
                                <div className="service-item turbo">
                                    <TurboRocket />
                                    <Typography>{t('common:turbo')}</Typography>
                                </div>
                            )}
                        </Box>
                        <Box
                            display="flex"
                            alignItems="center"
                            width={isXsDown ? 1 : 'auto'}
                            justifyContent={isXsDown ? 'space-between' : ''}
                        >
                            <Typography
                                variant="subtitle1"
                                color="initial"
                                component="p"
                            >
                                <span className={ads_type}>
                                    {t(`common:${ads_type}`)} №:&nbsp;
                                </span>
                                {cardData.id}
                            </Typography>
                            <div className="status">
                                <Typography variant="subtitle2" component="p">
                                    {t(status)}
                                </Typography>
                            </div>
                        </Box>
                    </Box>
                </div>
            </Box>
            <Box position="relative">
                <CabinetCard cardData={cardData} />
                <Grid container spacing={1} className="bottom-btns">
                    <Hidden mdUp>
                        <Grid item xs={7} sm={4} container>
                            {page?.includes('favorite') ? (
                                <Grid item xs={4} container>
                                    <CustomButton
                                        onClick={handleOpenModal(cardData.id)}
                                    >
                                        <CloseIcon />
                                    </CustomButton>
                                </Grid>
                            ) : (
                                creator && (
                                    <>
                                        {isPublic && (
                                            <>
                                                <Grid item xs={4} container>
                                                    <CustomButton
                                                        className="icons"
                                                        onClick={
                                                            handlePromoteOpen
                                                        }
                                                    >
                                                        <RocketIcon />
                                                    </CustomButton>
                                                </Grid>
                                                {handleNotificationsOpen && (
                                                    <Grid item xs={4} container>
                                                        <CustomButton
                                                            className="icons"
                                                            onClick={
                                                                handleNotificationsOpen
                                                            }
                                                        >
                                                            <NotificationIcon />
                                                        </CustomButton>
                                                    </Grid>
                                                )}
                                            </>
                                        )}
                                        {(isPublic || isArchive) && (
                                            <Grid item xs={4} container>
                                                <CustomButton
                                                    className="icons"
                                                    disabled={!allowSettings}
                                                    onClick={handleSettingsOpen}
                                                >common
                                                    <SettingsIcon />
                                                </CustomButton>
                                            </Grid>
                                        )}
                                    </>
                                )
                            )}
                        </Grid>
                    </Hidden>
                    {!isModeration && handleDetailedOpen && (
                        <Grid
                            item
                            md={12}
                            xs={
                                isPublic ||
                                isModeration ||
                                isSold ||
                                isSuspend ||
                                isReject
                                    ? 5
                                    : 12
                            }
                            sm={
                                isPublic ||
                                isModeration ||
                                isSuspend ||
                                isArchive ||
                                isHistory ||
                                isReject
                                    ? 8
                                    : 12
                            }
                        >
                            <CustomButton
                                className="unfold-btn"
                                onClick={handleDetailedOpen}
                            >
                                <Typography variant="subtitle1" component="p">
                                    {t('cabinet:unfold')}
                                </Typography>
                                &nbsp;
                                <ChevronRight color="action" />
                            </CustomButton>
                        </Grid>
                    )}
                </Grid>
                <Hidden smDown>
                    <div className="card-btns">
                        {page?.includes('favorite') ? (
                            <CustomButton
                                onClick={handleOpenModal(cardData.id)}
                            >
                                <CloseIcon />
                            </CustomButton>
                        ) : (
                            creator && (
                                <>
                                    {isPublic && (
                                        <>
                                            <CustomButton
                                                className="rocket-icon"
                                                onClick={handlePromoteOpen}
                                            >
                                                <RocketIcon />
                                                <Typography
                                                    style={{fontSize: '.75rem'}}
                                                >
                                                    {t('promote')}
                                                </Typography>
                                            </CustomButton>
                                            {handleNotificationsOpen && (
                                                <CustomButton
                                                    onClick={
                                                        handleNotificationsOpen
                                                    }
                                                >
                                                    <NotificationIcon />
                                                </CustomButton>
                                            )}
                                        </>
                                    )}
                                    {(isPublic || isArchive) && (
                                        <CustomButton
                                            disabled={!allowSettings}
                                            onClick={handleSettingsOpen}
                                        >
                                            <SettingsIcon />
                                        </CustomButton>
                                    )}
                                </>
                            )
                        )}
                    </div>
                </Hidden>
            </Box>
        </Box>
    );
};
