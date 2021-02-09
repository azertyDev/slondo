import React from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {CustomInput} from './useStyles'


const FromToDropdown = ({title, parentCallback, name, data, disabled}) => {

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
                    defaultValue=""
                    disabled={disabled}
                >
                    {data.map((item) => (
                        <MenuItem value={item.id}>{item.name}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl fullWidth>
                <div>{title}</div>
                <Select
                    name={name}
                    onChange={onTrigger}
                    input={<CustomInput />}
                    defaultValue=""
                    disabled={disabled}
                >
                    {data.map((item) => (
                        <MenuItem value={item.id}>{item.name}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    )
}

export default FromToDropdown
