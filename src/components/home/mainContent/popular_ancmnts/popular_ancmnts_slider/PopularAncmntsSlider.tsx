import React from 'react';
import { CustomSlider } from '@src/components/elements/custom_slider/CustomSlider';
import { CardItem } from '@root/src/components/elements/card/Card';
import { useStyles } from './useStyles';
import { Grid } from '@material-ui/core';

export const PopularAncmntsSlider = (props) => {
    const { t, list } = props;
    console.log(list);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CustomSlider slidesToShow={4}>
                {list.map((card, index) => (
                    <Grid item>
                        <CardItem {...card} key={index} />
                    </Grid>
                ))}
            </CustomSlider>
        </div>
    );
};
