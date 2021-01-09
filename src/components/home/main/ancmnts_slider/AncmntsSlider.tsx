import React, {FC} from 'react';
import {Typography} from '@material-ui/core';
import {CustomSlider} from '@src/components/elements/custom_slider/CustomSlider';
import {CardItem} from '@src/components/elements/card/Card';
import {InnerCardData} from '@root/interfaces/CardData';
import {settings} from "./sliderSettings";
import {useStyles} from './useStyles';


export const AncmntsSlider: FC<{ title: string; list: InnerCardData[] }> = (props) => {
    const {list, title} = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography className="title" variant="h2">
                {title}
            </Typography>
            <div className="slider">
                <CustomSlider
                    {...settings}
                >
                    {list.map((card) => (
                        <CardItem
                            isFetch={false}
                            key={card.id}
                            {...card}
                        />
                    ))}
                </CustomSlider>
            </div>
        </div>
    )
};
