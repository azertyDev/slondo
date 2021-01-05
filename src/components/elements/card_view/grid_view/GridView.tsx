import React, {FC} from 'react';
import {Grid} from '@material-ui/core';
import {CardItem} from '@src/components/elements/card/Card';
import {ViewPropsTypes} from "@src/components/elements/card_view/CardView";


export const GridView: FC<ViewPropsTypes> = (props) => {
    const {isFetch, list, t} = props;
    return (
        <Grid container spacing={2}>
            {list.map((item, index) => (
                <Grid key={index} xs={6} sm={4} lg={3} item>
                    <CardItem
                        t={t}
                        {...item}
                        isFetch={isFetch}
                    />
                </Grid>
            ))}
        </Grid>
    )
};
