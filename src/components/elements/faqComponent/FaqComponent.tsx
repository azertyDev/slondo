import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import { Link } from '@root/i18n'

// icons
import { SignIcon } from '@src/components/elements/icons/SignIcon'
import { GavelIcon } from '@src/components/elements/icons/GavelIcon'
import { NotesIcon } from '@src/components/elements/icons/NotesIcon'
import { ShoppingIcon } from '@src/components/elements/icons/ShoppingIcon'

// styles
import { useStyles } from './useStyles'

export const FaqComponent = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Typography variant='subtitle1'>Часто задаваемые вопросы:</Typography>
            <Paper elevation={0}>
                <Link href='#'>
                    <a>
                        <SignIcon />
                        <Typography variant="subtitle1" color="initial">
                            Как создать аккаунт?
                        </Typography>
                    </a>
                </Link>
                <Link href='#'>
                    <a>
                        <GavelIcon />
                        <Typography variant="subtitle1" color="initial">
                            Как создать лот?
                        </Typography>
                    </a>
                </Link>
                <Link href='#'>
                    <a>
                        <NotesIcon />
                        <Typography variant="subtitle1" color="initial">
                            Как создать объявление?
                        </Typography>
                    </a>
                </Link>
                <Link href='#'>
                    <a>
                        <ShoppingIcon />
                        <Typography variant="subtitle1" color="initial">
                            Как создать магазин?
                        </Typography>
                    </a>
                </Link>
            </Paper>
        </div>
    )
}
