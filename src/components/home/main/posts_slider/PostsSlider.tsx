import React, {FC} from 'react';
import {Typography} from '@material-ui/core';
import {CustomSlider} from '@src/components/elements/custom_slider/CustomSlider';
import {CardItem} from '@src/components/elements/card/card_item/CardItem';
import {CardData} from '@root/interfaces/CardData';
import {settings} from './sliderSettings';
import {useStyles} from './useStyles';


export const PostsSlider: FC<{ title: string; cardData: CardData }> = ({cardData, title}) => {
    const {isFetch, error, data: {cards}} = cardData;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography className="title" variant="h2">
                {title}
            </Typography>
            <div className="slider">
                {!!error ? (
                    <div className="error-wrapper">
                        <Typography className="error-text">{error}</Typography>
                    </div>
                ) : (
                    <CustomSlider {...settings}>
                        {cards.map((card) => (
                            <CardItem
                                isFetch={isFetch}
                                key={card.id}
                                {...card}
                            />
                        ))}
                    </CustomSlider>
                )}
            </div>
        </div>
    );
};
