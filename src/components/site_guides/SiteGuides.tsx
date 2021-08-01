import {cloneElement} from 'react';
import {AppBar, Container, Grid, Toolbar, useScrollTrigger} from '@material-ui/core';
import Link from 'next/link';
import {Logo} from '../elements/icons';
import {Localization} from '../header/top/localization/Localization';
import {useTranslation} from 'react-i18next';
import {SafeShoppingGuide} from '@src/components/site_guides/SafeShoppingGuide';
import {AuctionGuide} from '@src/components/site_guides/AuctionGuide';
import {useRouter} from 'next/router';
import ErrorPage from "@root/pages/_error";
import {useStyles} from './useStyles';

function HideOnScroll(props) {
    const {children, window} = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined
    });

    return cloneElement(children, {
        elevation: trigger ? 4 : 0
    });
}

export const SiteGuides = (props) => {
    const {term} = useRouter().query;
    const {t} = useTranslation('safe_shopping');

    const getPageByTerm = () => {
        switch (term) {
            case 'auction':
                return <AuctionGuide t={t}/>;
            case 'safe_shopping':
                return <SafeShoppingGuide t={t}/>;
            default:
                return <ErrorPage statusCode={404}/>;
        }
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <HideOnScroll {...props}>
                <AppBar color='transparent' elevation={0} position='sticky'>
                    <Container maxWidth='lg'>
                        <Toolbar disableGutters className='toolbar' variant="dense">
                            <Grid container>
                                <Grid
                                    item
                                    xs={6}
                                    container
                                    justify='flex-start'
                                    alignItems='center'
                                >
                                    <Link href='/'>
                                        <a>
                                            <Logo/>
                                        </a>
                                    </Link>
                                </Grid>
                                <Grid
                                    item
                                    xs={6}
                                    container
                                    justify='flex-end'
                                    alignItems='center'
                                >
                                    <Localization/>
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </Container>
                </AppBar>
            </HideOnScroll>
            {getPageByTerm()}
        </div>
    );
};
