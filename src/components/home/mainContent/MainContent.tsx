import React, {useState} from 'react'
import {
    Grid,
    Typography,
    Hidden,
    Tab,
    Tabs,
    Button,
} from '@material-ui/core'
import {ArrowDropDownOutlined} from '@material-ui/icons'
import {CardItem} from '../../elements/card/Card'

// styles
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
}

export const MainContent = () => {
    const classes = useStyles()
    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

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
                        <Tab label={<Typography>Все объявления</Typography>} id={0} selected={true}/>
                        <Tab label={<Typography>Все аукционы</Typography>} id={1}/>
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
                                        title="Объявление"
                                        className="card-item"
                                        alt="adv"
                                        image={`img/card-image.jpg`}
                                        price="180 000 сум"
                                        description="Продам сумку в хорошем соcтоянии"
                                    />
                                </Grid>
                                <Grid xs={6} sm={4} lg={3} item>
                                    <CardItem
                                        title="Объявление"
                                        className="card-item"
                                        alt="adv"
                                        image={`img/card-image.jpg`}
                                        price="180 000 сум"
                                        description="Продам сумку в хорошем соcтоянии"
                                    />
                                </Grid>
                                <Grid xs={6} sm={4} lg={3} item>
                                    <CardItem
                                        title="Объявление"
                                        className="card-item"
                                        alt="adv"
                                        image={`img/card-image.jpg`}
                                        price="180 000 сум"
                                        description="Продам сумку в хорошем соcтоянии"
                                    />
                                </Grid>
                                <Grid xs={6} sm={4} lg={3} item>
                                    <CardItem
                                        title="Объявление"
                                        className="card-item"
                                        alt="adv"
                                        image={`img/card-image.jpg`}
                                        price="180 000 сум"
                                        description="Продам сумку в хорошем соcтоянии"
                                    />
                                </Grid>
                                <Grid xs={6} sm={4} lg={3} item>
                                    <CardItem
                                        title="Объявление"
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
                                        title="Лот"
                                        className="card-item"
                                        alt="adv"
                                        image={`img/card-image.jpg`}
                                        price="180 000 сум"
                                        description="Продам сумку в хорошем соcтоянии"
                                    />
                                </Grid>
                                <Grid xs={6} sm={4} lg={3} item>
                                    <CardItem
                                        title="Лот"
                                        className="card-item"
                                        alt="adv"
                                        image={`img/card-image.jpg`}
                                        price="180 000 сум"
                                        description="Продам сумку в хорошем соcтоянии"
                                    />
                                </Grid>
                                <Grid xs={6} sm={4} lg={3} item>
                                    <CardItem
                                        title="Лот"
                                        className="card-item"
                                        alt="adv"
                                        image={`img/card-image.jpg`}
                                        price="180 000 сум"
                                        description="Продам сумку в хорошем соcтоянии"
                                    />
                                </Grid>
                                <Grid xs={6} sm={4} lg={3} item>
                                    <CardItem
                                        title="Лот"
                                        className="card-item"
                                        alt="adv"
                                        image={`img/card-image.jpg`}
                                        price="180 000 сум"
                                        description="Продам сумку в хорошем соcтоянии"
                                    />
                                </Grid>
                                <Grid xs={6} sm={4} lg={3} item>
                                    <CardItem
                                        title="Лот"
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
            <Grid container>
                <Grid item xs={12} md={9}>
                    <div className="show-more-button">
                        <Button
                            variant="contained"
                            endIcon={<ArrowDropDownOutlined/>}
                        >
                            Показать еще
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
