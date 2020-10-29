import React, {useState} from 'react'
import {
    Grid,
    Typography,
    Hidden,
    Tabs,
} from '@material-ui/core'
import {CardItem} from '@src/components/elements/card/Card'
import {ButtonComponent} from '@src/components/elements/button/Button'
import {CustomTab} from '@src/components/elements/custom_tab/CustomTab'
import { Banner } from '@src/components/elements/banner/Banner'
import { CustomTabPanel } from "@src/components/elements/custom_tab_panel/CustomTabPanel";

// Styles
import {useStyles} from './useStyles'

export const MainContent = (props) => {
    const {t} = props;
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue)
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid md={9} xs={12} item>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        className="tabs"
                    >
                        <CustomTab label={<Typography variant='h6'>{t("allAds")}</Typography>} id={0} selected={true}/>
                        <CustomTab label={<Typography variant='h6'>{t("allLots")}</Typography>} id={1}/>
                    </Tabs>
                </Grid>
            </Grid>
            <Grid container className="cards-container">
                <Grid item md={9} xs={12}>
                    <CustomTabPanel value={value} index={0}>
                        <div className="ads-wrapper">
                            <Grid item container spacing={2}>
                                <Grid xs={6} sm={4} lg={3} item>
                                    <CardItem
                                        title='Sony PlayStation 4 slim 1TB + доставка'
                                        cardType={t('ad')}
                                        className="card-item"
                                        alt="adv"
                                        image={`/img/phone-image.jpg`}
                                        price="2 500 000 сум"
                                        location='Ташкент, Ташкентская область'
                                        dateTime='20 октября в 16:32'
                                    />
                                </Grid>
                                <Grid xs={6} sm={4} lg={3} item>
                                    <CardItem
                                        title='Sony PlayStation 4 slim 1TB + доставка'
                                        cardType={t('ad')}
                                        className="card-item"
                                        alt="adv"
                                        image={`/img/supboofer-image.jpg`}
                                        price="2 500 000 сум"
                                        location='Ташкент, Ташкентская область'
                                        dateTime='20 октября в 16:32'
                                    />
                                </Grid>
                                <Grid xs={6} sm={4} lg={3} item>
                                    <CardItem
                                        title='Sony PlayStation 4 slim 1TB + доставка'
                                        cardType={t('ad')}
                                        className="card-item"
                                        alt="adv"
                                        image={`/img/clock-image.jpg`}
                                        price="2 500 000 сум"
                                        location='Ташкент, Ташкентская область'
                                        dateTime='20 октября в 16:32'
                                    />
                                </Grid>
                                <Grid xs={6} sm={4} lg={3} item>
                                    <CardItem
                                        title='Sony PlayStation 4 slim 1TB + доставка'
                                        cardType={t('ad')}
                                        className="card-item"
                                        alt="adv"
                                        image={`https://images.unsplash.com/photo-1550432163-9cb326104944?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`}
                                        price="2 500 000 сум"
                                        location='Ташкент, Ташкентская область'
                                        dateTime='20 октября в 16:32'
                                    />
                                </Grid>
                                <Grid xs={6} sm={4} lg={3} item>
                                    <CardItem
                                        title='Sony PlayStation 4 slim 1TB + доставка'
                                        cardType={t('ad')}
                                        className="card-item"
                                        alt="adv"
                                        image={`/img/notebook-image.jpg`}
                                        price="2 500 000 сум"
                                        location='Ташкент, Ташкентская область'
                                        dateTime='20 октября в 16:32'
                                    />
                                </Grid>
                                <Grid xs={6} sm={4} lg={3} item>
                                    <CardItem
                                        title='Sony PlayStation 4 slim 1TB + доставка'
                                        cardType={t('ad')}
                                        className="card-item"
                                        alt="adv"
                                        image={`/img/router-image.jpg`}
                                        price="2 500 000 сум"
                                        location='Ташкент, Ташкентская область'
                                        dateTime='20 октября в 16:32'
                                    />
                                </Grid>
                                <Grid xs={6} sm={4} lg={3} item>
                                    <Banner/>
                                </Grid>
                                <Grid xs={6} sm={4} lg={3} item>
                                    <CardItem
                                        title='Sony PlayStation 4 slim 1TB + доставка'
                                        cardType={t('ad')}
                                        className="card-item"
                                        alt="adv"
                                        image={`/img/supboofer-image.jpg`}
                                        price="2 500 000 сум"
                                        location='Ташкент, Ташкентская область'
                                        dateTime='20 октября в 16:32'
                                    />
                                </Grid>
                            </Grid>
                        </div>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        <div className="lots-wrapper">
                            <Grid item container spacing={2}>
                                <Grid xs={6} sm={4} lg={3} item>
                                    <CardItem
                                        title='Sony PlayStation 4 slim 1TB + доставка'
                                        cardType={t('lot')}
                                        className="card-item"
                                        alt="adv"
                                        image={`/img/phone-image.jpg`}
                                        price="2 500 000 сум"
                                        location='Ташкент, Ташкентская область'
                                        dateTime='20 октября в 16:32'
                                    />
                                </Grid>
                                <Grid xs={6} sm={4} lg={3} item>
                                    <Banner/> 
                                </Grid>
                                <Grid xs={6} sm={4} lg={3} item>
                                    <CardItem
                                        title='Sony PlayStation 4 slim 1TB + доставка'
                                        cardType={t('lot')}
                                        className="card-item"
                                        alt="adv"
                                        image={`/img/card-image.jpg`}
                                        price="2 500 000 сум"
                                        location='Ташкент, Ташкентская область'
                                        dateTime='20 октября в 16:32'
                                    />
                                </Grid>
                                <Grid xs={6} sm={4} lg={3} item>
                                    <CardItem
                                        title='Sony PlayStation 4 slim 1TB + доставка'
                                        cardType={t('lot')}
                                        className="card-item"
                                        alt="adv"
                                        image={`/img/card-image.jpg`}
                                        price="2 500 000 сум"
                                        location='Ташкент, Ташкентская область'
                                        dateTime='20 октября в 16:32'
                                    />
                                </Grid>
                                <Grid xs={6} sm={4} lg={3} item>
                                    <CardItem
                                        title='Sony PlayStation 4 slim 1TB + доставка'
                                        cardType={t('lot')}
                                        className="card-item"
                                        alt="adv"
                                        image={`/img/card-image.jpg`}
                                        price="2 500 000 сум"
                                        location='Ташкент, Ташкентская область'
                                        dateTime='20 октября в 16:32'
                                    />
                                </Grid>
                                <Grid xs={6} sm={4} lg={3} item>
                                    <CardItem
                                        title='Sony PlayStation 4 slim 1TB + доставка'
                                        cardType={t('lot')}
                                        className="card-item"
                                        alt="adv"
                                        image={`/img/card-image.jpg`}
                                        price="2 500 000 сум"
                                        location='Ташкент, Ташкентская область'
                                        dateTime='20 октября в 16:32'
                                    />
                                </Grid>
                                <Grid xs={6} sm={4} lg={3} item>
                                    <CardItem
                                        title='Sony PlayStation 4 slim 1TB + доставка'
                                        cardType={t('lot')}
                                        className="card-item"
                                        alt="adv"
                                        image={`/img/card-image.jpg`}
                                        price="2 500 000 сум"
                                        location='Ташкент, Ташкентская область'
                                        dateTime='20 октября в 16:32'
                                    />
                                </Grid>
                                <Grid xs={6} sm={4} lg={3} item>
                                    <CardItem
                                        title='Sony PlayStation 4 slim 1TB + доставка'
                                        cardType={t('lot')}
                                        className="card-item"
                                        alt="adv"
                                        image={`/img/card-image.jpg`}
                                        price="2 500 000 сум"
                                        location='Ташкент, Ташкентская область'
                                        dateTime='20 октября в 16:32'
                                    />
                                </Grid>
                            </Grid>
                        </div>
                    </CustomTabPanel>
                </Grid>
                <Hidden smDown>
                    <Grid item container md={3} direction='column' className={classes.adBanner}>
                        <Grid item>
                            <Banner height='300px'/>
                        </Grid>
                    </Grid>
                </Hidden>
            </Grid>
            <Grid container className={classes.showMoreContainer}>
                <Grid item xs={12} md={9} className='show-more-block'>
                    <ButtonComponent>
                        <Typography variant="subtitle2" color="initial">
                            {t('showMore')}
                        </Typography>
                    </ButtonComponent>
                </Grid>
            </Grid>
        </div>
    )
}
