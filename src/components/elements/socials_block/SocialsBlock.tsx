import React from 'react'
import { Typography } from '@material-ui/core'

// styles
import { useStyles } from './useStyles'
import { FacebookIcon } from '@src/components/elements/icons/social_icons/FacebookIcon'
import { InstagramIcon } from '@src/components/elements/icons/social_icons/InstagramIcon'
import { YoutubeIcon } from '@src/components/elements/icons/social_icons/YoutubeIcon'
import { TelegramIcon } from '@src/components/elements/icons/social_icons/TelegramIcon'
import { Link } from '@root/i18n'

export const SocialsBlock = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Typography variant="subtitle1" color="initial">
                Мы в социальных сетях:
            </Typography>
            <div>
                <Link href='#'>
                    <a>
                        <FacebookIcon />
                    </a>
                </Link>
                <Link href='#'>
                    <a>
                        <InstagramIcon />
                    </a>
                </Link>
                <Link href='#'>
                    <a>
                        <YoutubeIcon />
                    </a>
                </Link>
                <Link href='#'>
                    <a>
                        <TelegramIcon />
                    </a>
                </Link>
            </div>
        </div>
    )
}
