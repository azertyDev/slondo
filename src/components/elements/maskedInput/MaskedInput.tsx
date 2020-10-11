import React from 'react'
import MaskedInput from 'react-text-mask'
import { TextField, FormControl } from '@material-ui/core'

// styles
import { useStyles } from './useStyles'

function TextMaskCustom(props) {
    const { inputRef, ...other } = props

    return (
        <MaskedInput
            {...other}
            ref={(ref) => {
                inputRef(ref ? ref.inputElement : null)
            }}
            mask={[/[1-9]/]}
            // placeholderChar={'+(998) ___ __ __'}
            showMask
        />
    )
}

export const FormattedInput = (props) => {
    const classes = useStyles()
    const [values, setValues] = React.useState({
        textmask: '',
    })

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    }

    return (
        <div className={classes.root}>
            <FormControl fullWidth>
                <TextField
                    variant="outlined"
                    value={values.textmask}
                    onChange={handleChange}
                    name="textmask"
                    id="formatted-text-mask-input"
                    inputComponent={TextMaskCustom}
                />
            </FormControl>
        </div>
    )
}
