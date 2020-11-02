import React, {FC} from 'react';
import {Typography} from '@material-ui/core';
import {CustomSlider} from "@src/components/elements/custom_slider/CustomSlider";
import {settings} from './sliderSettings';
import {useSelector} from 'react-redux';
import {RootState} from "@src/redux/rootReducer";
import {Link} from "@root/i18n";
import {WithT} from "i18next";
import {useStyles} from './useStyles';


export const CategoriesSlider: FC<WithT> = (props) => {
    const {t} = props;

    const {error, list} = useSelector(({categories}: RootState) => categories);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="h4">{t('popularCategories')}</Typography>
            <div className='category-slider'>
                <CustomSlider {...settings}>
                    {
                        error
                            ? (
                                <Typography>{error}</Typography>
                            )
                            : (
                                list.map(category => (
                                        <Link href="#" key={category.id}>
                                            <a title={category.name}>
                                                <img src={category.images.url} alt='category'/>
                                                <Typography>{category.name}</Typography>
                                            </a>
                                        </Link>
                                    )
                                )
                            )
                    }
                </CustomSlider>
            </div>
        </div>
    )
};