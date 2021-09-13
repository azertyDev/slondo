import {FC} from 'react';
import {
    Hidden,
    Slide,
    Typography,
    useScrollTrigger,
    Grid,
    Container
} from '@material-ui/core';
import Link from 'next/link';
import {MainSlider} from './main_slider/MainSlider';
import {CategoriesSlider} from './categories_slider/CategoriesSlider';
import {PostsSlider} from './posts_slider/PostsSlider';
import {PostsTabs} from './posts_tabs/PostsTabs';
import {useTranslation} from 'next-i18next';
import {SEOTextComponent} from '@src/components/elements/seo_text_component/SEOTextComponent';
import {HomeSidebar} from '@src/components/home/main/home_sidebar/HomeSideBar';
import {AddIcon} from '@src/components/elements/icons/AddIcon';
import {ScrollTop} from "@src/components/elements/scroll_top/ScrollTop";
import {Banner} from "@src/components/elements/banner/Banner";
import {useStyles} from './useStyles';

export const Main: FC<{ seoTxt: string }> = ({seoTxt}) => {
    const {t} = useTranslation('main');
    const trigger = useScrollTrigger();

    const classes = useStyles();
    return (
        <main>
            <div className={classes.root}>
                <div className="main-slider-wrapper">
                    <MainSlider/>
                </div>
                <div className="categories-slider-wrapper">
                    <CategoriesSlider/>
                </div>
                <Container maxWidth="xl" className="content-wrapper">
                    <Grid container>
                        <Grid item lg={9} xs={12} className='main-content'>
                            <Hidden mdDown>
                                <PostsSlider/>
                            </Hidden>
                            <PostsTabs/>
                        </Grid>
                        <Hidden mdDown>
                            <Grid item lg={3} className="right-content">
                                <HomeSidebar/>
                                <Banner
                                    height="26vw"
                                    threshold={1140}
                                    img='/img/eximtrans.png'
                                    link='http://www.eximtrans.uz'
                                />
                            </Grid>
                        </Hidden>
                    </Grid>
                    <SEOTextComponent text={seoTxt}/>
                </Container>
                <Hidden lgUp>
                    <Slide
                        appear={false}
                        direction="up"
                        in={!trigger}
                    >
                        <div className={classes.createPostBtn}>
                            <Link href='/create'>
                                <a>
                                    <Typography variant="subtitle1">
                                        {t('header:createPost')}
                                    </Typography>
                                    <AddIcon/>
                                </a>
                            </Link>
                        </div>
                    </Slide>
                </Hidden>
                <ScrollTop/>
            </div>
        </main>
    );
};
