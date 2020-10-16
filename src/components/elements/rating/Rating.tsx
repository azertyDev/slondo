import React from 'react'
import Box from '@material-ui/core/Box'

// styles
import { StyledRating, useStyles } from './useStyles'

const labels = {
    0.5: '0.5',
    1: '1.0',
    1.5: '1.5',
    2: '2.0',
    2.5: '2.5',
    3: '3.0',
    3.5: '3.5',
    4: '4.0',
    4.5: '4.5',
    5: '5.0',
}

export const RatingComponent = () => {
    const classes = useStyles()
    const [value, setValue] = React.useState(3.5)
    const [hover, setHover] = React.useState(-1)

    return (
        <div className={classes.root}>
            <StyledRating
                name="hover-feedback"
                readOnly
                value={value}
                precision={0.5}
                onChange={(event, newValue) => {
                    setValue(newValue)
                }}
                onChangeActive={(event, newHover) => {
                    setHover(newHover)
                }}
            />
            {value !== null && (
                <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
            )}
        </div>
    )
}
