import {FC, MutableRefObject, useContext, useEffect, useRef, useState} from 'react';
import {
    Container,
    Hidden,
    Typography,
    useMediaQuery,
    useTheme
} from '@material-ui/core';
import {userAPI} from '@src/api/api';
import {months} from '@src/common_data/common';
import {booleanFields, noTranslatableFields} from '@src/common_data/fields_keys';
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
import {AuctionContent} from '@src/components/post/show_post/owner_auction_info/auction_content/AuctionContent';
import {OwnerAuctionInfo} from '@src/components/post/show_post/owner_auction_info/OwnerAuctionInfo';
import {ComplaintModal} from "@src/components/post/show_post/post_content/complaint_modal/ComplaintModal";
import {INCOGNITO_PHONES} from "@src/constants";
import {AuthCtx, ErrorCtx} from '@src/context';
import {useTranslation} from "next-i18next";
import {useModal} from "@src/hooks";
import {useStyles} from './useStyles';

type PostContentTypes = {
    post,
    showPhone,
    handleShowPhone,
    handleSafeDeal: () => void,
    authorPhones: { phone: string, additional_number: string }
    setFetchedPostData: () => Promise<void>
};

export type SlidersRefType = {
    slider1?: MutableRefObject<any>;
    slider2?: MutableRefObject<any>;
    slider3?: MutableRefObject<any>;
    slider4?: MutableRefObject<any>;
};

