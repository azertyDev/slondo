import React from 'react'
import { Typography } from '@material-ui/core'
import { Link } from '@root/i18n'
// styles
import { useStyles } from './useStyles'

export const UserSocialInfo = (props) => {
    const classes = useStyles()
    return (
        <div className="menu-item-subscribe">
            <div>
                <div><Typography variant="subtitle1" color="initial">13</Typography></div>
                <div><Typography variant="subtitle1">{props.t('cabinet:reviews')}</Typography></div>
            </div>
            <div>
                <div><Typography variant="subtitle1" color="initial">2</Typography></div>
                <div>
                    <Link href='/cabinet/subscribers'>
                        <a>
                            <Typography variant="subtitle1">
                                {props.t('cabinet:subscribers')}
                            </Typography>
                        </a>
                    </Link>
                </div>
            </div>
            <div>
                <div><Typography variant="subtitle1" color="initial">9</Typography></div>
                <div><Typography variant="subtitle1">{props.t('cabinet:subscriptions')}</Typography></div>
            </div>
        </div>
    )
}
