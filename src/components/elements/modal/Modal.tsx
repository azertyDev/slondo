import React, { useState } from 'react'
import {
    Grid,
    Modal,
    Typography,
    Container,
    Tabs,
    Tab,
    TextField,
} from '@material-ui/core'
import { ButtonComponent } from '../button/Button'
import {
    BonusIcon,
    BezopasniyTorgIcon,
    AdvertisementIcon,
    TorgIcon,
    RatingIcon,
} from '../../elements/icons/index'

// styles
import { useStyles } from './useStyles'

const TabPanel = (props) => {
    const { children, value, index, ...other } = props

    return (
        <div hidden={value !== index} {...other}>
            {value === index && children}
        </div>
    )
}

export const ModalComponent = (props) => {
    const classes = useStyles()

    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const body = (
        <div className={classes.body}>
            <Grid container>
                <Grid item xs={4} className={classes.modalBodyInfo}>
                    <Grid item xs={12} container className={classes.infoBlock}>
                        <Grid item xs={3}>
                            <img src={BonusIcon} alt="bonus-icon" />
                        </Grid>
                        <Grid item xs={9} container alignItems="center">
                            <Typography variant="subtitle2" color="initial">
                                Получайте бонусы за регистрацию, создание
                                объявлений или торгов
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} container className={classes.infoBlock}>
                        <Grid item xs={3}>
                            <img
                                src={BezopasniyTorgIcon}
                                alt="safeAuction-icon"
                            />
                        </Grid>
                        <Grid item xs={9} container alignItems="center">
                            <Typography variant="subtitle2" color="initial">
                                Воспользуйтесь безопасной покупкой. Мы доставим
                                товар до Ваших дверей.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} container className={classes.infoBlock}>
                        <Grid item xs={3}>
                            <img
                                src={AdvertisementIcon}
                                alt="advertisement-icon"
                            />
                        </Grid>
                        <Grid item xs={9} container alignItems="center">
                            <Typography variant="subtitle2" color="initial">
                                Создавайте объявления, воспользуйтесь бонусами,
                                что бы ускорить продажу
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} container className={classes.infoBlock}>
                        <Grid item xs={3}>
                            <img src={TorgIcon} alt="torg-icon" />
                        </Grid>
                        <Grid item xs={9} container alignItems="center">
                            <Typography variant="subtitle2" color="initial">
                                Создавайте торг, где пользователи смогут дать
                                наивысшую цену за Ваш товар
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} container className={classes.infoBlock}>
                        <Grid item xs={3}>
                            <img src={RatingIcon} alt="rating-icon" />
                        </Grid>
                        <Grid item xs={9} container alignItems="center">
                            <Typography variant="subtitle2" color="initial">
                                Проверяйте продавцом при помощи рейтинговой
                                системы. Чем больше звезд, тем надежнее
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={8}>
                    <Container>
                        <Grid item xs={12} className={classes.welcome}>
                            <Typography variant="subtitle1" color="initial">
                                Добро пожаловать на SLONDO!
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography variant="subtitle2" color="initial">
                                Авторизуйтесь что бы воспользоваться всеми функциями сайта.
                            </Typography>
                        </Grid>
                        <Grid xs={12} item className={classes.tabsContainer}>
                            <Grid item xs={12} container justify="center">
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    indicatorColor="primary"
                                    className={classes.tabs}
                                >
                                    <Tab
                                        label={
                                            <Typography variant="subtitle2">
                                                Войти
                                            </Typography>
                                        }
                                        id={0}
                                        selected
                                        disableFocusRipple
                                    />
                                    <Tab
                                        label={
                                            <Typography variant="subtitle2">
                                                Регистрация
                                            </Typography>
                                        }
                                        id={1}
                                        disableFocusRipple
                                    />
                                </Tabs>
                            </Grid>
                            <Grid item xs={12}>
                                <TabPanel
                                    value={value}
                                    index={0}
                                    className={classes.signPanel}
                                >
                                    <Grid item xs={12}>
                                        <Typography
                                            variant="subtitle2"
                                            color="initial"
                                        >
                                            Введите номер телефона
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextField
                                            //   onChange={}
                                            placeholder="+ (998) 97 ___ __ __"
                                            fullWidth
                                            variant="outlined"
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Typography
                                            variant="subtitle2"
                                            color="initial"
                                        >
                                            Введите пароль
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextField
                                            //   onChange={}
                                            type="password"
                                            fullWidth
                                            variant="outlined"
                                        />
                                    </Grid>

                                    <Grid
                                        item
                                        xs={12}
                                        container
                                        alignItems="center"
                                        justify="flex-end"
                                    >
                                        <a href="#">
                                            <Typography
                                                variant="body2"
                                                color="initial"
                                            >
                                                Забыли пароль?
                                            </Typography>
                                        </a>
                                    </Grid>

                                    <Grid
                                        item
                                        xs={12}
                                        className={classes.modalSignButton}
                                        container
                                        justify="center"
                                    >
                                        <ButtonComponent>Войти</ButtonComponent>
                                    </Grid>

                                    <Grid
                                        item
                                        xs={12}
                                        container
                                        justify="center"
                                    >
                                        <Grid item xs={8}>
                                            <Typography
                                                variant="body2"
                                                color="initial"
                                                className={classes.expression}
                                            >
                                                Нажимая кнопку Войти вы
                                                принимаете условия{' '}
                                                <span
                                                    className={
                                                        classes.coloredText
                                                    }
                                                >
                                                    лицензионного соглашения
                                                </span>{' '}
                                                и{' '}
                                                <span
                                                    className={
                                                        classes.coloredText
                                                    }
                                                >
                                                    политики конфиденциальности
                                                </span>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </TabPanel>
                                <TabPanel value={value} index={1}></TabPanel>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
            </Grid>
        </div>
    )
    return (
        <div className={classes.root}>
            <Modal
                open={props.open}
                onClose={props.handleCloseModal}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                className={classes.modal}
            >
                {body}
            </Modal>
        </div>
    )
}
