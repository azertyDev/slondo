import React, { FC } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { FaqComponent } from '@src/components/elements/faq_component/FaqComponent';
import { PopularAncmntsSliderContainer } from './popular_ancmnts_slider/PopularAncmntsSliderContainer';
import { useStyles } from './useStyles';
import { WithT } from 'i18next';

export const PopularAncmnts: FC<WithT> = ({ t }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h4" color="initial">
                Телефоны и планшеты
            </Typography>
            <Grid container>
                <Grid item xs={9}>
                    <PopularAncmntsSliderContainer t={t} />
                </Grid>
                <Grid item xs={3} className={classes.faqComponent}>
                    <FaqComponent />
                </Grid>
            </Grid>
        </div>
    );
};
