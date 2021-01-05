import React from 'react';
import { GridView } from '@src/components/elements/card_view/grid_view/GridView';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './useStyles';

export const SimilarAncmnts = (props) => {
    const { t, list, handleShowMore } = props;

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="subtitle1" color="initial">
                Похожие объявления
            </Typography>
            <GridView t={t} list={list} handleShowMore={handleShowMore} />
        </div>
    );
};
