import React, {FC, useEffect, useState} from 'react'
import {Typography} from '@material-ui/core'
import {ButtonComponent} from '@src/components/elements/button/Button'
import {LockIcon, RefreshIcon} from '@src/components/elements/icons'
import {AuctionTimer} from './AuctionTimer'
import {numberPrettier} from '@root/src/helpers'
import {useStyles} from './useStyles'
import BuyAuctionComponent from './BuyAuction';
import {userAPI} from '@src/api/api'
import AuctionForm from './AuctionForm'
import {useDispatch, useSelector} from "react-redux";
import {setErrorMsgAction} from '@src/redux/slices/errorSlice'
import {toCamelCase} from "@root/src/helpers";
import {useTranslation} from "@root/i18n";

export const AuctionInfo: FC<any> = (props) => {
    console.log(props);
    const {t} = useTranslation()
    const dispatch = useDispatch()
    const isAuth = useSelector<any>(state => state.auth.isAuth)
    const classes = useStyles()
    const {data} = props
    const [showAll, setShowAll] = useState(false)
    const [page, setPage] = useState(1)
    const date = new Date(data.expiration_at).getTime()
    const [list, setList] = useState([])
    const [lastPage, setLastPage] = useState(null)
    const auction_id = data?.auction?.id
    const ads_id = data?.id

    useEffect(() => {
        userAPI.getAuctionBets(data.auction.id, page).then(result => {
            setLastPage(result.last_page)
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
            .catch(error => dispatch(setErrorMsgAction(t(`auction:${toCamelCase(error.response.data.message)}`))))
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
            .catch(err => dispatch(setErrorMsgAction(err.message)))
    }

    return (
        <div className={classes.root}>
            <div className="lot-info">
                {data.auction && data.auction.reserve_price > list?.[0]?.bet && <div className="reserve-price">
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
                                            {item?.outbid === 0 ?
                                                <span className='started-price'>Стартовая цена</span>
                                                :
                                                `+ ${numberPrettier(item?.outbid)}`
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
                        style={{cursor: "pointer"}}
                    >
                        Все ставки
                    </Typography>
                </div>
                {isAuth &&
                <>
                    <div className="bet-info">
                        <AuctionForm data={data} handleFormSubmit={handleSubmit} list={list}/>
                        <div>
                            <Typography variant="subtitle2" color="initial">
                                Максимально возможная ставка:
                            </Typography>
                            <Typography variant="subtitle2" color="initial">
                                {numberPrettier(list?.[0]?.max_bet)} сум
                            </Typography>
                        </div>
                    </div>
                    {data.ads_type.id === 3 && (
                        <BuyAuctionComponent auction_id={auction_id} ads_id={ads_id}/>
                    )}
                    <div className='suggest_price'>
                        <ButtonComponent>
                            <Typography variant="subtitle1" color="initial">
                                Предложить цену
                            </Typography>
                        </ButtonComponent>
                    </div>
                </>
                }
            </div>
        </div>
    );
};
