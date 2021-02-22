import React, {useState, useEffect} from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {CustomInput} from './useStyles'


const FromToDropdown = ({title, parentCallback, data, disabled}) => {
    const [years, setYears] = useState({
        from: null,
        to: null
    })

    useEffect(() => {
        parentCallback("year_range", years);
    }, [years])
    return (
        <div>
            <div>{title}</div>
            <div style={{display: "flex"}}>
                <FormControl fullWidth>
                    <Select
                        name="from"
                        onChange={(event) => setYears(
                            {...years, [event.target.name]: event.target.value}
                            )}
                        input={<CustomInput />}
                        defaultValue=""
                        disabled={disabled}
                        placeholder="От"
                    >
                        {data?.map((item) => (
                            <MenuItem value={item.id}>{item.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                &nbsp;
                <FormControl fullWidth>
                    <Select
                        name="to"
                        onChange={(event) => setYears(
                            {...years, [event.target.name]: event.target.value}
                        )}
                        input={<CustomInput />}
                        defaultValue=""
                        disabled={disabled}
                        placeholder="До"
                    >
                        {data?.map((item) => (
                            <MenuItem value={item.id}>{item.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
        </div>
    )
}

export default FromToDropdown
