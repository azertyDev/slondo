import React, {useState, useEffect} from 'react'
import {CustomInput} from './useStyles'

const FromTo = ({disabled, parentCallback, name, title}) => {
    const [price, setPrice] = useState({
        from: null,
        to: null
    })
    useEffect(() => {
            parentCallback(name, price);
    }, [price])
    return (
        <div>
            <div>{title}</div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                    <CustomInput
                        name="from"
                        placeholder="От"
                        onChange={(event) => setPrice({...price, [event.target.name]: event.target.value})}
                        disabled={disabled}
                    />
                    &nbsp;
                    <CustomInput
                        name="to"
                        placeholder="До"
                        onChange={(event) => setPrice({...price, [event.target.name]: event.target.value})}
                        disabled={disabled}
                    />
            </div>
        </div>
    )
}

export default FromTo
