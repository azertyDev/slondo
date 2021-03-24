import React, {FC} from 'react';
import {Grid, Typography} from '@material-ui/core';
import Link from 'next/link';
import {useStyles} from './useStyles';
import {useTranslation} from "react-i18next";


export const SiteMapComponent: FC<any> = ({categories}) => {
    const {t} = useTranslation(['categories']);
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="h5" color="initial" className={classes.title}>
                Карта сайта (Категории)
            </Typography>
            <Grid container justify="center">
                {categories.map((el) => (
                    <Grid item xs={9} className={classes.row} key={el.id}>
                        <div className='category-icon'>{el.colorIcon}</div>
                        <div>
                            <Typography variant="h6" color="initial">
                                {t(`categories:${el.name}`)}
                            </Typography>
                            <ul className="menu">
                                <li>
                                    <Link href="#">
                                        <a>
                                            <Typography
                                                variant="subtitle1"
                                                color="initial"
                                            >
                                                Новые
                                            </Typography>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a>
                                            <Typography
                                                variant="subtitle1"
                                                color="initial"
                                            >
                                                С пробегом
                                            </Typography>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};
