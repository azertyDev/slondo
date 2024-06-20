import {FC, useContext, useEffect, useState} from 'react';
import {
    Container,
    Hidden,
    Typography,
    useMediaQuery,
    useTheme
} from '@material-ui/core';
import {userAPI} from '@src/api/api';
import {
    booleanFields,
    noTranslatableFields
} from '@src/common_data/fields_keys';
import {LocationIcon} from '@src/components/elements/icons/LocationIcon';
import {WarningIcon} from '@src/components/elements/icons/WarningIcon';
import {PhoneIcon} from '@src/components/elements/icons/PhoneIcon';
import {SwapIcon} from '@src/components/elements/icons/SwapIcon';
import {SafeIcon} from '@src/components/elements/icons/services_icons/SafeIcon';
import {DeliveryIcon} from '@src/components/elements/icons/services_icons/DeliveryIcon';
import {SyncSliders} from './sync_sliders/SyncSliders';
import {BreadcrumbsComponent} from '@src/components/elements/breadcrumbs/Breadcrumbs';
import {
    numberPrettier,
    priceTransform,
    transformCyrillic,
    weekDaysHelper
} from '@src/helpers';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {AutoRenewalIcon} from '@src/components/elements/icons';
import {AuctionContent} from '@root/src/components/post/show_post/owner_auction_info/auction_content/AuctionContent';
import {OwnerAuctionInfo} from '@root/src/components/post/show_post/owner_auction_info/OwnerAuctionInfo';
import {ComplaintModal} from '@root/src/components/post/show_post/post_content/complaint_modal/ComplaintModal';
import {ShowPhone} from '@src/components/elements/show_phone/ShowPhone';
import {AuthCtx, CategoriesCtx, ErrorCtx} from '@src/context';
import {useTranslation} from 'next-i18next';
import {useDate, useModal} from '@src/hooks';
import {useStyles} from './useStyles';

type PostContentTypes = {
    post;
    auctionInfo;
    handleSafeDeal: () => void;
    handleChatOpen: () => void;
    setFetchedPostData: () => Promise<void>;
};

