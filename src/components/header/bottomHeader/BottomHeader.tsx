import React, {useState} from "react"
import {AppBar, Container, Grid, Hidden, MenuItem, Select, Typography} from "@material-ui/core"
import {ButtonComponent} from "../../elements/button/Button"
import {SearchForm} from "../../elements/search_form/SearchForm"
import {
    Logo,
    CategoryIcon,
    SignIcon,
    AddIcon,
} from '../../elements/icons'
import {withScrollThreshold} from "../../hoc/withScrollThreshold"
import {useStyles} from "./useStyle"


const BottomHeader = (props) => {
    const classes = useStyles(props);
    const {isScrollBreak} = props;
    const [adType, setAdType] = useState('');

    const handleChange = (e) => {
        setAdType(e.target.value);
    };


    return (
        <div className={classes.root}>
            <Hidden smDown>
                <AppBar position={isScrollBreak ? "fixed" : "absolute"} color={"inherit"} elevation={0}>
                    <Container maxWidth='lg'>
                        <Grid container justify="space-between" alignItems="center" spacing={1}>
                            <Grid container item xs={3} alignItems="center">
                                <Grid container item md={7} lg={6} className="bottom-logo">
                                    <a href="/">
                                        <img src={Logo} alt="Slondo logo"/>
                                    </a>
                                </Grid>
                                <Grid item container md={5} lg={6} justify="center" className="category-menu">
                                    <ButtonComponent>
                                        <Typography variant="subtitle2">Категории</Typography>
                                        <img
                                            src={CategoryIcon}
                                            alt="Category icon"
                                        />
                                    </ButtonComponent>
                                </Grid>
                            </Grid>
                            <Grid
                                item
                                container
                                md={6}
                                spacing={1}
                                alignItems="center"
                                className="search-block"
                            >
                                <Grid item md={9}>
                                    <SearchForm/>
                                </Grid>
                                <Grid className='select-menu' item md={3}>
                                    <Select
                                        variant={'outlined'}
                                        value={adType}
                                        onChange={handleChange}
                                        displayEmpty
                                    >
                                        <MenuItem value="">
                                            <Typography variant='subtitle2'>Тип объявления</Typography>
                                        </MenuItem>
                                        <MenuItem value={10}>
                                            <Typography variant='subtitle2'>test</Typography>
                                        </MenuItem>
                                        <MenuItem value={20}>
                                            <Typography variant='subtitle2'>test2</Typography>
                                        </MenuItem>
                                        <MenuItem value={30}>
                                            <Typography variant='subtitle2'>test3</Typography>
                                        </MenuItem>
                                    </Select>
                                </Grid>
                            </Grid>
                            <Grid item md={2} className='create-ad'>
                                <ButtonComponent>
                                    <Typography variant="subtitle2">
                                        Создать объявление
                                    </Typography>
                                    <img
                                        src={AddIcon}
                                        style={{
                                            marginLeft: '10px',
                                            height: '20px',
                                        }}
                                    />
                                </ButtonComponent>
                            </Grid>
                            <Grid item container alignItems="center" xs={1}>
                                <ButtonComponent className='bottom-sign-button' onClick={props.handleOpenModal}>
                                    <Typography variant="subtitle2">Войти</Typography>
                                    <img src={SignIcon} alt="Sign in"/>
                                </ButtonComponent>
                            </Grid>
                        </Grid>
                    </Container>
                </AppBar>
            </Hidden>
            {/*      Adaptive       */}
            <Hidden mdUp>
                <div className='select-local'>
                    <SearchForm/>
                </div>
            </Hidden>
        </div>
    )
};

export default withScrollThreshold(BottomHeader);