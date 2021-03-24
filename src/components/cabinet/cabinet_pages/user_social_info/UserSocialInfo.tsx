import React, {FC} from 'react'
import {List, Typography} from '@material-ui/core'
import {useRouter} from 'next/router'
import {ButtonComponent} from '@src/components/elements/button/Button'
import {CustomBadge} from '@src/components/elements/custom_budge/CustomBadge'
import {useStyles} from './useStyles'
import {WithT} from "i18next";

export const UserSocialInfo: FC<WithT> = ({t}) => {
    const {pathname, push} = useRouter();

    const onButtonClick = (url) => () => {
        push(`/cabinet/${url}`)
    };

    const classes = useStyles()
    return (
        <List className={classes.root}>
            <CustomBadge badgeContent={6}>
                <ButtonComponent
                    onClick={onButtonClick('rating')}
                    className={pathname === '/cabinet/rating' ? 'selected' : ''}
                >
                    <Typography variant="subtitle1">
                        {t('cabinet:reviews')}
                    </Typography>
                </ButtonComponent>
            </CustomBadge>
            <ButtonComponent
                onClick={onButtonClick('subscribe')}
                className={pathname === '/cabinet/subscribe' ? 'selected' : ''}
            >
                <Typography variant="subtitle1">
                    {t('cabinet:subscriptionsAndSubscribers')}
                </Typography>
            </ButtonComponent>
        </List>
    )
}