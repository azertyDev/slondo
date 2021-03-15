import React, {useEffect, useState} from 'react'
import {List, Typography} from '@material-ui/core'
import {useRouter} from 'next/router'
import {Router} from '@root/i18n'
import {ButtonComponent} from '@src/components/elements/button/Button'
import {CustomBadge} from '@src/components/elements/custom_budge/CustomBadge'
import {userAPI} from "@src/api/api";
// styles
import {useStyles} from './useStyles'

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
        <List className={classes.root}>
            <CustomBadge badgeContent={6}>
                <ButtonComponent
                    onClick={onButtonClick('rating')}
                    className={pathname === '/cabinet/rating' ? 'selected' : ''}
                >
                    <Typography variant="subtitle1">
                        {props.t('cabinet:reviews')}
                    </Typography>
                </ButtonComponent>
            </CustomBadge>
            <ButtonComponent
                onClick={onButtonClick('subscribe')}
                className={pathname === '/cabinet/subscribe' ? 'selected' : ''}
            >
                <Typography variant="subtitle1">
                    {props.t('cabinet:subscriptionsAndSubscribers')}
                </Typography>
            </ButtonComponent>
        </List>
    )
}