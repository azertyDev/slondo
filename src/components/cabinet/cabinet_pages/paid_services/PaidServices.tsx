import {FC, useState} from 'react';
import {useStyles} from './useStyles';
import {useTranslation} from 'next-i18next';
import {Box, Grid, Hidden, Typography} from '@material-ui/core';
import {RaiseTapeIcon, TopIcon, TurboSaleIcon} from '@src/assets/icons';

export const PaidServices: FC = () => {
    const {t} = useTranslation('cabinet');

    const [isFetch, setIsFetch] = useState(false);
    const [editable, setEditable] = useState(false);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <section className="about-tariff">
                <Typography variant="subtitle1">
                    {t('tariff.header')}
                </Typography>
                <Typography>{t('tariff.description')}</Typography>
            </section>
            <Box display="flex">
                <Grid
                    item
                    container
                    direction="column"
                    className="tariffs-wrapper"
                    justifyContent="space-around"
                    xs={12}
                    lg={6}
                >
                    <section>
                        <Box display="flex" alignItems="center">
                            <TopIcon />
                            <Typography variant="subtitle1">
                                {t('service.top.header')}
                            </Typography>
                        </Box>
                        <Typography>
                            {t('service.top.full_description')}
                        </Typography>
                    </section>
                    <section>
                        <Box display="flex" alignItems="center">
                            <TurboSaleIcon />
                            <Typography variant="subtitle1">
                                {t('service.turbo_sale.header')}
                            </Typography>
                        </Box>
                        <Typography>
                            {t('service.turbo_sale.full_description')}
                        </Typography>
                    </section>
                    <section>
                        <Box display="flex" alignItems="center">
                            <RaiseTapeIcon />
                            <Typography variant="subtitle1">
                                {t('service.raise_tape.header')}
                            </Typography>
                        </Box>
                        <Typography>
                            {t('service.raise_tape.full_description')}
                        </Typography>
                    </section>
                </Grid>
                <Hidden mdDown>
                    <Grid
                        item
                        lg={6}
                        className="rocket-bg"
                    >
                        <img src="/img/services/rocket.svg" alt="image" />
                    </Grid>
                </Hidden>
            </Box>
        </div>
    );
};
