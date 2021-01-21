import React, {FC} from 'react';
import {Grid} from '@material-ui/core';
import {CardItem} from '@src/components/elements/card/Card';
import {ViewPropsTypes} from "@src/components/elements/card_view/CardView";
import { WithT } from 'i18next';


export const GridView: FC<ViewPropsTypes> = (props) => {
    const {isFetch, list,} = props;
    return (
        <Grid container spacing={2}>
            {list.map((item, index) => (
                <Grid key={index} xs={12} sm={6} md={4} lg={3} item>
                    <CardItem
                        {...item}
                        isFetch={isFetch}
                    />
                </Grid>
            ))}
        </Grid>
    )
};
