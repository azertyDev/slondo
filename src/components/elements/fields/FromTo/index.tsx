import React, {useState} from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {CustomInput} from './useStyles'


const FromTo = () => {

    return (
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <CustomInput />
            <CustomInput />
        </div>
    )
}

export default FromTo
