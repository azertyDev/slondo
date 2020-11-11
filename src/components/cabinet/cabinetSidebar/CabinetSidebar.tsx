import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { UserInfoWithAvatar } from '@src/components/elements/userInfoWithAvatar/UserInfoWithAvatar'
import { ActionsMenu } from '@src/components/elements/actionsMenu/ActionsMenu'


// styles
import { useStyles } from './useStyles'

export const CabinetSidebar = (props) => {
    const { t } = props

    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid item xs={12} className='user-menu-wrapper'>
                <UserInfoWithAvatar />
                <div className="menu-item-subscribe">
                    <div>
                        <div><Typography variant="subtitle1" color="initial">13</Typography></div>
                        <div><Typography variant="subtitle1">{t('cabinet:reviews')}</Typography></div>
                    </div>
                    <div>
                        <div><Typography variant="subtitle1" color="initial">2</Typography></div>
                        <div><Typography variant="subtitle1">{t('cabinet:subscribers')}</Typography></div>
                    </div>
                    <div>
                        <div><Typography variant="subtitle1" color="initial">9</Typography></div>
                        <div><Typography variant="subtitle1">{t('cabinet:subscriptions')}</Typography></div>
                    </div>
                </div>
                <ActionsMenu {...props}/>
            </Grid>
        </div>
    )
}
