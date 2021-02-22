import React from 'react'
import {CustomInput} from './useStyles'

const TextField = ({disabled, parentCallback, name, title}) => {

    const handleChange = (event) => {
        parentCallback(name, event.target.value);
    }
    return (
        <div>
            <div>{title}</div>
            <CustomInput
                placeholder="Легковые автомобили"
                onChange={handleChange}
                disabled={disabled}
            />
        </div>
    )
}

export default TextField
