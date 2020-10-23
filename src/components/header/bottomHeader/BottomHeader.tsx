import React, {useState} from "react"
import {useRouter} from 'next/router'
import {AppBar, Container, Grid, Hidden, MenuItem, Select, Typography} from "@material-ui/core"
import {Link} from '../../../../i18n'
import {ButtonComponent} from "../../elements/button/Button"
import {SearchForm} from "../../elements/search_form/SearchForm"
import {
    Logo,
    CategoryIcon,
    SignIcon,
    AddIcon,
} from '../../elements/icons'
import {withScrollThreshold} from "../../hoc/withScrollThreshold"
import {useSelector} from "react-redux"
import {RootState} from "../../../redux/reducers/rootReducer"
import {useStyles} from "./useStyles"


const BottomHeader = (props) => {
    const {isScrollBreak, handleOpenModal, t} = props;

    const router = useRouter();

    const [adType, setAdType] = useState('');

    const {isAuth} = useSelector((store: RootState) => store.auth);

    const handleSelect = (e) => {
        setAdType(e.target.value);
    };

    const handleCreateAd = () => {
        isAuth
            ? router.push('/create_advertisement')
            : handleOpenModal()
    };

    const handleAuthBtn = () => {
        isAuth
            ? console.log('exit')
            : handleOpenModal()
    };

    const classes = useStyles(props);
    return (
        <div className={classes.root}>
            <Hidden smDown>
                <AppBar position={isScrollBreak ? "fixed" : "absolute"} color={"inherit"}
                        elevation={isScrollBreak ? 1 : 0}>
                    <Container maxWidth='lg'>
                        <Grid container justify="space-between" alignItems="center" spacing={1}>
                            <Grid container item xs={3} alignItems="center">
                                <Grid container item md={7} lg={6} className="bottom-logo">
                                    <Link href='/'>
                                        <a>
                                            <img src={Logo} alt="logo"/>
                                        </a>
                                    </Link>
                                </Grid>
                                <Grid item container md={5} lg={6} justify="center" className="category-menu">
                                    <ButtonComponent>
                                        <Typography variant="subtitle2">{t('categories')}</Typography>
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
                                    <SearchForm t={t}/>
                                </Grid>
                                <Grid className='select-menu' item md={3}>
                                    <Select
                                        variant={'outlined'}
                                        value={adType}
                                        onChange={handleSelect}
                                        displayEmpty
                                    >
                                        <MenuItem value="">
                                            <Typography variant='subtitle2'>{t('adType')}</Typography>
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
                            <Grid item md={2}>
                                <ButtonComponent onClick={handleCreateAd}>
                                    <Typography variant="subtitle2">
                                        {t('common:createAd')}
                                    </Typography>
                                    <img
                                        src={AddIcon}
                                        style={{
                                            marginLeft: '10px',
                                            height: '20px',
                                        }}
                                        alt='plus'
                                    />
                                </ButtonComponent>
                            </Grid>
                            <Grid item container alignItems="center" xs={1}>
                                <ButtonComponent className='bottom-sign-button' onClick={handleAuthBtn}>
                                    <Typography
                                        variant="subtitle2">{t(`common:${isAuth ? 'signOut' : 'signIn'}`)}</Typography>
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
                    <SearchForm t={t}/>
                </div>
            </Hidden>
        </div>
    )
};

export default withScrollThreshold(BottomHeader);