import React from 'react'
import {Logo} from '../../elements/icons'

import {useStyles} from './useStyle'

export const LogoComponent = ({className}) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <a href="#">
                <img src={Logo} alt="Slondo logo" className={className}/>
            </a>
        </div>
    )
}
