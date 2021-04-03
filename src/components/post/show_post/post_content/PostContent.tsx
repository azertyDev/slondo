import React, {FC} from 'react';
import {WithT} from 'i18next';
import Link from 'next/link';
import {
    Backdrop,
    Hidden,
    List,
    ListItem,
    ListItemText,
    Modal,
    Snackbar,
    TextField,
    Typography
} from '@material-ui/core';
import {ReadMore} from '@src/components/elements/read_more/readMore';
import {LocationIcon} from '@src/components/elements/icons/LocationIcon';
import {WarningIcon} from '@src/components/elements/icons/WarningIcon';
import {PhoneIcon} from '@src/components/elements/icons/PhoneIcon';
import {SwapIcon} from '@src/components/elements/icons/SwapIcon';
import {SafeIcon} from '@src/components/elements/icons/SafeIcon';
import {DeliveryIcon} from '@src/components/elements/icons/DeliveryIcon';
import {SyncSliders} from './sync_sliders/SyncSliders';
import {ModalSyncSliders} from './modal_sync_sliders/ModalSyncSliders';
import {BreadcrumbsComponent} from '@src/components/elements/breadcrumbs/Breadcrumbs';
import {numberPrettier, weekDaysHelper} from '@src/helpers';
import {ButtonComponent} from '@src/components/elements/button/Button';
import {NotificationIcon} from '@src/components/elements/icons';
import {months} from '@src/common_data/common';
import {useStyles} from './useStyles';


type PostContentTypes = {
    openSliderModal: boolean,
    openModal: boolean,
    openSnackbar: boolean,
    vertical: 'top',
    horizontal: 'right',
}

