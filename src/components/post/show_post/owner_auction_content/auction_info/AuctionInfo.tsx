import React, {FC, useEffect, useState} from 'react';
import {Typography} from '@material-ui/core';
import {ButtonComponent} from '@src/components/elements/button/Button';
import {LockIcon, RefreshIcon} from '@src/components/elements/icons';
import {AuctionTimer} from './AuctionTimer';
import {numberPrettier} from '@root/src/helpers';
import {useStyles} from './useStyles';
import {userAPI} from "@src/api/api";
import AuctionForm from './AuctionForm'
import {useSelector} from "react-redux";


export const AuctionInfo: FC<any> = (props) => {
    const isAuth = useSelector<any>(state => state.auth.isAuth)
    const classes = useStyles();
    const {data} = props;
    const [showAll, setShowAll] = useState(false)
    const [page, setPage] = useState(1)
    const date = new Date(data.expiration_at).getTime();
    const [list, setList] = useState([])
    const [lastPage, setLastPage] = useState(null)
    console.warn("isAuth", isAuth)


    useEffect(() => {
        userAPI.getAuctionBets(data.auction.id, page).then(result => {
            setLastPage(result.last_page);
            setList(prev => [...prev, ...result.data])
        })
    }, [page])

    const handleSubmit = (value) => {
        userAPI.betAuction(value)
            .then(result => result && userAPI.getAuctionBets(data.auction.id, 1)
                .then(result => {
                    setLastPage(result.last_page);
                    setList(result.data)
                }))
    }


    const handleScroll = (e) => {
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        if (page !== lastPage && bottom) {
            setPage(prev => prev + 1)
        }
    }

    const handleRefresh = () => {
        userAPI.getAuctionBets(data.auction.id, 1)
            .then(result => setList(result.data))
    }

    return (
        <div className={classes.root}>
            <div className="lot-info">
                {data.auction
                && <div className="reserve-price">
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
                {data.ads_type.mark !== 'post'
                && <div className="lot-timer">
                    {date !== 0 && <AuctionTimer date={date}/>}
                </div>}
                <div className="lot-participants-block">
                    <Typography
                        variant="subtitle1" color="initial"
                        style={{display: 'flex', justifyContent: 'space-between'}}
                    >
                        <div>
                            Текущие ставки
                        </div>
                        <div onClick={handleRefresh} style={{cursor: "pointer"}}>
                            <RefreshIcon/>
                        </div>
                    </Typography>
                    <div
                        className="participants"
                        style={{height: showAll ? 400 : 200, overflow: showAll ? "auto" : "hidden"}}
                        onScroll={handleScroll}
                    >
                        <ul>
                            {list && list?.map((item) => (
                                <li key={item?.id}>
                                    <div>
                                        <div className="participant-name">
                                            <Typography variant="subtitle1" noWrap>
                                                {item?.user?.phone} (<span>{item?.number_of_bets}</span>)
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
                                            {item?.bet}
                                        </Typography>
                                        <Typography
                                            variant="subtitle1"
                                            noWrap
                                            className="per-bet"
                                        >
                                            + {item?.outbid}
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
                        style={{cursor: "pointer"}}
                    >
                        Все ставки
                    </Typography>
                </div>
                <div className="bet-info">
                    {isAuth && <AuctionForm data={data} handleFormSubmit={handleSubmit}/>}
                    {isAuth && <div>
                        <Typography variant="subtitle2" color="initial">
                            Максимально возможная ставка
                        </Typography>
                        <Typography variant="subtitle2" color="initial">
                            {list?.[0]?.max_bet}
                        </Typography>
                    </div>}
                </div>
                {data.ads_type.id === 3 && (
                    <div className="buy-now">
                        <Typography variant="subtitle1" color="initial">
                            1 420 000 000 сум
                        </Typography>
                        <ButtonComponent>
                            <Typography variant="subtitle1" color="initial">
                                Купить сейчас
                            </Typography>
                        </ButtonComponent>
                    </div>
                )}
                <div className='suggest_price'>
                    <ButtonComponent>
                        <Typography variant="subtitle1" color="initial">
                            Предложить цену
                        </Typography>
                    </ButtonComponent>
                </div>
            </div>
        </div>
    );
};
