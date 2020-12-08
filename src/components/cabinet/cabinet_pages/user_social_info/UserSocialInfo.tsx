import React from 'react'
import {Typography} from '@material-ui/core'
import {useRouter} from "next/router";
import {Router} from "@root/i18n";
// styles
import {useStyles} from './useStyles'

export const UserSocialInfo = (props) => {
    const {pathname} = useRouter();

    const onButtonClick = (url) => () => {
        Router.push(`/cabinet/${url}`)
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className="menu-item-subscribe">
                <div>
                    <div><Typography variant="h6" color="initial">13</Typography></div>
                    <div><Typography variant="subtitle1" >{props.t('cabinet:reviews')}</Typography></div>
                </div>
                <div onClick={onButtonClick('subscribe')} className={pathname === '/cabinet/subscribe' ? 'selected' : ''}>
                    <div><Typography variant="h6" color="initial">2</Typography></div>
                    <div>
                        <Typography variant="subtitle1">
                            {props.t('cabinet:subscribers')}
                        </Typography>
                    </div>
                </div>
                <div>
                    <div><Typography variant="h6" color="initial">9</Typography></div>
                    <div><Typography variant="subtitle1">{props.t('cabinet:subscriptions')}</Typography></div>
                </div>
            </div>
        </div>
    )
}