import React, {FC, useState} from 'react';
import {Grid, Hidden, TextField, Typography} from '@material-ui/core';
import {LockIcon, RefreshIcon} from '@src/components/elements/icons';
import {AuctionTimer} from './AuctionTimer';
import {numberPrettier} from '@root/src/helpers';
import AuctionForm from './AuctionForm/AuctionForm';
import {ButtonComponent} from '@src/components/elements/button/Button';
import {CustomModal} from '@src/components/elements/custom_modal/CustomModal';
import Link from 'next/link';
import {WithT} from 'i18next';
import {useStyles} from './useStyles';


export const AuctionInfo: FC<any & WithT> = (props) => {
    const {
        t,
        data,
        auctionsBetsList,
        openModal,
        handleOpenModal,
        handleCloseModal,
        handleBuyNow,
        handleSubmit,
        handleScroll,
        handleRefresh,
        handleSuggestPrice,
        handleTextField
    } = props;

    const [showAll, setShowAll] = useState(false);
    const date = new Date(data.expiration_at).getTime();
    const isExAuc = data.ads_type.mark === 'exauc';

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className="lot-info">
                {data.auction && data.auction.reserve_price > auctionsBetsList?.[0]?.bet &&
                <div className="reserve-price">
                    <LockIcon/>
                    <div>
                        <Typography variant="subtitle2" color="initial">
                            Резервная цена:
                        </Typography>
                        <Typography variant="h6" color="initial">
                            {numberPrettier(data.auction.reserve_price)}{' '}
                            {data.currency.name}
                        </Typography>
                    </div>
                </div>}
                {data.ads_type.mark !== 'post' && (
                    <div className="lot-timer">
                        {date !== 0 && <AuctionTimer date={date}/>}
                    </div>
                )}
                <div className="lot-participants-block">
                    <Typography
                        variant="subtitle1" color="initial"
                        style={{display: 'flex', justifyContent: 'space-between'}}
                    >
                        <div>
                            Текущие ставки
                        </div>
                        <div onClick={handleRefresh} style={{cursor: 'pointer'}}>
                            <RefreshIcon/>
                        </div>
                    </Typography>
                    <div
                        className="participants"
                        style={{height: showAll ? 400 : 200, overflow: showAll ? 'auto' : 'hidden'}}
                        onScroll={handleScroll}
                    >
                        <ul>
                            {auctionsBetsList.map((item) => (
                                <li key={item?.id}>
                                    <div>
                                        <div className="participant-name">
                                            <Typography variant="subtitle1" noWrap>
                                                {item?.user?.phone} {item?.number_of_bets &&
                                            <span>({item?.number_of_bets})</span>}
                                            </Typography>
                                        </div>
                                        <div className="dateAndTime">
                                            <Typography
                                                variant="subtitle1"
                                                noWrap
                                                className="bet-time"
                                            >
                                                {item?.created_at?.slice(11, 16)}
                                            </Typography>
                                            <Typography
                                                variant="subtitle1"
                                                noWrap
                                                className="bet-date"
                                            >
                                                {item?.created_at?.slice(0, 10)}
                                            </Typography>
                                        </div>
                                    </div>
                                    <div className="bet">
                                        <Typography
                                            variant="subtitle1"
                                            noWrap
                                            className="final-bet"
                                        >
                                            {numberPrettier(item?.bet)}
                                        </Typography>
                                        <Typography
                                            variant="subtitle1"
                                            noWrap
                                            className="per-bet"
                                        >
                                            {item?.outbid === 0
                                                ? <span className='started-price'>Стартовая цена</span>
                                                : `+ ${numberPrettier(item?.outbid)}`
                                            }
                                        </Typography>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Typography
                        variant="subtitle1"
                        color="initial"
                        className="all-bets"
                        onClick={() => setShowAll(!showAll)}
                        style={{cursor: 'pointer'}}
                    >
                        Все ставки
                    </Typography>
                </div>
                {!data.creator && (
                    <>
                        <div className="bet-info">
                            <AuctionForm
                                t={t}
                                data={data}
                                isAuction
                                handleFormSubmit={handleSubmit}
                                auctionsBetsList={auctionsBetsList}
                                safe_deal
                            />
                        </div>
                        {!!data.auction.price_buy_now && (
                            <div>
                                <Hidden mdDown>
                                    <div className="buy-now">
                                        <Typography variant="subtitle1" color="initial">
                                            {data.auction.price_buy_now} сум
                                        </Typography>
                                        <ButtonComponent onClick={handleOpenModal()}>
                                            <Typography variant="subtitle1" color="initial">
                                                Купить сейчас
                                            </Typography>
                                        </ButtonComponent>
                                    </div>
                                </Hidden>
                                <CustomModal handleModalClose={handleCloseModal()} openModal={openModal}>
                                    <>
                                        <Typography className="title" variant="h6">
                                            Купить сейчас
                                        </Typography>
                                        <Typography
                                            variant='subtitle1'
                                            className='subtitle'
                                        >
                                            Нажимая кнопку “Купить сейчас” вы выкупаете лот на сумму&nbsp;
                                            <span className='buy-now-price'>{data.auction.price_buy_now}</span> сум и
                                            соглашаетесь с&nbsp;
                                            <span className='condition'>
                                        <Link href="#">
                                            <a>условиями</a>
                                        </Link>
                                        </span> сайта
                                        </Typography>
                                        <div className='confirm'>
                                            <ButtonComponent
                                                className='submit'
                                                onClick={handleBuyNow()}
                                            >
                                                <Typography variant='subtitle1'>
                                                    Купить сейчас
                                                </Typography>
                                            </ButtonComponent>
                                        </div>
                                    </>
                                </CustomModal>
                            </div>

                        )}
                        {!!data.auction.offer_the_price && (
                            <div>
                                <Hidden lgUp>
                                    <Grid container>
                                        <Grid item xs={isExAuc ? 6 : 12}
                                              className='suggest_price'
                                        >
                                            <ButtonComponent onClick={handleOpenModal()}>
                                                <Typography variant="subtitle1" color="initial">
                                                    Предложить цену
                                                </Typography>
                                            </ButtonComponent>
                                        </Grid>
                                        {isExAuc && (
                                            <Grid item xs={6} className="btn-buy-now">
                                                <ButtonComponent>
                                                    <Typography variant='subtitle2'>Купить сейчас</Typography>
                                                </ButtonComponent>
                                            </Grid>
                                        )}
                                    </Grid>
                                </Hidden>
                                <CustomModal handleModalClose={handleCloseModal()} openModal={openModal}>
                                    Предложить цену
                                    <Typography variant='subtitle1'>
                                        Предложенная стоимость не может быть <br/>
                                        меньше стартовой цены или сделанной ставки
                                    </Typography>
                                    <div style={{display: 'flex', flexDirection: 'column'}}>
                                        <TextField
                                            id="outlined-basic"
                                            label="Outlined"
                                            variant="outlined"
                                            placeholder='Впишите сумму'
                                            onChange={handleTextField}
                                        />
                                        <ButtonComponent onClick={handleSuggestPrice}>
                                            Предложить
                                        </ButtonComponent>
                                    </div>
                                </CustomModal>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};
