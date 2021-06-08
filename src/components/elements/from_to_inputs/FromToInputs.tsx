import {FC} from 'react';
import {useStyles} from './useStyles';
import {FormControl, InputLabel, TextField} from '@material-ui/core';

type FromToInputsPropsType = {
    labelTxt: string,
    disabled?: boolean,
    handleInput: (e) => void,
    firstInputProps: {
        name: string,
        value: string,
        placeholder: string
    },
    secondInputProps: {
        name: string,
        value: string,
        placeholder: string
    },
};

export const FromToInputs: FC<FromToInputsPropsType> = (props) => {
    const {
        labelTxt,
        disabled,
        handleInput,
        firstInputProps,
        secondInputProps
    } = props;

    const classes = useStyles();
    return (
        <FormControl className={classes.root}>
            <InputLabel>
                {labelTxt}
            </InputLabel>
            <div className='from-to-wrapper'>
                <TextField
                    size='small'
                    variant='outlined'
                    disabled={disabled}
                    onChange={handleInput}
                    name={firstInputProps.name}
                    value={firstInputProps.value}
                    placeholder={firstInputProps.placeholder}
                />
                <TextField
                    size='small'
                    variant='outlined'
                    disabled={disabled}
                    onChange={handleInput}
                    name={secondInputProps.name}
                    value={secondInputProps.value}
                    placeholder={secondInputProps.placeholder}
                />
            </div>
        </FormControl>
    );
};
