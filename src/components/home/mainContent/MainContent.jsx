import React, {useState} from 'react'
import {
    Container,
    Grid,
    Typography,
    Hidden,
    Tab,
    Tabs,
    Button,
} from '@material-ui/core'
import {ArrowDropDownOutlined} from '@material-ui/icons'

import {Advertisement} from '../../elements/advertisement/Advertisement'
import {CardItem} from '../../elements/card/Card'
import {useStyles} from './useStyle'


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
            <Container>
                <Typography variant="h4">Объявления</Typography>
                <Grid container>
                    <Grid md={9} sm={12} xs={12} item>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                            className="tabs"
                        >
                            <Tab label="Все объявления" id={0} disableRipple={false}/>
                            <Tab label="Аукцион" id={1} disableRipple={false}/>
                        </Tabs>
                    </Grid>
                </Grid>
                <Grid container className="cards-container">
                    <Grid item md={9}>
                        <TabPanel value={value} index={0}>
                            <div className="line">
                                <Grid item container spacing={1}>
                                    <Grid md={3} xs={6} sm={4} item>
                                        <CardItem
                                            title="Объявление"
                                            bgcolor="#75fff5"
                                            type="adv-type"
                                            className="card-item"
                                            alt="adv"
                                            category="adv"
                                            image={`img/card-image.jpg`}
                                            price="180 000 сум"
                                            description="Продам сумку в хорошем"
                                        />
                                    </Grid>
                                    <Grid md={3} xs={6} sm={4} item>
                                        <CardItem
                                            bgcolor="#75fff5"
                                            title="Объявление"
                                            type="adv-type"
                                            className="card-item"
                                            alt="adv"
                                            category="adv"
                                            image={`img/card-image.jpg`}
                                            price="180 000 сум"
                                            description="Продам сумку в хорошем"
                                        />
                                    </Grid>
                                    <Grid md={3} xs={6} sm={4} item>
                                        <CardItem
                                            bgcolor="#75fff5"
                                            title="Объявление"
                                            type="adv-type"
                                            className="card-item"
                                            alt="adv"
                                            category="adv"
                                            image={`img/card-image.jpg`}
                                            price="180 000 сум"
                                            description="Продам сумку в хорошем"
                                        />
                                    </Grid>
                                    <Grid md={3} xs={6} sm={4} item>
                                        <CardItem
                                            bgcolor="#75fff5"
                                            title="Объявление"
                                            type="adv-type"
                                            className="card-item"
                                            alt="adv"
                                            category="adv"
                                            image={`img/card-image.jpg`}
                                            price="180 000 сум"
                                            description="Продам сумку в хорошем"
                                        />
                                    </Grid>
                                    <Grid md={3} xs={6} sm={4} item>
                                        <CardItem
                                            bgcolor="#75fff5"
                                            title="Объявление"
                                            type="adv-type"
                                            className="card-item"
                                            alt="adv"
                                            category="adv"
                                            image={`img/card-image.jpg`}
                                            price="180 000 сум"
                                            description="Продам сумку в хорошем"
                                        />
                                    </Grid>
                                    <Grid md={3} xs={6} sm={4} item>
                                        <CardItem
                                            bgcolor="#75fff5"
                                            title="Объявление"
                                            type="adv-type"
                                            className="card-item"
                                            alt="adv"
                                            category="adv"
                                            image={`img/card-image.jpg`}
                                            price="180 000 сум"
                                            description="Продам сумку в хорошем"
                                        />
                                    </Grid>
                                    <Grid md={3} xs={6} sm={4} item>
                                        <CardItem
                                            bgcolor="#75fff5"
                                            title="Объявление"
                                            type="adv-type"
                                            className="card-item"
                                            alt="adv"
                                            category="adv"
                                            image={`img/card-image.jpg`}
                                            price="180 000 сум"
                                            description="Продам сумку в хорошем"
                                        />
                                    </Grid>
                                    <Grid md={3} xs={6} sm={4} item>
                                        <CardItem
                                            bgcolor="#75fff5"
                                            title="Объявление"
                                            type="adv-type"
                                            className="card-item"
                                            alt="adv"
                                            category="adv"
                                            image={`img/card-image.jpg`}
                                            price="180 000 сум"
                                            description="Продам сумку в хорошем"
                                        />
                                    </Grid>
                                    <Grid md={3} xs={6} sm={4} item>
                                        <CardItem
                                            bgcolor="#75fff5"
                                            title="Объявление"
                                            type="adv-type"
                                            className="card-item"
                                            alt="adv"
                                            category="adv"
                                            image={`img/card-image.jpg`}
                                            price="180 000 сум"
                                            description="Продам сумку в хорошем"
                                        />
                                    </Grid>
                                </Grid>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <div className="line">
                                <Grid item container spacing={1}>
                                    <Grid md={3} xs={6} item>
                                        <CardItem
                                            title="Лот"
                                            bgcolor="#6600ff"
                                            type="adv-type"
                                            className="card-item"
                                            alt="adv"
                                            category="adv"
                                            image={`img/mobile-image.jpg`}
                                            price="180 000 сум"
                                            description="Продам сумку в хорошем"
                                        />
                                    </Grid>
                                    <Grid md={3} xs={6} item>
                                        <CardItem
                                            title="Лот"
                                            bgcolor="#6600ff"
                                            type="adv-type"
                                            className="card-item"
                                            alt="adv"
                                            category="adv"
                                            image={`img/mobile-image.jpg`}
                                            price="180 000 сум"
                                            description="Продам сумку в хорошем"
                                        />
                                    </Grid>
                                    <Grid md={3} xs={6} item>
                                        <CardItem
                                            title="Лот"
                                            bgcolor="#6600ff"
                                            type="adv-type"
                                            className="card-item"
                                            alt="adv"
                                            category="adv"
                                            image={`img/mobile-image.jpg`}
                                            price="180 000 сум"
                                            description="Продам сумку в хорошем"
                                        />
                                    </Grid>
                                    <Grid md={3} xs={6} item>
                                        <CardItem
                                            title="Лот"
                                            bgcolor="#6600ff"
                                            type="adv-type"
                                            className="card-item"
                                            alt="adv"
                                            category="adv"
                                            image={`img/mobile-image.jpg`}
                                            price="180 000 сум"
                                            description="Продам сумку в хорошем"
                                        />
                                    </Grid>
                                    <Grid md={3} xs={6} item>
                                        <CardItem
                                            bgcolor="#6600ff"
                                            title="Лот"
                                            type="adv-type"
                                            className="card-item"
                                            alt="adv"
                                            category="adv"
                                            image={`img/mobile-image.jpg`}
                                            price="180 000 сум"
                                            description="Продам сумку в хорошем"
                                        />
                                    </Grid>
                                    <Grid md={3} xs={6} item>
                                        <CardItem
                                            bgcolor="#6600ff"
                                            title="Лот"
                                            type="adv-type"
                                            className="card-item"
                                            alt="adv"
                                            category="adv"
                                            image={`img/mobile-image.jpg`}
                                            price="180 000 сум"
                                            description="Продам сумку в хорошем"
                                        />
                                    </Grid>
                                </Grid>
                            </div>
                        </TabPanel>
                    </Grid>
                    <Hidden only="sm">
                        <Grid item md={3}>
                            <Advertisement height="250px"/>
                            <Advertisement height="130px"/>
                            <Advertisement height="250px"/>
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
            </Container>
        </div>
    )
}
