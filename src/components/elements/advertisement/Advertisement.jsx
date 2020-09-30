import React from 'react'
import {useStyles} from './useStyle'

export const Advertisement = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.root} styles={{width: `${props.width}`, height: `${props.height}`}}></div>
    )
}
