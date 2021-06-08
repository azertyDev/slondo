import React, {FC} from 'react';
import {Grid} from '@material-ui/core';
import {CardItem} from '@src/components/elements/card/card_item/CardItem';
import {ViewPropsType} from '@src/components/elements/card/card_view/CardView';


const GridModeView: FC<ViewPropsType> = (props) => {
    const {isFetch, data} = props;

    return (
        <Grid container spacing={2}>
            {data.map((item, index) => (
                <Grid key={index} xs={6} sm={6} md={4} lg={3} item>
                    <CardItem
                        {...item}
                        isFetch={isFetch}
                    />
                </Grid>
            ))}
        </Grid>
    )
};

export const GridMode = React.memo(GridModeView)