export const PostContent: FC<PostContentTypes> = (props) => {
    const {
        post,
        showPhone,
        authorPhones,
        handleShowPhone,
        handleSafeDeal,
        setFetchedPostData
    } = props;

    const {t} = useTranslation('post');

    const isIncognito = INCOGNITO_PHONES.some(p => p === authorPhones.phone);

    const {setErrorMsg} = useContext(ErrorCtx);
    const isMdDown = useMediaQuery(useTheme().breakpoints.down('md'));
    const isExAuc = post.ads_type.mark === 'exauc';
    const isAuction = post.ads_type.mark === 'auc' || isExAuc;

    const transKey = post.category.name;

    const {
        model,
        creator,
        observer: {
            number_of_views,
            number_of_favorites
        }
    } = post;

    const initSlidersRefs: SlidersRefType = {
        slider1: useRef(),
        slider2: useRef(),
        slider3: useRef(),
        slider4: useRef()
    };

    const {auth: {isAuth}, setAuthModalOpen} = useContext(AuthCtx);

    const [favorite, setFavorite] = useState(false);
    const [favCount, setFavCount] = useState(0);
    const [slidersRefs, setSlidersRefs] = useState(initSlidersRefs);

    const {
        modalOpen: complainOpen,
        handleModalClose: handleComplainClose,
        handleModalOpen: handleComplainOpen
    } = useModal();

    const {
        modalOpen: sliderOpen,
        handleModalClose: handleSliderClose,
        handleModalOpen: handleSliderOpen
    } = useModal();

    const date = new Date(post.created_at);
    const formatted_date = `${date.getDate()} ${t(`common:${months[date.getMonth()]}`)} ${date.getFullYear()}`;
    const showPhoneTxt = showPhone ? authorPhones.phone || 'number_not_available' : 'show_phone';


    const handleComplaintModalOpen = () => {
        if (isAuth) {
            handleComplainOpen();
        } else {
            setAuthModalOpen(true);
        }
    };

    const handleFavorite = () => {
        try {
            setFavorite(!favorite);
            setFavCount(favorite ? favCount - 1 : favCount + 1);
            userAPI.favoriteAds(post.id);
        } catch (e) {
            setErrorMsg(e.message);
        }
    };

    const parameterItems = Object.keys(model ?? {}).reduce((items, key, i) => {
        const isBooleanKey = booleanFields.some(f => f === key);
        const isNoTrans = noTranslatableFields.some(f => f === key);

        if (model[key].length && Array.isArray(model[key])) {
            items.push(
                <li key={i} className="params-list">
                    <Typography variant="subtitle1" className="key">
                        {t(`filters:${transKey}.${key}.name`)}:
                    </Typography>
                    <Typography variant="subtitle1" className="value">
                        {model[key]
                            .map((param) => {
                                return t(`filters:${isNoTrans
                                    ? `${param.name}`
                                    : `${transKey}.${param.name}.name`}`);
                            })
                            .join(', ')}
                    </Typography>
                </li>
            );
        } else if (isBooleanKey) {
            items.push(
                <li key={key}>
                    <Typography variant="subtitle1" className="key">
                        {t(`filters:${transKey}.${key}.name`)}:
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
                        {t(`filters:${transKey}.${key}.name`)}:
                    </Typography>
                    {model[key]?.hex_color_code && (
                        <span
                            style={{
                                width: 24,
                                height: 24,
                                boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
                                marginRight: 15,
                                borderRadius: '50%',
                                backgroundColor: `${model[key]?.hex_color_code}`
                            }}
                        />
                    )}
                    <Typography variant="subtitle1" className="value">
                        {typeof model[key] === 'string' || typeof model[key] === 'number'
                            ? model[key]
                            : t(`filters:${
                                isNoTrans
                                    ? `${model[key].name}`
                                    : `${transKey}.${model[key]?.name}.name`}`)}
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
        setFavorite(post.favorite);
        !!number_of_favorites && setFavCount(number_of_favorites);
    }, [post]);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Hidden mdDown>
                <div className="breadcrumbs">
                    <BreadcrumbsComponent
                        category={transKey}
                        subcategory={post.adsable?.sub_category.name}
                        type={post.adsable?.type?.name}
                    />
                </div>
            </Hidden>
            <Hidden mdDown>
                <div className="post-header">
                    <div className='post-type'>
                        <Typography
                            variant="h6"
                            className={post.ads_type.mark}
                        >
                            {t(`common:${post.ads_type.mark}`)}
                        </Typography>
                    </div>
                    <div className="title">
                        <Typography variant="h2" noWrap>
                            {post.title}
                        </Typography>
                    </div>
                    {!!post.model?.condition && (
                        <div className="condition">
                            <Typography variant="h6">{t(`${post.model.condition?.name}`)}</Typography>
                        </div>
                    )}
                </div>
            </Hidden>
            <div className="slider-wrapper">
                <SyncSliders
                    isCreator={post.creator}
                    imgs={post.images}
                    isFavorite={favorite}
                    slidersRefs={slidersRefs}
                    favoriteCount={favCount}
                    handleFavorite={handleFavorite}
                    handleOpenModal={handleSliderOpen}
                />
                <Hidden lgUp>
                    <div className='post-type-adaptive'>
                        <Typography
                            variant="h6"
                            className={post.ads_type.mark}
                        >
                            {t(`common:${post.ads_type.mark}`)}
                        </Typography>
                    </div>
                </Hidden>
            </div>
            <Container maxWidth="xl" disableGutters={!isMdDown}>
                <Hidden lgUp>
                    <div className="post-header">
                        <div>
                            <Typography variant='h6' className="price">
                                {numberPrettier(post.price) + ' ' + t(`common:${post.currency.name}`)}
                                {!!post.condition.name && (
                                    <div className="condition">
                                        <Typography variant="h6">{t(`${post.model?.condition?.name}`)}</Typography>
                                    </div>
                                )}
                            </Typography>
                            <Typography variant="h2" className="title" noWrap>
                                {post.title}
                            </Typography>
                        </div>
                    </div>
                </Hidden>
                <Hidden mdDown>
                    <div className="post-info">
                        <Typography variant="subtitle1">
                            <span>{t('common:post')} №:</span> {post.id}
                        </Typography>
                        <Typography variant="subtitle1">
                            {t('published')}: {formatted_date}
                        </Typography>
                        <Typography variant="subtitle1">
                            {t('views')}: {number_of_views}
                        </Typography>
                        {!creator && (
                            <Typography variant="subtitle1" onClick={handleComplaintModalOpen}>
                                {t('complain')} <WarningIcon/>
                            </Typography>
                        )}
                    </div>
                </Hidden>
                <div className="post-bonus">
                    {!!post.delivery && (
                        <span className="delivery">
                            <DeliveryIcon/>
                            <Typography variant="subtitle1">
                                {t('common:delivery')}
                            </Typography>
                        </span>
                    )}
                    {!!post.safe_deal && (
                        <span className="safe_deal">
                            <SafeIcon/>
                            <Typography variant="subtitle1">
                                {t('common:safe_deal')}
                            </Typography>
                        </span>
                    )}
                    {!!post.exchange && (
                        <span className="exchange">
                            <SwapIcon/>
                            <Typography variant="subtitle1">
                                {t('common:exchange')}
                            </Typography>
                        </span>
                    )}
                    {!!post.available_start_time && (
                        <span className="available">
                            <PhoneIcon/>
                            {!!post.available_days?.length && (
                                <Typography variant="subtitle1" color="primary">
                                    {weekDaysHelper(post.available_days, t)}&nbsp;
                                </Typography>
                            )}
                            <Typography variant="subtitle1">
                                {`${post.available_start_time} - ${post.available_end_time}`}
                            </Typography>
                        </span>
                    )}
                    {!!post.auction?.auto_renewal && (
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
                        <CustomButton color='primary' onClick={handleShowPhone}>
                            <Typography variant='subtitle1' component='p'>
                                {!isIncognito && (
                                    <>
                                        <span>{t(showPhoneTxt)}</span>
                                        <br/>
                                    </>
                                )}
                                {showPhone && authorPhones.additional_number && (
                                    <span>{t(authorPhones.additional_number)}</span>
                                )}
                            </Typography>
                        </CustomButton>
                        <CustomButton disabled color='silver'>
                            <Typography variant='subtitle1'>{t('writeMessage')}</Typography>
                        </CustomButton>
                    </div>
                    {isAuction && (
                        <AuctionContent
                            postData={post}
                            setFetchedPostData={setFetchedPostData}
                        />
                    )}
                </Hidden>
                <div className="post-location">
                    <Hidden mdDown>
                        <Typography variant="button" noWrap>
                            {t(`locations:location`)}:
                        </Typography>
                    </Hidden>
                    <div className='location-text'>
                        <LocationIcon/>
                        <Typography variant="subtitle1">
                            {`${t(`locations:${post.region.name}.name`) ?? ''}`}
                            {post.city.name ? `, ${t(`locations:${post.region.name}.${post.city.name}`)}` : ''}
                        </Typography>
                    </div>
                </div>
                <Hidden mdDown>
                    <div className="post-category">
                        <Typography variant="subtitle1" color="initial">
                            {t(`categories:${transKey}.name`)}&nbsp;-&nbsp;
                            {t(`categories:${transKey}.${post.adsable.sub_category.name}.name`)}
                            {
                                post.adsable?.type &&
                                <span>
                                    &nbsp;-&nbsp;
                                    {t(`categories:${transKey}.${post.adsable.sub_category.name}.${post.adsable.type.name}.name`)}
                                </span>
                            }
                        </Typography>
                    </div>
                </Hidden>
                <div className="post-description">
                    <Typography variant="button" color="initial">
                        {t('description')}:
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        className='description'
                    >
                        <pre>{post.description}</pre>
                    </Typography>
                </div>
                {isAuction && (
                    <div className="started-price">
                        <Typography variant="button">{t('startingPrice')}</Typography>
                        <span>
                            <Typography variant="body2">
                                {numberPrettier(post.price)} {t(`common:${post.currency.name}`)}
                            </Typography>
                        </span>
                    </div>
                )}
                {!!parameterItems.length && (
                    <div className="post-parameters">
                        <Typography variant="button" color="initial">
                            {t('parameters')}:
                        </Typography>
                        <ul>{parameterItems}</ul>
                    </div>
                )}
                <Hidden lgUp>
                    <div className="post-info">
                        <div className='info-wrapper'>
                            <Typography variant="subtitle1">
                                <span>{t('common:post')} №:</span> {post.id}
                            </Typography>
                            <Hidden xsDown>
                                <Typography variant="subtitle1">
                                    {t('published')}: {formatted_date}
                                </Typography>
                            </Hidden>
                            <Hidden smUp>
                                <Typography variant="subtitle1">
                                    {formatted_date}
                                </Typography>
                            </Hidden>
                            <Typography variant="subtitle1">
                                {t('views')}: {number_of_views}
                            </Typography>
                        </div>
                        <CustomButton className="btn-report" onClick={handleComplaintModalOpen}>
                            {t('complain')}
                        </CustomButton>
                    </div>
                </Hidden>
                <Hidden lgUp>
                    <OwnerAuctionInfo
                        post={post}
                        authorPhones={authorPhones}
                        handleSafeDeal={handleSafeDeal}
                        setFetchedPostData={setFetchedPostData}
                    />
                </Hidden>
                <ModalSyncSliders
                    open={sliderOpen}
                    imgs={post.images}
                    title={post.title}
                    slidersRefs={slidersRefs}
                    onClose={handleSliderClose}
                />
            </Container>
            <ComplaintModal
                postId={post.id}
                open={complainOpen}
                onClose={handleComplainClose}
            />
        </div>
    );
};
