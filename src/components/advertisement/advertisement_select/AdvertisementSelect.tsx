import React, {useState} from 'react'
import {FormControl, MenuItem, Select} from '@material-ui/core'

// styles
import {useStyles} from './useStyles'

export const AdvertisementSelect = (props) => {
    const [value, setValue] = useState('')

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const classes = useStyles()
    return (
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
    )
}
