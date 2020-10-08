import React, {useState} from 'react'
import {
    Grid,
    Typography,
    Hidden,
    Tabs,
} from '@material-ui/core'
import {BackSpaceArrow} from '../../elements/icons'
import {CardItem} from '../../elements/card/Card'
import {ButtonComponent} from '../../elements/button/Button'
import {CustomTab} from '../../elements/tab/Tab'
import {useStyles} from './useStyles'


const TabPanel = (props) => {
    const {children, value, index, ...other} = props

    return (
        <div
            hidden={value !== index}
            {...other}
        >
            {value === index && children}
        </div>
    )
};

export const MainContent = (props) => {
    const {t} = props;
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue)
    };

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
                        <CustomTab label={<Typography>{t("allAds")}</Typography>} id={0} selected={true}/>
                        <CustomTab label={<Typography>{t("allLots")}</Typography>} id={1}/>
                    </Tabs>
                </Grid>
            </Grid>
            <Grid container className="cards-container">
                <Grid item md={9} xs={12}>
                    <TabPanel value={value} index={0}>
                        <div className="ads-wrapper">
                            <Grid item container spacing={1}>
                                <Grid xs={6} sm={4} lg={3} item>
                                    <CardItem
                                        title={t('ad')}
                                        className="card-item"
                                        alt="adv"
                                        image={`img/card-image.jpg`}
                                        price="180 000 сум"
                                        description="Продам сумку в хорошем соcтоянии"
                                    />
                                </Grid>
                                <Grid xs={6} sm={4} lg={3} item>
                                    <CardItem
                                        title={t('ad')}
                                        className="card-item"
                                        alt="adv"
                                        image={`img/card-image.jpg`}
                                        price="180 000 сум"
                                        description="Продам сумку в хорошем соcтоянии"
                                    />
                                </Grid>
                                <Grid xs={6} sm={4} lg={3} item>
                                    <CardItem
                                        title={t('ad')}
                                        className="card-item"
                                        alt="adv"
                                        image={`img/card-image.jpg`}
                                        price="180 000 сум"
                                        description="Продам сумку в хорошем соcтоянии"
                                    />
                                </Grid>
                                <Grid xs={6} sm={4} lg={3} item>
                                    <CardItem
                                        title={t('ad')}
                                        className="card-item"
                                        alt="adv"
                                        image={`img/card-image.jpg`}
                                        price="180 000 сум"
                                        description="Продам сумку в хорошем соcтоянии"
                                    />
                                </Grid>
                                <Grid xs={6} sm={4} lg={3} item>
                                    <CardItem
                                        title={t('ad')}
                                        className="card-item"
                                        alt="adv"
                                        image={`img/card-image.jpg`}
                                        price="180 000 сум"
                                        description="Продам сумку в хорошем соcтоянии"
                                    />
                                </Grid>
                                <Grid xs={6} sm={4} lg={3} item>
                                    <CardItem
                                        title={t('ad')}
                                        className="card-item"
                                        alt="adv"
                                        image={`img/card-image.jpg`}
                                        price="180 000 сум"
                                        description="Продам сумку в хорошем соcтоянии"
                                    />
                                </Grid>
                                <Grid xs={6} sm={4} lg={3} item>
                                    <CardItem
                                        title={t('ad')}
                                        className="card-item"
                                        alt="adv"
                                        image={`img/card-image.jpg`}
                                        price="180 000 сум"
                                        description="Продам сумку в хорошем соcтоянии"
                                    />
                                </Grid>
                                <Grid xs={6} sm={4} lg={3} item>
                                    <CardItem
                                        title={t('ad')}
                                        className="card-item"
                                        alt="adv"
                                        image={`img/card-image.jpg`}
                                        price="180 000 сум"
                                        description="Продам сумку в хорошем соcтоянии"
                                    />
                                </Grid>
                            </Grid>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <div className="lots-wrapper">
                            <Grid item container spacing={1}>
                                <Grid xs={6} sm={4} lg={3} item>
                                    <CardItem
                                        title={t('lot')}
                                        className="card-item"
                                        alt="adv"
                                        image={`img/card-image.jpg`}
                                        price="180 000 сум"
                                        description="Продам сумку в хорошем соcтоянии"
                                    />
                                </Grid>
                                <Grid xs={6} sm={4} lg={3} item>
                                    <CardItem
                                        title={t('lot')}
                                        className="card-item"
                                        alt="adv"
                                        image={`img/card-image.jpg`}
                                        price="180 000 сум"
                                        description="Продам сумку в хорошем соcтоянии"
                                    />
                                </Grid>
                                <Grid xs={6} sm={4} lg={3} item>
                                    <CardItem
                                        title={t('lot')}
                                        className="card-item"
                                        alt="adv"
                                        image={`img/card-image.jpg`}
                                        price="180 000 сум"
                                        description="Продам сумку в хорошем соcтоянии"
                                    />
                                </Grid>
                                <Grid xs={6} sm={4} lg={3} item>
                                    <CardItem
                                        title={t('lot')}
                                        className="card-item"
                                        alt="adv"
                                        image={`img/card-image.jpg`}
                                        price="180 000 сум"
                                        description="Продам сумку в хорошем соcтоянии"
                                    />
                                </Grid>
                                <Grid xs={6} sm={4} lg={3} item>
                                    <CardItem
                                        title={t('lot')}
                                        className="card-item"
                                        alt="adv"
                                        image={`img/card-image.jpg`}
                                        price="180 000 сум"
                                        description="Продам сумку в хорошем соcтоянии"
                                    />
                                </Grid>
                                <Grid xs={6} sm={4} lg={3} item>
                                    <CardItem
                                        title={t('lot')}
                                        className="card-item"
                                        alt="adv"
                                        image={`img/card-image.jpg`}
                                        price="180 000 сум"
                                        description="Продам сумку в хорошем соcтоянии"
                                    />
                                </Grid>
                                <Grid xs={6} sm={4} lg={3} item>
                                    <CardItem
                                        title={t('lot')}
                                        className="card-item"
                                        alt="adv"
                                        image={`img/card-image.jpg`}
                                        price="180 000 сум"
                                        description="Продам сумку в хорошем соcтоянии"
                                    />
                                </Grid>
                                <Grid xs={6} sm={4} lg={3} item>
                                    <CardItem
                                        title={t('lot')}
                                        className="card-item"
                                        alt="adv"
                                        image={`img/card-image.jpg`}
                                        price="180 000 сум"
                                        description="Продам сумку в хорошем соcтоянии"
                                    />
                                </Grid>
                            </Grid>
                        </div>
                    </TabPanel>
                </Grid>
                <Hidden smDown>
                    <Grid item container md={3} direction='column' className={classes.adBanner}>
                        <Grid item>
                            <div className='top-banner'/>
                        </Grid>
                        <Grid item>
                            <div className='central-banner'/>
                        </Grid>
                        <Grid item>
                            <div className='bottom-banner'/>
                        </Grid>
                    </Grid>
                </Hidden>
            </Grid>
            <Grid container className={classes.showMoreContainer}>
                <Grid item xs={12} md={9} className='show-more-block'>
                    <ButtonComponent>
                        {t('showMore')}
                        <img src={BackSpaceArrow} alt='back_space_arrow'/>
                    </ButtonComponent>
                    <div className='show-more-line'/>
                </Grid>
            </Grid>
        </div>
    )
}
