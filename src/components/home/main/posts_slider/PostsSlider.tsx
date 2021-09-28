import {FC, useContext, useEffect, useState} from 'react';
import {HOME_ITEMS_PER_PAGE} from '@src/constants';
import {userAPI} from '@src/api/api';
import {CardData} from '@root/interfaces/CardData';
import {initCardData} from '@src/common_data/common';
import {useTranslation} from 'next-i18next';
import {AuthCtx} from "@src/context/AuthCtx";
import {Typography} from "@material-ui/core";
import {CustomSlider} from "@src/components/elements/custom_slider/CustomSlider";
import {settings} from "@src/components/home/main/posts_slider/sliderSettings";
import {GridCard} from "@src/components/elements/card/grid_card/GridCard";
import {unstable_batchedUpdates} from "react-dom";
import {useStyles} from "./useStyles";

export const initCards = Array.from({length: HOME_ITEMS_PER_PAGE}).map(() => initCardData);

const initData: CardData = {
    cards: initCards,
    total: null
};

export const PostsSlider: FC = () => {
    const {t} = useTranslation('main');
    const {auth: {isAuth}} = useContext(AuthCtx);

    const [isFetch, setIsFetch] = useState(false);
    const [errMsg, setErrorMsg] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [popularPosts, setPopularPosts] = useState(initData);

    const {cards} = popularPosts;

    const setFetchedCardData = async () => {
        try {
            const params = {
                itemsPerPage: HOME_ITEMS_PER_PAGE,
                page: currentPage
            };

            setIsFetch(true);
            const {data, total} = await userAPI.getPopular(params);

            unstable_batchedUpdates(() => {
                setIsFetch(false);
                setPopularPosts({
                    cards: data,
                    total: total
                });
            });
        } catch (e) {
            unstable_batchedUpdates(() => {
                setIsFetch(false);
                setErrorMsg(e.message);
            });
        }
    };

    useEffect(() => {
        setFetchedCardData();
    }, [currentPage, isAuth]);

    const classes = useStyles();
    return (
        !!cards.length && (
            <div className={classes.root}>
                <Typography className="title" variant="h2">
                    {t('popularPosts')}
                </Typography>
                <div className="slider">
                    {!!errMsg
                        ? <div className="error-wrapper">
                            <Typography className="error-text">{errMsg}</Typography>
                        </div>
                        : <CustomSlider {...settings}>
                            {cards.map(card =>
                                <GridCard
                                    isFetch={isFetch}
                                    key={card.id}
                                    {...card}
                                />
                            )}
                        </CustomSlider>}
                </div>
            </div>
        )
    );
};
