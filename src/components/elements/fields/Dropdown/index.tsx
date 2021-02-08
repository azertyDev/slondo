import React, {useState} from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {CustomInput} from './useStyles'


const Dropdown = ({title}) => {
    const [age, setAge] = useState(10)

    const handleChange = (event) => {
        setAge(event.target.value)
    }

    return (
        <div>
            <FormControl fullWidth>
                <InputLabel id="demo-customized-select-label">{title}</InputLabel>
                <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    value={age}
                    onChange={handleChange}
                    input={<CustomInput />}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default Dropdown
