import React from 'react'
import { Link } from '@root/i18n'
import { Container, Hidden, Slide, Typography, useScrollTrigger } from '@material-ui/core'
import { MainSlider } from '../header/sliders/mainSlider/MainSlider'
import { CategoriesSlider } from '../header/sliders/categoriesSlider/CategoriesSlider'
import { MainLayout } from '../MainLayout'
import { MainContentContainer } from '@src/components/home/mainContent/MainContentContainer'
import { InterestCategory } from '@src/components/home/interestCategory/InterestCategory'

// styles
import { useStyles } from './useStyles'

export const Home = (props) => {
    const { t } = props
    const trigger = useScrollTrigger()

    const classes = useStyles()
    return (
        <MainLayout title={t('title')}>
            <div className={classes.mainSlider}>
                <MainSlider />
            </div>
            <Container maxWidth='lg'>
                <div className={classes.categorySlider}>
                    <CategoriesSlider t={t} />
                </div>
                {/* <div>
                    <InterestCategory />
                </div> */}
                <div className={classes.mainContent}>
                    <MainContentContainer t={t} />
                </div>
            </Container>
            <Hidden mdUp>
                <div className={classes.createAdBlock}>
                    <Link href={'/create_advertisement'}>
                        <a>
                            <Slide appear={false} direction='up' in={!trigger}>
                                <div>
                                    <Typography variant='h6'>
                                        {t('common:createAd')}
                                    </Typography>
                                </div>
                            </Slide>
                        </a>
                    </Link>
                </div>
            </Hidden>
        </MainLayout>
    )
}
