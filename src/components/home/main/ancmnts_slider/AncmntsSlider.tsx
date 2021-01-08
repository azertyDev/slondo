import React, {FC} from 'react';
import {Typography} from "@material-ui/core";
import {WithT} from "i18next";
import {CustomSlider} from '@src/components/elements/custom_slider/CustomSlider';
import {CardItem} from '@src/components/elements/card/Card';
import {useStyles} from './useStyles';
import {InnerCardData} from "@root/interfaces/CardData";


export const AncmntsSlider: FC<WithT & { title: string, list: InnerCardData[] }> = (props) => {
    const {t, list, title} = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography className='title' variant='h2'>{title}</Typography>
            <div className='slider'>
                <CustomSlider
                    slidesToShow={4}
                    slidesToScroll={4}
                    infinite={false}
                >
                    {list.map(card => <CardItem
                        isFetch={false}
                        key={card.id}
                        {...card} t={t}
                    />)}
                </CustomSlider>
            </div>
        </div>
    )
};
