import {FC} from 'react';
import {WithT} from 'i18next';
import {AuctionTimer} from './AuctionTimer';
import {useStyles} from './useStyles';
import {BetsList} from '@src/components/elements/bets_list/BetsList';


type AuctionInfoPropsType = {
    postData,
} & WithT;

export const AuctionContent: FC<AuctionInfoPropsType> = (props) => {
    const {
        t,
        postData
    } = props;

    const date = new Date(postData.expiration_at).getTime();
    // const dispatch = useDispatch();
    // const isExAuc = postData.ads_type.mark === 'exauc';
    // const hasOfferPrice = !!postData.auction.offer_the_price;
    //
    // const [isFetch, setIsFetch] = useState(false);
    // const [openBuyNow, setOpenBuyNow] = useState(false);
    // const [openOfferPrice, setOpenOfferPrice] = useState(false);
    // const [offerPrice, setOfferPrice] = useState('');

    // const hasReservePrice = postData.auction?.reserve_price > lastBet?.bet;
    // const hasBuyNow = !!postData.auction?.price_buy_now && postData.auction.price_buy_now > lastBet?.bet;
    //
    // const handleModalBuyNow = value => () => {
    //     setOpenBuyNow(value);
    // };
    // const handleModalOfferPrice = value => () => {
    //     setOpenOfferPrice(value);
    // };
    // const handleOfferPrice = async () => {
    //     try {
    //         setIsFetch(true);
    //         await userAPI.offerThePrice(postData.auction.id, offerPrice);
    //         setOfferPrice('');
    //         setIsFetch(false);
    //         setOpenOfferPrice(false);
    //     } catch (e) {
    //         setIsFetch(false);
    //         dispatch(setErrorMsgAction(e.message));
    //     }
    // };
    // const handleBuyNow = async () => {
    //     try {
    //         setIsFetch(true);
    //         await userAPI.buyNow(postData.auction.id, postData.id);
    //         setIsFetch(false);
    //     } catch ({response}) {
    //         setIsFetch(false);
    //         dispatch(
    //             setErrorMsgAction(t(`errors:${response.data.message}`))
    //         );
    //     }
    // };
    //
    // const handleOfferPriceInput = ({target}) => {
    //     setOfferPrice(target.value);
    // };


    // useEffect(() => {
    //     socketIO.on('bet-channel', async (lastBet) => {
    //         setBets([lastBet, ...betsRef.current]);
    //     });
    //     () => socketIO.off('bet-channel');
    // }, []);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className="lot-info">
                {/*{hasReservePrice && (*/}
                {/*    <div className="reserve-price">*/}
                {/*        <LockIcon/>*/}
                {/*        <div>*/}
                {/*            <Typography variant="subtitle2" color="initial">*/}
                {/*                Резервная цена:*/}
                {/*            </Typography>*/}
                {/*            <Typography variant="h6" color="initial">*/}
                {/*                {numberPrettier(postData.auction.reserve_price)}{' '}*/}
                {/*                {postData.currency.name}*/}
                {/*            </Typography>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*)}*/}
                <div className="lot-timer">
                    {!!date && <AuctionTimer date={date} />}
                </div>
                <BetsList
                    title={t('auction:currentRates')}
                    auctionId={postData.auction.id}
                    showBetsCount={5}
                />
                {/*{!postData.creator && (*/}
                {/*    <>*/}
                {/*        <AuctionForm*/}
                {/*            t={t}*/}
                {/*            auctionId={postData.auction.id}*/}
                {/*        />*/}
                {/*        {hasBuyNow && (*/}
                {/*            <div>*/}
                {/*                <Hidden mdDown>*/}
                {/*                    <div className="buy-now">*/}
                {/*                        <Typography variant="subtitle1" color="initial">*/}
                {/*                            {numberPrettier(postData.auction.price_buy_now)} сум*/}
                {/*                        </Typography>*/}
                {/*                        <CustomButton onClick={handleModalBuyNow(true)}>*/}
                {/*                            <Typography variant="subtitle1" color="initial">*/}
                {/*                                Купить сейчас*/}
                {/*                            </Typography>*/}
                {/*                        </CustomButton>*/}
                {/*                    </div>*/}
                {/*                </Hidden>*/}
                {/*                <CustomModal handleModalClose={handleModalBuyNow(false)} openModal={openBuyNow}>*/}
                {/*                    <>*/}
                {/*                        <Typography className="title" variant="h6">*/}
                {/*                            Купить сейчас*/}
                {/*                        </Typography>*/}
                {/*                        <Typography*/}
                {/*                            variant='subtitle1'*/}
                {/*                            className='subtitle'*/}
                {/*                        >*/}
                {/*                            Нажимая кнопку “Купить сейчас” вы выкупаете лот на сумму&nbsp;*/}
                {/*                            <span className='buy-now-price'>*/}
                {/*                                {numberPrettier(postData.auction.price_buy_now)}*/}
                {/*                            </span>*/}
                {/*                            сум и соглашаетесь с &nbsp;*/}
                {/*                            <span className='condition'>*/}
                {/*                                <Link href="#">*/}
                {/*                                    <a>условиями&nbsp;</a>*/}
                {/*                                </Link>*/}
                {/*                            </span>*/}
                {/*                            сайта*/}
                {/*                        </Typography>*/}
                {/*                        <div className='confirm'>*/}
                {/*                            <CustomButton*/}
                {/*                                className='submit'*/}
                {/*                                onClick={handleBuyNow}*/}
                {/*                            >*/}
                {/*                                <Typography variant='subtitle1'>*/}
                {/*                                    Купить сейчас*/}
                {/*                                </Typography>*/}
                {/*                            </CustomButton>*/}
                {/*                        </div>*/}
                {/*                    </>*/}
                {/*                </CustomModal>*/}
                {/*            </div>*/}
                {/*        )}*/}
                {/*        <div>*/}
                {/*            <Hidden lgUp>*/}
                {/*                <Grid container spacing={1}>*/}
                {/*                    {hasOfferPrice && (*/}
                {/*                        <Grid*/}
                {/*                            item xs={isExAuc && hasBuyNow ? 6 : 12}*/}
                {/*                            className='suggest_price'*/}
                {/*                        >*/}
                {/*                            <CustomButton onClick={handleModalOfferPrice(true)}>*/}
                {/*                                <Typography variant="subtitle1" color="initial">*/}
                {/*                                    Предложить цену*/}
                {/*                                </Typography>*/}
                {/*                            </CustomButton>*/}
                {/*                        </Grid>*/}
                {/*                    )}*/}
                {/*                    {isExAuc && hasBuyNow && (*/}
                {/*                        <Grid item xs={6} className="btn-buy-now">*/}
                {/*                            <CustomButton>*/}
                {/*                                <Typography variant='subtitle2'>Купить сейчас</Typography>*/}
                {/*                            </CustomButton>*/}
                {/*                        </Grid>*/}
                {/*                    )}*/}
                {/*                </Grid>*/}
                {/*            </Hidden>*/}
                {/*            {hasOfferPrice && (*/}
                {/*                <Hidden mdDown>*/}
                {/*                    <div className='suggest_price'>*/}
                {/*                        <CustomButton onClick={handleModalOfferPrice(true)}>*/}
                {/*                            <Typography variant="subtitle1" color="initial">*/}
                {/*                                Предложить цену*/}
                {/*                            </Typography>*/}
                {/*                        </CustomButton>*/}
                {/*                    </div>*/}
                {/*                </Hidden>*/}
                {/*            )}*/}
                {/*            <CustomModal handleModalClose={handleModalOfferPrice(false)} openModal={openOfferPrice}>*/}
                {/*                Предложить цену*/}
                {/*                <Typography variant='subtitle1'>*/}
                {/*                    Предложенная стоимость не может быть <br/>*/}
                {/*                    меньше стартовой цены или сделанной ставки*/}
                {/*                </Typography>*/}
                {/*                <div style={{display: 'flex', flexDirection: 'column'}}>*/}
                {/*                    <TextField*/}
                {/*                        id="outlined-basic"*/}
                {/*                        label="Outlined"*/}
                {/*                        variant="outlined"*/}
                {/*                        placeholder='Впишите сумму'*/}
                {/*                        onChange={handleOfferPriceInput}*/}
                {/*                    />*/}
                {/*                    <CustomButton onClick={handleOfferPrice}>*/}
                {/*                        Предложить*/}
                {/*                    </CustomButton>*/}
                {/*                </div>*/}
                {/*            </CustomModal>*/}
                {/*        </div>*/}
                {/*    </>*/}
                {/*)}*/}
            </div>
        </div>
    );
};
