import {FC, MutableRefObject, useEffect, useRef, useState} from 'react';
import {WithT} from 'i18next';
import {
    Backdrop,
    Container,
    Hidden,
    List,
    ListItem,
    ListItemText,
    Modal,
    TextField,
    Typography,
    useMediaQuery,
    useTheme
} from '@material-ui/core';
import {ReadMore} from '@src/components/elements/read_more/readMore';
import {LocationIcon} from '@src/components/elements/icons/LocationIcon';
import {WarningIcon} from '@src/components/elements/icons/WarningIcon';
import {PhoneIcon} from '@src/components/elements/icons/PhoneIcon';
import {SwapIcon} from '@src/components/elements/icons/SwapIcon';
import {SafeIcon} from '@src/components/elements/icons/services_icons/SafeIcon';
import {DeliveryIcon} from '@src/components/elements/icons/services_icons/DeliveryIcon';
import {SyncSliders} from './sync_sliders/SyncSliders';
import {ModalSyncSliders} from './modal_sync_sliders/ModalSyncSliders';
import {BreadcrumbsComponent} from '@src/components/elements/breadcrumbs/Breadcrumbs';
import {numberPrettier, weekDaysHelper} from '@src/helpers';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {RenewalIcon} from '@src/components/elements/icons';
import {months} from '@src/common_data/common';
import {AuctionContent} from '@src/components/post/show_post/owner_auction_info/auction_content/AuctionContent';
import {userAPI} from '@src/api/api';
import {setErrorMsgAction} from '@root/src/redux/slices/errorSlice';
import {useDispatch} from 'react-redux';
import {booleanFields} from '@src/common_data/fields_keys';
import {useStyles} from './useStyles';
import {ResponsiveModal} from '@src/components/elements/responsive_modal/ResponsiveModal';


type PostContentTypes = {
    data,
    setFetchedPostData: () => Promise<void>
} & WithT;

export type SlidersRefType = {
    slider1?: MutableRefObject<any>;
    slider2?: MutableRefObject<any>;
    slider3?: MutableRefObject<any>;
    slider4?: MutableRefObject<any>;
};

