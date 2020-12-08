import React from 'react'
import {Box, Typography} from '@material-ui/core'
import CustomRating from '@material-ui/lab/Rating'

// styles
import {useStyles} from './useStyles'

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

export const Rating = () => {
    const [value, setValue] = React.useState(3.5)
    const [hover, setHover] = React.useState(-1)

    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div>
                <CustomRating
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
                    <Box><Typography variant="subtitle1">{labels[hover !== -1 ? hover : value]}</Typography></Box>
                )}
            </div>
            <div>
                <Typography variant="subtitle1">(200 оценок)</Typography>

            </div>
        </div>
    )
}