export const PostContent: FC<PostContentTypes> = props => {
    const {
        post,
        auctionInfo,
        handleSafeDeal,
        handleChatOpen,
        setFetchedPostData
    } = props;

    const siteCategories = useContext(CategoriesCtx);
    const {t} = useTranslation('post');
    const {setErrorMsg} = useContext(ErrorCtx);
    const {user} = useContext(AuthCtx);
    const isMdDown = useMediaQuery(useTheme().breakpoints.down('md'));
    const transKey = post.category?.name;
    const isExAuc = post.ads_type?.mark === 'exauc';
    const isAuction = post.ads_type?.mark === 'auc' || isExAuc;
    const self = post.author?.id === user?.id;

    const mainCtgr = siteCategories.find(
        ctgr => ctgr?.name === post.category?.name
    );
    const subCtgr = mainCtgr?.subcategory?.find(
        subCtgr => subCtgr?.name === post.adsable?.sub_category?.name
    );
    const typeCtgr = subCtgr?.type?.find(
        typeCtgr => typeCtgr?.name === post.adsable?.type?.name
    );

    const {model} = post;

    const {
        auth: {isAuth},
        setAuthModalOpen
    } = useContext(AuthCtx);

    const [favCount, setFavCount] = useState(0);
    const [favorite, setFavorite] = useState(false);

    const jobOrService =
        post.category?.name === 'job' || post.category?.name === 'service';

    const {
        modalOpen: complainOpen,
        handleModalClose: handleComplainClose,
        handleModalOpen: handleComplainOpen
    } = useModal();

    const {time} = useDate()(post.created_at);

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
            userAPI.favoriteAds(post?.id);
        } catch (e) {
            setErrorMsg(e.message);
        }
    };

    const getPrice = () => {
        let price = post.price;

        if (isAuction && auctionInfo.bets.length) {
            const {bets} = auctionInfo;
            price = bets[0].bet;
        }

        return t(priceTransform(price, jobOrService));
    };

    const parameterItems = Object.keys(model ?? {}).reduce((items, key, i) => {
        const isBooleanKey = booleanFields.some(f => f === key);
        const isNoTrans = noTranslatableFields.some(f => f === key);

        if (model[key].length && Array.isArray(model[key])) {
            items.push(
                <li key={i} className="params-list">
                    <Typography variant="subtitle1" className="key">
                        {t(`filters:${transKey}.${key}?.name`)}:
                    </Typography>
                    <Typography variant="subtitle1" className="value">
                        {model[key]
                            .map(param => {
                                return t(
                                    `filters:${
                                        isNoTrans
                                            ? `${param?.name}`
                                            : `${transKey}.${param?.name}?.name`
                                    }`
                                );
                            })
                            .join(', ')}
                    </Typography>
                </li>
            );
        } else if (isBooleanKey) {
            items.push(
                <li key={key}>
                    <Typography variant="subtitle1" className="key">
                        {t(`filters:${transKey}.${key}?.name`)}:
                    </Typography>
                    <Typography variant="subtitle1" className="value">
                        {t(
                            `common:${
                                transKey === 'electronics' ? 'has' : 'yes'
                            }`
                        )}
                    </Typography>
                </li>
            );
        } else if (!Array.isArray(model[key])) {
            items.push(
                <li key={key}>
                    <Typography variant="subtitle1" className="key">
                        {t(
                            `filters:${
                                isNoTrans
                                    ? `${key}`
                                    : `${transKey}.${key}?.name`
                            }`
                        )}
                        :
                    </Typography>
                    {model[key]?.hex_color_code && (
                        <span
                            style={{
                                width: 24,
                                height: 24,
                                marginRight: 15,
                                borderRadius: '50%',
                                boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
                                backgroundColor: `${model[key]?.hex_color_code}`
                            }}
                        />
                    )}
                    <Typography variant="subtitle1" className="value">
                        {typeof model[key] === 'string' ||
                        typeof model[key] === 'number'
                            ? model[key]
                            : t(
                                  `filters:${
                                      isNoTrans
                                          ? `${model[key]?.name}`
                                          : `${transKey}.${model[key]?.name}?.name`
                                  }`
                              )}
                    </Typography>
                </li>
            );
        }
        return items;
    }, []);

    useEffect(() => {
        setFavorite(post.favorite);
        !!post?.observer?.number_of_favorites &&
            setFavCount(post?.observer?.number_of_favorites);
    }, [post]);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Hidden mdDown>
                <div className="breadcrumbs">
                    <BreadcrumbsComponent
                        category={transKey}
                        type={post.adsable?.type?.name}
                        subcategory={post.adsable?.sub_category?.name}
                    />
                </div>
            </Hidden>
            <Hidden mdDown>
                <div className="post-header">
                    <div className="post-type">
                        <Typography
                            variant="h6"
                            className={post.ads_type?.mark}
                        >
                            {t(`common:${post.ads_type?.mark}`)}
                        </Typography>
                    </div>
                    <div className="title">
                        <Typography variant="h2" noWrap>
                            {post.title}
                        </Typography>
                    </div>
                    {!!post.model?.condition && (
                        <div className="condition">
                            <Typography variant="h6">
                                {t(`${post.model.condition?.name}`)}
                            </Typography>
                        </div>
                    )}
                </div>
            </Hidden>
            <div className="slider-wrapper">
                <SyncSliders
                    post={{
                        title: post.title,
                        description: post.description
                    }}
                    imgs={post.images}
                    isFavorite={favorite}
                    favoriteCount={favCount}
                    isCreator={post.creator}
                    handleFavorite={handleFavorite}
                />
                <Hidden lgUp>
                    <div className="post-type-adaptive">
                        <Typography
                            variant="h6"
                            className={post.ads_type?.mark}
                        >
                            {t(`common:${post.ads_type?.mark}`)}
                        </Typography>
                    </div>
                </Hidden>
            </div>
            <Container maxWidth="xl" disableGutters={!isMdDown}>
                <Hidden lgUp>
                    <div className="post-header">
                        <div>
                            <Typography variant="h6" className="price">
                                {getPrice()}&nbsp;
                                {post.price !== 0 &&
                                    t(`common:${post.currency?.name}`)}
                                {!!post.condition?.name && (
                                    <div className="condition">
                                        <Typography variant="h6">
                                            {t(
                                                `${post.model?.condition?.name}`
                                            )}
                                        </Typography>
                                    </div>
                                )}
                            </Typography>
                            <Typography variant="h2" className="title">
                                {post.title}
                            </Typography>
                        </div>
                    </div>
                </Hidden>
                <Hidden mdDown>
                    <div className="post-info">
                        <Typography variant="subtitle1">
                            <span>{t('common:post')} №:</span> {post?.id}
                        </Typography>
                        <Typography variant="subtitle1">
                            {t('published')}: {time}
                        </Typography>
                        <Typography variant="subtitle1">
                            {t('views')}: {post?.observer?.number_of_views}
                        </Typography>
                        {!self && (
                            <Typography
                                variant="subtitle1"
                                onClick={handleComplaintModalOpen}
                            >
                                {t('complain')} <WarningIcon />
                            </Typography>
                        )}
                    </div>
                </Hidden>
                <div className="post-bonus">
                    {!!post.delivery && (
                        <span className="delivery">
                            <DeliveryIcon />
                            <Typography variant="subtitle1">
                                {t('common:delivery')}
                            </Typography>
                        </span>
                    )}
                    {!!post.safe_deal && (
                        <span className="safe_deal">
                            <SafeIcon />
                            <Typography variant="subtitle1">
                                {t('common:safe_deal')}
                            </Typography>
                        </span>
                    )}
                    {!!post.exchange && (
                        <span className="exchange">
                            <SwapIcon />
                            <Typography variant="subtitle1">
                                {t('common:exchange')}
                            </Typography>
                        </span>
                    )}
                    {!!post.available_start_time && (
                        <span className="available">
                            <PhoneIcon />
                            {!!post.available_days?.length && (
                                <Typography variant="subtitle1" color="primary">
                                    {weekDaysHelper(post.available_days, t)}
                                    &nbsp;
                                </Typography>
                            )}
                            <Typography variant="subtitle1">
                                {`${post.available_start_time} - ${post.available_end_time}`}
                            </Typography>
                        </span>
                    )}
                    {!!post.auction?.auto_renewal && (
                        <span className="auto-renewal">
                            <AutoRenewalIcon />
                            <Typography variant="subtitle1">
                                {t('common:auto_ren')}
                            </Typography>
                        </span>
                    )}
                </div>
                <Hidden lgUp>
                    <div className="contact">
                        <ShowPhone postId={post?.id} />
                        {!self && (
                            <CustomButton
                                color="silver"
                                className="write-msg"
                                onClick={handleChatOpen}
                            >
                                <Typography variant="subtitle1">
                                    {t('writeMessage')}
                                </Typography>
                            </CustomButton>
                        )}
                    </div>
                    {isAuction && (
                        <AuctionContent
                            postData={post}
                            auctionInfo={auctionInfo}
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
                    <div className="location-text">
                        <LocationIcon />
                        <Typography variant="subtitle1">
                            {`${
                                t(`locations:${post.region?.name}?.name`) ?? ''
                            }`}
                            {post.city?.name
                                ? `, ${t(
                                      `locations:${post.region?.name}.${post.city?.name}`
                                  )}`
                                : ''}
                        </Typography>
                    </div>
                </div>
                <div className="post-category">
                    <div>
                        <Typography variant="subtitle1" color="initial">
                            {t(`categories:${mainCtgr?.name}?.name`)}
                            {subCtgr && (
                                <>
                                    &nbsp;-{' '}
                                    {t(
                                        `categories:${mainCtgr?.name}.${subCtgr?.name}?.name`
                                    )}
                                </>
                            )}
                            {typeCtgr && (
                                <>
                                    &nbsp;-{' '}
                                    <span>
                                        {' '}
                                        {t(
                                            `categories:${mainCtgr?.name}.${subCtgr?.name}.${typeCtgr?.name}?.name`
                                        )}
                                    </span>
                                </>
                            )}
                        </Typography>
                    </div>
                </div>
                <div className="post-description">
                    <Hidden xsDown>
                        <Typography variant="button" color="initial">
                            {t('description')}:
                        </Typography>
                    </Hidden>
                    <Typography
                        component="span"
                        variant="subtitle1"
                        className="description"
                    >
                        <pre>{post.description}</pre>
                    </Typography>
                </div>
                {isAuction && (
                    <div className="started-price">
                        <Typography variant="button">
                            {t('startingPrice')}
                        </Typography>
                        <span>
                            <Typography variant="body2">
                                {numberPrettier(post.price)}{' '}
                                {t(`common:${post.currency?.name}`)}
                            </Typography>
                        </span>
                    </div>
                )}
                {!!parameterItems.length && (
                    <div className="post-parameters">
                        <Hidden xsDown>
                            <Typography variant="button" color="initial">
                                {t('parameters')}:
                            </Typography>
                        </Hidden>
                        <ul>{parameterItems}</ul>
                    </div>
                )}
                <Hidden lgUp>
                    <div className="post-info">
                        <div className="info-wrapper">
                            <Typography variant="subtitle1">
                                <span>{t('common:post')} №:</span> {post?.id}
                            </Typography>
                            <Hidden xsDown>
                                <Typography variant="subtitle1">
                                    {t('published')}: {time}
                                </Typography>
                            </Hidden>
                            <Hidden smUp>
                                <Typography variant="subtitle1">
                                    {time}
                                </Typography>
                            </Hidden>
                            <Typography variant="subtitle1">
                                {t('views')}: {post?.observer?.number_of_views}
                            </Typography>
                        </div>
                        <CustomButton
                            className="btn-report"
                            onClick={handleComplaintModalOpen}
                        >
                            {t('complain')}
                        </CustomButton>
                    </div>
                </Hidden>
                <Hidden lgUp>
                    <OwnerAuctionInfo
                        post={post}
                        auctionInfo={auctionInfo}
                        handleChatOpen={handleChatOpen}
                        handleSafeDeal={handleSafeDeal}
                        setFetchedPostData={setFetchedPostData}
                    />
                </Hidden>
            </Container>
            <ComplaintModal
                postId={post?.id}
                open={complainOpen}
                onClose={handleComplainClose}
            />
        </div>
    );
};
