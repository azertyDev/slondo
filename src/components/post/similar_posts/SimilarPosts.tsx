import React from 'react';
import {GridMode} from '@src/components/elements/card/card_view/grid_mode/GridMode';
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
            <GridMode isFetch={isFetch} list={list}/>
        </div>
    );
};
