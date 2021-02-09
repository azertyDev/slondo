import React, {useState} from 'react'
import {CustomInput} from './useStyles'
import {FormControl} from "@root/node_modules/@material-ui/core";


const FromTo = () => {
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')

    return (
        <div style={{display: 'flex'}}>
            <FormControl fullWidth style={{marginRight: 7}}>
                <div>От</div>
                <CustomInput value={from} onChange={(event) => setFrom(event.target.value)}/>
            </FormControl>
            <FormControl>
                <div>До</div>
                <CustomInput value={to} onChange={(event) => setTo(event.target.value)}/>
            </FormControl>
        </div>
    )
}

export default FromTo
