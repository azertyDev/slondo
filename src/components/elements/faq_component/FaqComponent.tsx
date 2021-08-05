import React, {FC} from 'react';
import {Paper, Typography} from '@material-ui/core';
import Link from 'next/link';
import {SignIcon} from '@src/components/elements/icons/SignIcon';
import {GavelIcon} from '@src/components/elements/icons/GavelIcon';
import {NotesIcon} from '@src/components/elements/icons/NotesIcon';
import {ShoppingIcon} from '@src/components/elements/icons/ShoppingIcon';
import {useStyles} from './useStyles';
import {WithT} from 'i18next';


export const FaqComponent: FC<WithT> = (props) => {
    const {t} = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="subtitle1" component='p'>
                {t('main:faq')}
            </Typography>
            <Paper elevation={0}>
                <ul>
                    <li>
                        <Link href="/help/how_to_register">
                            <a>
                                <span>
                                    <SignIcon />
                                </span>
                                <Typography variant="subtitle1" color="initial" component='p'>
                                    {t('main:how_to_register')}
                                </Typography>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/help/how_to_create_auction">
                            <a>
                                <span>
                                    <GavelIcon />
                                </span>
                                <Typography variant="subtitle1" color="initial" component='p'>
                                    {t('main:how_do_create_auction')}
                                </Typography>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/help/how_to_create_post">
                            <a>
                                <span>
                                    <NotesIcon />
                                </span>
                                <Typography variant="subtitle1" color="initial" component='p'>
                                    {t('main:how_do_create_ad')}
                                </Typography>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/help/how_to_participate">
                            <a>
                                <span>
                                    <ShoppingIcon />
                                </span>
                                <Typography variant="subtitle1" color="initial" component='p'>
                                    {t('main:how_do_participate_auction')}
                                </Typography>
                            </a>
                        </Link>
                    </li>
                </ul>
            </Paper>
        </div>
    );
};
