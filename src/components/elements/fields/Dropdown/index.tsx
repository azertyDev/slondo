import React from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {CustomInput} from './useStyles'

export const Box = ({color}) => <div style={{height: 10, width: 10, borderRadius: 50, background: `${color}`, marginLeft: 20}}/>

const Dropdown = ({title, parentCallback, name, data, disabled, color = false}) => {

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
                    {data?.map((item) => (
                        <MenuItem value={item.id}>
                            {item.name}
                            {color && <Box color={item.hex_color_code}/>}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    )
}

export default Dropdown
