import React, {useEffect, useState} from 'react'
import {Typography} from '@material-ui/core'
import {useRouter} from "next/router";
import {Router} from "@root/i18n";
// styles
import {useStyles} from './useStyles'
import {userAPI} from "@src/api/api";

export const UserSocialInfo = (props) => {
    const [data, setData] = useState(null)
    const {pathname} = useRouter();
    useEffect(() => {
        userAPI.getNumberOfSubs()
            .then(result => setData(result))
            .catch(error => console.warn(error))
    }, [])

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
                    <div><Typography variant="h6" color="initial">{data?.original?.number_of_subscribers}</Typography></div>
                    <div>
                        <Typography variant="subtitle1">
                            {props.t('cabinet:subscribers')}
                        </Typography>
                    </div>
                </div>
                <div>
                    <div><Typography variant="h6" color="initial">{data?.original?.number_of_subscriptions}</Typography></div>
                    <div><Typography variant="subtitle1">{props.t('cabinet:subscriptions')}</Typography></div>
                </div>
            </div>
        </div>
    )
}