export const PostContent: FC<WithT & any> = (props) => {
    const {
        t,
        data,
        slidersRefs,
        parameters,
        descHeight
    } = props


    const [state, setState] = React.useState<PostContentTypes>({
        openSliderModal: false,
        openModal: false,
        openSnackbar: false,
        vertical: 'top',
        horizontal: 'right'
    })
    const {openModal, openSliderModal, openSnackbar, horizontal, vertical} = state
    const date = new Date(data.created_at);
    const formatted_date = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
    const handleShowSliderModal = value => () => setState({...state, openSliderModal: value})
    const handleOpenModal = () => {
        setState({...state, openModal: true})
    }
    const handleCloseModal = () => {
        setState({...state, openModal: false})
    }
    const handleOpenSnackbar = (newState) => () => {
        setState({openSnackbar: true, ...newState})
    }
    const handleCloseSnackbar = () => {
        setState({...state, openSnackbar: false})
    }
    const parameterItems = Object.keys(parameters).reduce((items, key, i) => {
        if (Array.isArray(parameters[key]) && parameters[key].length !== 0) {
            const params = (
                <li>
                    <Typography variant="subtitle1" className="value">
                        {parameters[key]
                            .map((param) => param.name)
                            .join(', ')}
                    </Typography>
                </li>
            )
            items.push(
                <div key={i} className="params-list">
                    <Typography variant="subtitle1" className="key">
                        {key}
                    </Typography>
                    <ul>{params}</ul>
                </div>
            )
        } else if (!Array.isArray(parameters[key])) {
            items.push(
                <li key={key}>
                    <Typography variant="subtitle1" className="key">
                        {t(key)}
                    </Typography>
                    {parameters[key]?.hex_color_code && (
                        <span
                            style={{
                                backgroundColor: `${parameters[key]?.hex_color_code}`,
                                width: 24,
                                height: 24,
                                boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
                                marginRight: 15,
                                borderRadius: '50%'
                            }}
                        />
                    )}
                    <Typography variant="subtitle1" className="value">
                        {typeof parameters[key] === 'string' || typeof parameters[key] === 'number'
                            ? parameters[key]
                            : parameters[key]?.name}
                    </Typography>
                </li>
            )
        }
        return items
    }, [])

    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Hidden mdDown>
                <div className="breadcrumbs">
                    <BreadcrumbsComponent>
                        {data.category
                            ? (<Link href={`/categories/${data.category.mark}`}>
                                <a>
                                    <Typography variant="subtitle1" noWrap>
                                        {data.category.name}
                                    </Typography>
                                </a>
                            </Link>)
                            : null}
                        {data.adsable?.sub_category
                            ? (<Link href={`/categories/${data.category.mark}`}>
                                <a>
                                    <Typography variant="subtitle1" noWrap>
                                        {data.adsable.sub_category.name}
                                    </Typography>
                                </a>
                            </Link>)
                            : null}
                        {data.adsable?.type
                            ? (<Link href="#">
                                <a>
                                    <Typography variant="subtitle1" noWrap>
                                        {data.adsable.type.name}
                                    </Typography>
                                </a>
                            </Link>)
                            : null}
                    </BreadcrumbsComponent>
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
                    <div>
                        <ButtonComponent onClick={handleOpenSnackbar({vertical, horizontal})}>
                            <NotificationIcon/>
                            Следить
                        </ButtonComponent>
                    </div>
                    {!data.condition.name && (
                        <div className="condition">
                            <Typography variant="h6">Б/У</Typography>
                        </div>
                    )}
                </div>
            </Hidden>
            <div className="slider-wrapper">
                <SyncSliders
                    slidersRefs={slidersRefs}
                    imgs={data.images}
                    handleOpenModal={handleShowSliderModal(true)}
                />
            </div>
            <Hidden lgUp>
                <div className="post-header">
                    <div className='post-type'>
                        <Typography
                            variant="h6"
                            className={data.ads_type.mark}
                        >
                            {t(`common:${data.ads_type.mark}`)}
                        </Typography>
                    </div>
                    <div>
                        <Typography variant='h6' className="price">
                            {data.price + ' ' + data.currency.name}
                            {!data.condition.name && (
                                <div className="condition">
                                    <Typography variant="h6">Б/У</Typography>
                                </div>
                            )}
                        </Typography>
                        <Typography variant="h2" className="title" noWrap>
                            {data.title}
                        </Typography>
                    </div>
                    {data.ads_type.mark !== 'post' && (
                        <div>
                            <ButtonComponent onClick={handleOpenSnackbar({vertical, horizontal})}>
                                <NotificationIcon/>
                                Следить
                            </ButtonComponent>
                        </div>
                    )}
                </div>
            </Hidden>
            <Hidden mdDown>
                <div className="post-info">
                    <Typography variant="subtitle1">
                        <span>Объявление №:</span> {data.id}
                    </Typography>
                    <Typography variant="subtitle1">
                        Опубликовано: {formatted_date}
                    </Typography>
                    <Typography variant="subtitle1">
                        Просмотров: {data.number_of_views}
                    </Typography>
                    <Typography variant="subtitle1" onClick={handleOpenModal}>
                        Пожаловаться <WarningIcon/>
                    </Typography>
                </div>
            </Hidden>
                <div className="post-bonus">
                    {!!data.delivery && (
                        <span className="delivery">
                        <DeliveryIcon/>&nbsp;
                            <Typography variant="subtitle1">
                            Есть доставка
                        </Typography>
                    </span>
                    )}
                    {!!data.safe_deal && (
                        <span className="safe_deal">
                        <SafeIcon/>&nbsp;
                            <Typography variant="subtitle1">
                            Безопасная покупка
                        </Typography>
                    </span>
                    )}
                    {!!data.exchange && (
                        <span className="exchange">
                        <SwapIcon/>&nbsp;
                            <Typography variant="subtitle1">
                            Возможен обмен
                        </Typography>
                    </span>
                    )}
                    {!!data.available_start_time && (
                        <span className="available">
                        <PhoneIcon/>
                            {!!data.available_days?.length && (
                                <Typography variant="subtitle1" color="primary">
                                    {weekDaysHelper(data.available_days, t)}
                                </Typography>
                            )}
                            <Typography variant="subtitle1">
                            {`${data.available_start_time} - ${data.available_end_time}`}
                        </Typography>
                    </span>
                    )}
                </div>
            {/*<Hidden lgUp>*/}
            {/*    <div className="post-bonus">*/}
            {/*        {!!data.delivery && (*/}
            {/*            <span className="delivery">*/}
            {/*            <DeliveryIcon/>&nbsp;*/}
            {/*                <Typography variant="subtitle1">*/}
            {/*                Доставка*/}
            {/*            </Typography>*/}
            {/*        </span>*/}
            {/*        )}*/}
            {/*        {!!data.available_start_time && (*/}
            {/*            <span className="available">*/}
            {/*            <PhoneIcon/>*/}
            {/*                {!!data.available_days?.length && (*/}
            {/*                    <Typography variant="subtitle1" color="primary">*/}
            {/*                        {weekDaysHelper(data.available_days, t)}*/}
            {/*                    </Typography>*/}
            {/*                )}*/}
            {/*                &nbsp;&nbsp;<Typography variant="subtitle1">*/}
            {/*                {`${data.available_start_time} - ${data.available_end_time}`}*/}
            {/*            </Typography>*/}
            {/*        </span>*/}
            {/*        )}*/}
            {/*        {!!data.exchange && (*/}
            {/*            <span className="exchange">*/}
            {/*            <SwapIcon/>&nbsp;*/}
            {/*                <Typography variant="subtitle1">*/}
            {/*                Обмен*/}
            {/*            </Typography>*/}
            {/*        </span>*/}
            {/*        )}*/}
            {/*        {!!data.safe_deal && (*/}
            {/*            <span className="safe_deal">*/}
            {/*            <SafeIcon/>&nbsp;*/}
            {/*                <Typography variant="subtitle1">*/}
            {/*                Безопасная покупка*/}
            {/*            </Typography>*/}
            {/*        </span>*/}
            {/*        )}*/}
            {/*    </div>*/}
            {/*</Hidden>*/}
            <div className="post-location">
                <Typography variant="button" noWrap>
                    Местоположение
                </Typography>
                {data.region.name || data.city.name || data.district.name
                    ? <Typography variant="subtitle1" noWrap>
                        <LocationIcon/>
                        {`${data.region.name ?? ''}`}
                        {data.city.name ? `, ${data.city.name}` : ''}
                        {data.district.name ? `, ${data.district.name}` : ''}
                    </Typography>
                    : <Typography variant="subtitle1">Не указано</Typography>}
            </div>
            <Hidden mdDown>
                <div className="post-category">
                    <Typography variant="button" color="initial">
                        Категория
                    </Typography>
                    <div>
                        <Typography variant="subtitle1" color="initial">
                            {data.category.name}
                            {<>&nbsp;- {data.adsable.sub_category.name}</>}
                            {parameters.type && <>&nbsp;- <span>{parameters.type.name}</span></>}
                        </Typography>
                    </div>
                </div>
            </Hidden>
            <div className="post-description">
                <Typography variant="button" color="initial">
                    Описание
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
            {(data.ads_type.mark === 'auc' || data.ads_type.mark === 'exauc') && (
                <div className="started-price">
                    <Typography variant="button">Стартовая цена</Typography>
                    <span>
                        <Typography variant="body2">
                            {numberPrettier(data.price)} {data.currency.name}
                        </Typography>
                    </span>
                </div>
            )}
            {!!parameterItems.length && (
                <div className="post-parameters">
                    <Typography variant="button" color="initial">
                        Параметры
                    </Typography>
                    <ul>{parameterItems}</ul>
                </div>
            )}
            <div className="post-info">
                <Typography variant="subtitle1">
                    <span>Объявление №:</span> {data.id}
                </Typography>
                <Typography variant="subtitle1">
                    Опубликовано: {formatted_date}
                </Typography>
                <Typography variant="subtitle1">
                    Просмотров: {data.number_of_views}
                </Typography>
                <Typography variant="subtitle1" onClick={handleOpenModal}>
                    Пожаловаться <WarningIcon/>
                </Typography>
            </div>
            <ModalSyncSliders
                slidersRefs={slidersRefs}
                open={openSliderModal}
                title={data.title}
                imgs={data.images}
                onClose={handleShowSliderModal(false)}
            />
            <Modal
                className={classes.modal}
                open={openModal}
                onClose={handleCloseModal}
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 200
                }}
            >
                <div className={classes.modalBody}>
                    <Typography variant='h6'>
                        Выберите причину жалобы
                    </Typography>
                    <List component="nav" disablePadding>
                        <ListItem button disableGutters>
                            <ListItemText primary="Столкнулся с мошенничеством и обманом."/>
                        </ListItem>
                        <ListItem button disableGutters>
                            <ListItemText primary="Товар указан, но его нет в наличии."/>
                        </ListItem>
                        <ListItem button disableGutters>
                            <ListItemText primary="Цена неактуальная."/>
                        </ListItem>
                        <ListItem button disableGutters>
                            <ListItemText primary="Содержание нарушает правила сервиса."/>
                        </ListItem>
                        <ListItem button disableGutters>
                            <ListItemText primary="Автор объявления вызывает подозрения."/>
                        </ListItem>
                    </List>
                    <div className='textarea'>
                        <Typography variant='subtitle1'>Другое</Typography>
                        <TextField
                            fullWidth
                            multiline
                            rows={10}
                            placeholder='Опишите причину'
                            helperText='0/500'
                            variant="outlined"
                        />
                    </div>
                    <ButtonComponent>
                        <Typography variant='subtitle1'>
                            Отправить
                        </Typography>
                    </ButtonComponent>
                </div>
            </Modal>
            <Snackbar
                anchorOrigin={{vertical, horizontal}}
                open={openSnackbar}
                onClose={handleCloseSnackbar}
                key={vertical + horizontal}
            >
                <div className={classes.snackbar}>
                    <span>
                        <NotificationIcon/>
                    </span>
                    <Typography variant='h6'>
                        Ставка повышена!
                    </Typography>
                </div>
            </Snackbar>
        </div>
    )
}
