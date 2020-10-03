import React, { useState } from 'react'
import { FormControl, Grid, MenuItem, Select } from '@material-ui/core'
import { useStyle } from './useStyle'

export const AdvertisementSelect = (props) => {
    const classes = useStyle()
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
                        <MenuItem value={10}>Test Test TestTestTest</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </Grid>
    )
}
