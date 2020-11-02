import React, { useState } from 'react'
import {
    Grid,
    Typography,
    Hidden,
    Tabs,
} from '@material-ui/core'
import { CardItem } from '@src/components/elements/card/Card'
import { ButtonComponent } from '@src/components/elements/button/Button'
import { CustomTab } from '@src/components/elements/custom_tab/CustomTab'
import { Banner } from '@src/components/elements/banner/Banner'
import { CustomTabPanel } from '@src/components/elements/custom_tab_panel/CustomTabPanel'

// Styles
import { useStyles } from './useStyles'

export const MainContent = (props) => {
    const { t, cardData } = props
    const { data, error, isFetch } = cardData

    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    const handleShowMore = () => {
        console.log('clicked')
    }

    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Typography variant='h4'>Все объявления</Typography>
            <Grid container>
                <Grid md={9} xs={12} item>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        className="tabs"
                    >
                        <CustomTab label={<Typography variant='h6'>{t('allAds')}</Typography>} id={0} selected={true} />
                        <CustomTab label={<Typography variant='h6'>{t('allLots')}</Typography>} id={1} />
                    </Tabs>
                </Grid>
            </Grid>
            <Grid container className="cards-container">
                <Grid item md={9} xs={12}>
                    <CustomTabPanel value={value} index={0}>
                        <div className="ads-wrapper">
                            <Grid item container spacing={2}>
                                {data.data.map(item => (
                                    <Grid key={item.id} xs={6} sm={4} lg={3} item>
                                        <CardItem
                                            title={item.title}
                                            cardType={t('ad')}
                                            className="card-item"
                                            alt={item.title}
                                            image={item.images[0].url}
                                            price="2500"
                                            location={item.location}
                                            dateTime={item.created_at}
                                            safe_deal={item.safe_deal}
                                            currency={item.currency.name}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </div>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        <div className="lots-wrapper">
                            <Grid item container spacing={2}>
                                {data.data.map(item => (
                                    <Grid key={item.id} xs={6} sm={4} lg={3} item>
                                        <CardItem
                                            title={item.title}
                                            cardType={t('lot')}
                                            className="card-item"
                                            alt={item.title}
                                            image={item.images[0].url}
                                            price="2500"
                                            location={item.location}
                                            dateTime={item.created_at}
                                            safe_deal={item.safe_deal}
                                            currency={item.currency.name}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </div>
                    </CustomTabPanel>
                </Grid>
                <Hidden smDown>
                    <Grid item container md={3} direction='column' className={classes.adBanner}>
                        <Grid item>
                            <Banner height='300px' />
                        </Grid>
                    </Grid>
                </Hidden>
            </Grid>
            <Grid container className={classes.showMoreContainer}>
                <Grid item xs={12} md={9} className='show-more-block'>
                    <ButtonComponent onClick={handleShowMore}>
                        <Typography variant="subtitle2" color="initial">
                            {t('showMore')}
                        </Typography>
                    </ButtonComponent>
                </Grid>
            </Grid>
        </div>
    )
}
