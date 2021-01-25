import React from 'react';
import {GridView} from '@src/components/elements/card_view/grid_view/GridView';
import Typography from '@material-ui/core/Typography';
import {useStyles} from './useStyles';

export const SimilarPosts = (props) => {
    const {isFetch, list} = props;

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="subtitle1" color="initial">
                Похожие объявления
            </Typography>
            <GridView isFetch={isFetch} list={list}/>
        </div>
    );
};
