import React, {FC} from 'react';
import {Paper, Typography} from '@material-ui/core';
import Link from 'next/link';
import {SignIcon} from '@src/components/elements/icons/SignIcon';
import {GavelIcon} from '@src/components/elements/icons/GavelIcon';
import {NotesIcon} from '@src/components/elements/icons/NotesIcon';
import {ShoppingIcon} from '@src/components/elements/icons/ShoppingIcon';
import {useStyles} from './useStyles';


export const FaqComponent: FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="subtitle1">
                Часто задаваемые вопросы
            </Typography>
            <Paper elevation={0}>
                <ul>
                    <li>
                        <Link href="#">
                            <a>
                                <span>
                                    <SignIcon/>
                                </span>
                                <Typography variant="subtitle1" color="initial">
                                    Как зарегистрироваться?
                                </Typography>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a>
                                <span>
                                    <GavelIcon/>
                                </span>
                                <Typography variant="subtitle1" color="initial">
                                    Как создать аукцион?
                                </Typography>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a>
                                <span>
                                    <NotesIcon/>
                                </span>
                                <Typography variant="subtitle1" color="initial">
                                    Как создать объявление?
                                </Typography>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a>
                                <span>
                                    <ShoppingIcon/>
                                </span>
                                <Typography variant="subtitle1" color="initial">
                                    Как учавствовать в аукционе?
                                </Typography>
                            </a>
                        </Link>
                    </li>
                </ul>
            </Paper>
        </div>
    );
};
