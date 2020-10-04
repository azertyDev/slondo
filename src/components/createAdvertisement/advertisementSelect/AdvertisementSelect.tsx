import React, { useState } from 'react'
import { FormControl, Grid, MenuItem, Select } from '@material-ui/core'
import { useStyles } from './useStyles'

export const AdvertisementSelect = (props) => {
    const classes = useStyles()
    const [value, setValue] = useState('')

    const handleChange = (event) => {
        setValue(event.target.value)
    }
    return (
        <Grid item xs={12} sm={6} md={3} lg={3}>
            <div className={classes.root}>
                <FormControl fullWidth variant="outlined">
                    <Select value={value} onChange={handleChange}>
                        <MenuItem value="" disabled>
                            <em>Выберите...</em>
                        </MenuItem>
                        <MenuItem value={0}>
                            Электроника-Телефоны и планшеты
                        </MenuItem>
                        <MenuItem value={1}>
                            Test Test TestTestTestasdasdadasd
                        </MenuItem>
                        <MenuItem value={2}>Twenty</MenuItem>
                        <MenuItem value={3}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </Grid>
    )
}
