import {FC, useContext, useEffect, useState} from 'react';
import {userAPI} from '@src/api/api';
import {useTranslation} from 'next-i18next';
import {Typography} from '@material-ui/core';
import {GridCard} from '@src/components/elements/card/grid_card/GridCard';
import {unstable_batchedUpdates} from 'react-dom';
import {HomePageCtx, AuthCtx} from '@src/context';
import {Slider} from '@root/src/components/elements/slider/Slider';
import {useStyles} from './useStyles';

const config = {
    itemClass: 'slide-item',
    responsive: {
        desktop: {
            breakpoint: {max: 1920, min: 992},
            items: 4
        }
    }
};

export const PostsSlider: FC = () => {
    const {t} = useTranslation('main');
    const {
        auth: {isAuth}
    } = useContext(AuthCtx);

    const {postsSliderData} = useContext(HomePageCtx);

    const [isFetch, setIsFetch] = useState(false);
    const [errMsg, setErrorMsg] = useState(null);
    const [popularPosts, setPopularPosts] = useState(postsSliderData);

    const {data} = popularPosts;

    const setFetchedCardData = async () => {
        try {
            setIsFetch(true);
            const {data, total} = await userAPI.getPopular(1);

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
        setFetchedCardData();
    }, [isAuth]);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            {data.length !== 0 && (
                <>
                    <Typography className="title" variant="h2">
                        {t('popularPosts')}
                    </Typography>
                    {!!errMsg ? (
                        <div className="error-wrapper">
                            <Typography className="error-text">
                                {errMsg}
                            </Typography>
                        </div>
                    ) : (
                        <Slider config={config}>
                            {data.map(card => (
                                <GridCard
                                    {...card}
                                    key={card.id}
                                    isFetch={isFetch}
                                />
                            ))}
                        </Slider>
                    )}
                </>
            )}
        </div>
    );
};
