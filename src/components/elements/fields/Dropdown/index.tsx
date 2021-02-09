import React, {useState} from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {CustomInput} from './useStyles'


const Dropdown = ({title, parentCallback, name}) => {

    const onTrigger = (event) => {
        parentCallback(event.target.name, event.target.value);
    }
    return (
        <div>
            <FormControl fullWidth>
                <div>{title}</div>
                <Select
                    name={name}
                    onChange={onTrigger}
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
