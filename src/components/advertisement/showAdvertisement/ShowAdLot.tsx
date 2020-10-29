import React from 'react';
import { Container, Grid, Hidden, Typography } from '@material-ui/core';
import { BreadcrumbsComponent } from '../../elements/breadcrumbs/Breadcrumbs';
import { AdsAndLotsBlock } from '../../elements/adsAndLotsBlock/AdsAndLotsBlock';
import { MainLayout } from '../../MainLayout';
import { RightSide } from './rightSide/RightSide';
import { LeftSide } from './leftSide/LeftSide';
import { Link } from '@root/i18n';
import { CustomImageTag } from "@src/components/elements/custom_image_tag/CustomImageTag";

// icons
import { ShareIcon } from '../../elements/icons';

// styles
import { useStyles } from './useStyles';

export const ShowAdLot = (props) => {
    const { t } = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <MainLayout title="Просмотр объявления">
                <Container maxWidth="lg">
                    <div className={classes.breadcrumbs}>
                        <BreadcrumbsComponent>
                            <Link href="#">
                                <a>Для дома и дачи</a>
                            </Link>
                            <Link href="#">
                                <a>Мебель и интерьер</a>
                            </Link>
                            <Typography color="primary">Столовая мебель</Typography>
                        </BreadcrumbsComponent>
                    </div>
                    <div>
                        <div>
                            <Typography variant="h4" color="initial">
                                Объявление: Продаю Samsung A5 в отличном
                                состоянии.
                            </Typography>
                            <Link href="#">
                                <a>
                                    <CustomImageTag
                                        src={ShareIcon}
                                        alt="share-icon"
                                        className={classes.shareIcon}
                                    />
                                </a>
                            </Link>
                        </div>
                        <div>
                            <Typography variant="h4" color="initial">
                                1 350 000 Сум
                            </Typography>
                        </div>
                    </div>
                    <Grid container spacing={2}> 
                        <Grid item xs={12} md={9}>
                            <LeftSide />
                        </Grid>

                        <Hidden smDown>
                            <Grid item xs={3}>
                                <RightSide />
                                <div className={classes.adBanner}>
                                    <div className="right-banner" />
                                </div>
                            </Grid>
                        </Hidden>
                    </Grid>

                    <Grid
                        item
                        container
                        xs={12}
                        direction="row"
                        justify="center"
                    >
                        <AdsAndLotsBlock
                            title="Похожие объявления"
                            xs={6}
                            sm={4}
                            md={3}
                            lg={2}
                        />
                    </Grid>
                </Container>
            </MainLayout>
        </div>
    );
};
