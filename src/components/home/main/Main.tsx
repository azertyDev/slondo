import {FC, useEffect, useState} from 'react';
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
import {INNER_URLS} from "@src/constants";
import {useStyles} from './useStyles';
import {adsAPI} from "@src/api/api";
import {RightAdv} from "@src/components/elements/adv/right/RightAdv";
import {AdvType} from "@root/interfaces/Adv";

export const Main: FC<{ seoTxt: string }> = ({seoTxt}) => {
    const {t} = useTranslation('main');
    const trigger = useScrollTrigger();

    const initAds: {
        right: AdvType
    } = {
        right: {
            image: null,
            url: '',
            google_ads: false
        }
    };

    const [ads, setAds] = useState(initAds);
    const {right} = ads;

    const fetchAds = async () => {
        try {
            const {sidebar, footer} = await adsAPI.getAds(1);
            const ads = {
                right: sidebar,
                bottom: footer
            };

            setAds(ads);
        } catch (e) {
            console.error(e.message);
        }
    };

    useEffect(() => {
        fetchAds();
    }, []);

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
                            <PostsTabs rightAdvData={right}/>
                        </Grid>
                        <Hidden mdDown>
                            <Grid item lg={3} className="right-content">
                                <div className='sidebar-wrapper'>
                                    <HomeSidebar/>
                                </div>
                                <RightAdv
                                    adv={right}
                                    threshold={1130}
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
                            <Link href={INNER_URLS.create_post}>
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
                <Hidden mdDown>
                    <ScrollTop/>
                </Hidden>
            </div>
        </main>
    );
};