export const PostContent: FC<PostContentTypes> = (props) => {
    const {
        t,
        data,
        setFetchedPostData
    } = props;

    const dispatch = useDispatch();
    const isMdDown = useMediaQuery(useTheme().breakpoints.down('md'));
    const isExAuc = data.ads_type.mark === 'exauc';
    const isAuction = data.ads_type.mark === 'auc' || isExAuc;

    const {
        model,
        observer: {number_of_favorites, number_of_views}
    } = data;

    const initSlidersRefs: SlidersRefType = {
        slider1: useRef(),
        slider2: useRef(),
        slider3: useRef(),
        slider4: useRef()
    };

    const [favorite, setFavorite] = useState(false);
    const [favCount, setFavCount] = useState(0);
    const [descHeight, setDescHeight] = useState(0);
    const [slidersRefs, setSlidersRefs] = useState(initSlidersRefs);
    const [modalsState, setModalsState] = useState({openSliderModal: false, openComplaintModal: false});
    const {openComplaintModal, openSliderModal} = modalsState;

    const date = new Date(data.created_at);
    const formatted_date = `${date.getDate()} ${t(`common:${months[date.getMonth()]}`)} ${date.getFullYear()}`;

    const handleShowSliderModal = value => () => setModalsState({...modalsState, openSliderModal: value});
    const handleComplaintModal = value => () => setModalsState({...modalsState, openComplaintModal: value});
    const handleFavorite = () => {
        try {
            setFavorite(!favorite);
            setFavCount(favorite ? favCount - 1 : favCount + 1);
            userAPI.favoriteAds(data.id);
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };

    const parameterItems = Object.keys(model ?? {}).reduce((items, key, i) => {
        const isBooleanKey = booleanFields.some(f => f === key);

        if (Array.isArray(model[key]) && model[key].length) {
            const params = (
                <Typography variant="subtitle1" className="value">
                    {model[key]
                        .map((param) => param.name)
                        .join(', ')}
                </Typography>
            );
            items.push(
                <li key={i} className="params-list">
                    <Typography variant="subtitle1" className="key">
                        {t(`filters:${key}`)}
                    </Typography>
                    {params}
                </li>
            );
        } else if (isBooleanKey) {
            items.push(
                <li key={key}>
                    <Typography variant="subtitle1" className="key">
                        {t(`filters:${key}`)}
                    </Typography>
                    <Typography variant="subtitle1" className="value">
                        {t('common:yes')}
                    </Typography>
                </li>
            );
        } else if (!Array.isArray(model[key])) {
            items.push(
                <li key={key}>
                    <Typography variant="subtitle1" className="key">
                        {t(`filters:${key}`)}
                    </Typography>
                    {model[key]?.hex_color_code && (
                        <span
                            style={{
                                backgroundColor: `${model[key]?.hex_color_code}`,
                                width: 24,
                                height: 24,
                                boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
                                marginRight: 15,
                                borderRadius: '50%'
                            }}
                        />
                    )}
                    <Typography variant="subtitle1" className="value">
                        {typeof model[key] === 'string' || typeof model[key] === 'number'
                         ? model[key]
                         : model[key]?.name}
                    </Typography>
                </li>
            );
        }
        return items;
    }, []);

    useEffect(() => {
        setSlidersRefs(initSlidersRefs);
    }, []);

    useEffect(() => {
        setFavorite(data.favorite);
        !!number_of_favorites && setFavCount(number_of_favorites);
        setDescHeight(document.getElementById('post-description').clientHeight);
    }, [data]);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Hidden mdDown>
                <div className="breadcrumbs">
                    <BreadcrumbsComponent
                        category={data.category.name}
                        subcategory={data.adsable?.sub_category.name}
                        type={data.adsable?.type.name}
                    />
                </div>
            </Hidden>
            <Hidden mdDown>
                <div className="post-header">
                    <div className='post-type'>
                        <Typography
                            variant="h6"
                            className={data.ads_type.mark}
                        >
                            {t(`common:${data.ads_type.mark}`)}
                        </Typography>
                    </div>
                    <div className="title">
                        <Typography variant="h2" noWrap>
                            {data.title}
                        </Typography>
                    </div>
                    {!data.condition.name && (
                        <div className="condition">
                            <Typography variant="h6">Новое</Typography>
                        </div>
                    )}
                </div>
            </Hidden>
            <div className="slider-wrapper">
                <SyncSliders
                    isCreator={data.creator}
                    imgs={data.images}
                    isFavorite={favorite}
                    slidersRefs={slidersRefs}
                    favoriteCount={favCount}
                    handleFavorite={handleFavorite}
                    handleOpenModal={handleShowSliderModal(true)}
                />
                <Hidden lgUp>
                    <div className='post-type-adaptive'>
                        <Typography
                            variant="h6"
                            className={data.ads_type.mark}
                        >
                            {t(`common:${data.ads_type.mark}`)}
                        </Typography>
                    </div>
                </Hidden>
            </div>
            <Container maxWidth="xl" disableGutters={!isMdDown}>
                <Hidden lgUp>
                    <div className="post-header">
                        <div>
                            <Typography variant='h6' className="price">
                                {numberPrettier(data.price) + ' ' + t(`common:${data.currency.name}`)}
                                {!data.condition.name && (
                                    <div className="condition">
                                        <Typography variant="h6">Новое</Typography>
                                    </div>
                                )}
                            </Typography>
                            <Typography variant="h2" className="title" noWrap>
                                {data.title}
                            </Typography>
                        </div>
                    </div>
                </Hidden>
                <Hidden mdDown>
                    <div className="post-info">
                        <Typography variant="subtitle1">
                            <span>{t('common:post')} №:</span> {data.id}
                        </Typography>
                        <Typography variant="subtitle1">
                            {t('post:published')}: {formatted_date}
                        </Typography>
                        <Typography variant="subtitle1">
                            {t('post:views')}: {number_of_views}
                        </Typography>
                        <Typography variant="subtitle1" onClick={handleComplaintModal(true)}>
                            {t('post:complain')} <WarningIcon />
                        </Typography>
                    </div>
                </Hidden>
                <div className="post-bonus">
                    {!!data.delivery && (
                        <span className="delivery">
                        <DeliveryIcon/>
                            <Typography variant="subtitle1">
                            {t('common:delivery')}
                        </Typography>
                    </span>
                    )}
                    {!!data.safe_deal && (
                        <span className="safe_deal">
                        <SafeIcon/>
                            <Typography variant="subtitle1">
                            {t('common:safeDeal')}
                        </Typography>
                    </span>
                    )}
                    {!!data.exchange && (
                        <span className="exchange">
                        <SwapIcon/>
                            <Typography variant="subtitle1">
                            {t('common:exchange')}
                        </Typography>
                    </span>
                    )}
                    {!!data.available_start_time && (
                        <span className="available">
                        <PhoneIcon/>
                            {!!data.available_days?.length && (
                                <Typography variant="subtitle1" color="primary">
                                    {weekDaysHelper(data.available_days, t)}&nbsp;
                                </Typography>
                            )}
                            <Typography variant="subtitle1">
                            {`${data.available_start_time} - ${data.available_end_time}`}
                        </Typography>
                    </span>
                    )}
                    {!!data.auction?.auto_renewal && (
                        <span className="auto-renewal">
                            <RenewalIcon/>
                            <Typography variant="subtitle1">
                            {t('common:auto_ren')}
                        </Typography>
                    </span>
                    )}
                </div>
                <Hidden lgUp>
                    <div className="contact">
                        <CustomButton>
                            <Typography variant='subtitle1'>{t('post:show_phone')}</Typography>
                        </CustomButton>
                        <CustomButton>
                            <Typography variant='subtitle1'>{t('post:writeMessage')}</Typography>
                        </CustomButton>
                    </div>
                    {isAuction && (
                        <AuctionContent
                            t={t}
                            postData={data}
                            setFetchedPostData={setFetchedPostData}
                        />
                    )}
                </Hidden>
                <div className="post-location">
                    <Hidden mdDown>
                        <Typography variant="button" noWrap>
                            {t(`locations:location`)}
                        </Typography>
                    </Hidden>
                    {data.region.name || data.city.name || data.district.name
                        ? <div className='location-text'>
                            <LocationIcon />
                            <Typography variant="subtitle1">
                                {`${t(`locations:${data.region.name}.name`) ?? ''}`}
                                {data.city.name ? `, ${t(`locations:${data.region.name}.${data.city.name}`)}` : ''}
                            </Typography>
                        </div>
                        : <Typography variant="subtitle1">{t(`locations:notIndicate`)}</Typography>}
                </div>
                <Hidden mdDown>
                    <div className="post-category">
                        <Typography variant="subtitle1" color="initial">
                            {t(`categories:${data.category.name}.name`)}
                            &nbsp;-&nbsp;
                            {t(`categories:${data.category.name}.${data.adsable.sub_category.name}.name`)}
                            {
                                data.adsable?.type &&
                                <span>
                                    &nbsp;-&nbsp;
                                    {t(`categories:${data.category.name}.${data.adsable.sub_category.name}.${data.adsable.type.name}.name`)}
                                </span>
                            }
                        </Typography>
                    </div>
                </Hidden>
                <div className="post-description">
                    <Typography variant="button" color="initial">
                        {t('post:description')}
                    </Typography>
                    <ReadMore t={t} descHeight={descHeight}>
                        <Typography
                            className='description'
                            variant="subtitle1"
                            id="post-description"
                        >
                            {data.description}
                        </Typography>
                    </ReadMore>
                </div>
                {isAuction && (
                    <div className="started-price">
                        <Typography variant="button">{t('post:startingPrice')}</Typography>
                        <span>
                        <Typography variant="body2">
                            {numberPrettier(data.price)} {t(`common:${data.currency.name}`)}
                        </Typography>
                    </span>
                    </div>
                )}
                {!!parameterItems.length && (
                    <div className="post-parameters">
                        <Typography variant="button" color="initial">
                            {t('post:parameters')}
                        </Typography>
                        <ul>{parameterItems}</ul>
                    </div>
                )}
                <Hidden lgUp>
                    <div className="post-info">
                        <div className='info-wrapper'>
                            <Typography variant="subtitle1">
                                <span>{t('common:post')} №:</span> {data.id}
                            </Typography>
                            <Hidden xsDown>
                                <Typography variant="subtitle1">
                                    {t('post:published')}: {formatted_date}
                                </Typography>
                            </Hidden>
                            <Hidden smUp>
                                <Typography variant="subtitle1">
                                    {formatted_date}
                                </Typography>
                            </Hidden>
                            <Typography variant="subtitle1">
                                {t('post:views')}: {number_of_views}
                            </Typography>
                            <Hidden mdDown>
                                <Typography variant="subtitle1" onClick={handleComplaintModal(true)}>
                                    {t('post:complain')} <WarningIcon />
                                </Typography>
                            </Hidden>
                        </div>
                        <CustomButton className="btn-report" onClick={handleComplaintModal(true)}>
                            {t('post:complain')}
                        </CustomButton>
                    </div>
                </Hidden>
                <ModalSyncSliders
                    imgs={data.images}
                    title={data.title}
                    open={openSliderModal}
                    slidersRefs={slidersRefs}
                    onClose={handleShowSliderModal(false)}
                />
            </Container>
            <ResponsiveModal
                maxWidth='sm'
                openDialog={openComplaintModal}
                handleCloseDialog={handleComplaintModal(false)}
            >
                <div className={classes.modalBody}>
                    <Typography variant='h6'>
                        {t('post:indicateReason')}
                    </Typography>
                    {/*<List component="nav" disablePadding>*/}
                    {/*    <ListItem button disableGutters>*/}
                    {/*        <ListItemText primary="Столкнулся с мошенничеством и обманом."/>*/}
                    {/*    </ListItem>*/}
                    {/*    <ListItem button disableGutters>*/}
                    {/*        <ListItemText primary="Товар указан, но его нет в наличии."/>*/}
                    {/*    </ListItem>*/}
                    {/*    <ListItem button disableGutters>*/}
                    {/*        <ListItemText primary="Цена неактуальная."/>*/}
                    {/*    </ListItem>*/}
                    {/*    <ListItem button disableGutters>*/}
                    {/*        <ListItemText primary="Содержание нарушает правила сервиса."/>*/}
                    {/*    </ListItem>*/}
                    {/*    <ListItem button disableGutters>*/}
                    {/*        <ListItemText primary="Автор объявления вызывает подозрения."/>*/}
                    {/*    </ListItem>*/}
                    {/*</List>*/}
                    <div className='textarea'>
                        <TextField
                            fullWidth
                            multiline
                            rows={10}
                            placeholder={t('post:describeReason')}
                            helperText='0/500'
                            variant="outlined"
                        />
                    </div>
                    <CustomButton>
                        <Typography variant='subtitle1'>
                            {t('common:send')}
                        </Typography>
                    </CustomButton>
                </div>
            </ResponsiveModal>
        </div>
    );
};
