import React from 'react';
import { CustomGridView } from '@src/components/elements/custom_card_view/custom_grid_view/CustomGridView';
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
            <CustomGridView t={t} list={list} handleShowMore={handleShowMore} />
        </div>
    );
};
