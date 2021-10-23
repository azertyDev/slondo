import {FC, useContext, useEffect, useState} from 'react';
import {userAPI} from '@src/api/api';
import {useTranslation} from 'next-i18next';
import {Typography} from "@material-ui/core";
import {CustomSlider} from "@src/components/elements/custom_slider/CustomSlider";
import {settings} from "@src/components/home/main/posts_slider/sliderSettings";
import {GridCard} from "@src/components/elements/card/grid_card/GridCard";
import {unstable_batchedUpdates} from "react-dom";
import {HomePageCtx, AuthCtx} from "@src/context";
import {useStyles} from "./useStyles";

export const PostsSlider: FC = () => {
    const {t} = useTranslation('main');
    const {auth: {isAuth}} = useContext(AuthCtx);
    const {postsSliderData} = useContext(HomePageCtx);

    const [isFetch, setIsFetch] = useState(false);
    const [errMsg, setErrorMsg] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [popularPosts, setPopularPosts] = useState(postsSliderData);

    const {data} = popularPosts;

    const setFetchedCardData = async () => {
        try {
            setIsFetch(true);
            const {data, total} = await userAPI.getPopular(currentPage);

            unstable_batchedUpdates(() => {
                setIsFetch(false);
                setPopularPosts({
                    data,
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
        (currentPage !== 1 || isAuth) && setFetchedCardData();
    }, [currentPage, isAuth]);

    const classes = useStyles();
    return (
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
                        {data.map(card =>
                            <GridCard
                                isFetch={isFetch}
                                key={card.id}
                                {...card}
                            />
                        )}
                    </CustomSlider>}
            </div>
        </div>
    );
};
