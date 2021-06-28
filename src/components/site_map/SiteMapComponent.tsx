import {FC} from 'react';
import Link from 'next/link';
import {Grid, Typography} from '@material-ui/core';
import {useTranslation} from "react-i18next";
import {site_categories} from '@src/common_data/site_categories';
import {useStyles} from './useStyles';

export const SiteMapComponent: FC = () => {
    const {t} = useTranslation(['categories']);
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="h5" color="initial" className={classes.title}>
                Карта сайта (Категории)
            </Typography>
            <Grid container justify="center">
                {site_categories.map((el) => (
                    <Grid item xs={9} className={classes.row} key={el.id}>
                        <div className='category-icon'>{el.icon}</div>
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
