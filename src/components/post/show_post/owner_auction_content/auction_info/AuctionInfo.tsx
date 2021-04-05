import React, {FC, useState} from 'react';
import {Typography} from '@material-ui/core';
import {LockIcon, RefreshIcon} from '@src/components/elements/icons';
import {AuctionTimer} from './AuctionTimer';
import {numberPrettier} from '@root/src/helpers';
import BuyAuctionComponent from './BuyAuction';
import AuctionForm from './AuctionForm/AuctionFrom';
import {useSelector} from 'react-redux';
import {RootState} from '@src/redux/rootReducer';
import {useStyles} from './useStyles';
import {SuggestPriceComponent} from '@src/components/post/show_post/owner_auction_content/auction_info/SuggestPrice';


export const AuctionInfo: FC<any> = (props) => {
    const isAuth = useSelector<any>((state: RootState) => state.user.isAuth);
    const {
        data,
        list,
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

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className="lot-info">
                {data.auction && data.auction.reserve_price > list?.[0]?.bet && <div className="reserve-price">
                    <LockIcon />
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
                            {list.map((item) => (
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
                        style={{cursor: "pointer"}}
                    >
                        Все ставки
                    </Typography>
                </div>
                {isAuth && <>
                    <div className="bet-info">
                        <AuctionForm data={data} handleFormSubmit={handleSubmit} list={list} />
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
                        <BuyAuctionComponent
                            handleBuyNow={handleBuyNow}
                            handleOpenModal={handleOpenModal}
                            openModal={openModal}
                            handleCloseModal={handleCloseModal}
                            data={data}
                        />
                    )}
                    <SuggestPriceComponent
                        handleOpenModal={handleOpenModal}
                        handleCloseModal={handleCloseModal}
                        openModal={openModal}
                        handleSuggestPrice={handleSuggestPrice}
                        handleTextField={handleTextField}
                    />
                </>
                }
            </div>
        </div>
    );
};
