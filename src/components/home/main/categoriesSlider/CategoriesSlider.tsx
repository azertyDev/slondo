import React, {FC, useEffect} from 'react';
import {WithT} from "i18next";
import {Typography} from '@material-ui/core';
import {CustomSlider} from "@src/components/elements/custom_slider/CustomSlider";
import {settings} from './sliderSettings';
import {Link} from "@root/i18n";
import {Skeleton} from "@material-ui/lab";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@src/redux/rootReducer";
import {setErrorMsgAction} from '@root/src/redux/slices/errorSlice';
import {useStyles} from './useStyles';


export const CategoriesSlider: FC<WithT> = ({t}) => {
    const {isFetch, error, list} = useSelector((store: RootState) => store.categories);

    const dispatch = useDispatch();

    useEffect(() => {
        !!error && dispatch(setErrorMsgAction(error));
    }, [error]);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography className='title' variant="h2">{t('popularCategories')}</Typography>
            <div className="category-slider">
                <CustomSlider {...settings}>
                    {error
                        ? <Typography className="error-text">{error}</Typography>
                        : list.map(category => (
                            isFetch
                                ? <div className='category-skeleton' key={category.id}>
                                    <Skeleton variant="circle" width={127} height={127} style={{marginBottom: 20}}/>
                                    <Skeleton variant="text" width={127} height={25}/>
                                </div>
                                : <Link href="#" key={category.id}>
                                    <a title={category.name}>
                                        <div className='category'>
                                            <div className="bg-layer">
                                                <div className="medium">
                                                    <img src={category.images.url.default} alt={category.name}/>
                                                </div>
                                            </div>
                                            <span className='category-name'>{category.name}</span>
                                        </div>
                                    </a>
                                </Link>
                        ))}
                </CustomSlider>
            </div>
        </div>
    )
};
