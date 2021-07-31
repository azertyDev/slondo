import {FC, useState} from "react";
import {WithT} from 'i18next';
import {Box, TextField, Typography} from '@material-ui/core';
import {numberRegEx} from '@src/common_data/reg_exs';
import {isRequired} from "@src/helpers";
import {useStyles} from './useStyles';
import {useTranslation} from "next-i18next";


type FloorsPropsType = {
    name: string,
    count: number,
    transKey: string,
    errors,
    touched,
    values,
    setValues,
};

export const NumberSelect: FC<FloorsPropsType> = (props) => {
    const {
        name,
        count,
        errors,
        touched,
        values,
        setValues,
        transKey
    } = props;

    const {t} = useTranslation('filters');
    const [isOther, setIsOther] = useState(false);

    const handleOther = () => {
        setIsOther(true);
        setValues({...values, [name]: null});
    };

    const handleNumSelect = (name, number) => () => {
        isOther && setIsOther(false);
        setValues({...values, [name]: number});
    };

    const handleInput = ({target: {name, value}}) => {
        if (numberRegEx.test(value)) {
            setValues({...values, [name]: value});
        }
    };

    const classes = useStyles();
    return (
        <Box
            width={1}
            display='flex'
            flexDirection='column'
            justifyContent='center'
            className={classes.root}
        >
            <Typography variant="subtitle1" gutterBottom>
                <strong>
                    {t(`${transKey}${name}.name`)}
                    {isRequired(name) && <span className='error-text'>*&nbsp;</span>}
                </strong>
            </Typography>
            <div className='numbers-wrapper'>
                {Array.from({length: count}).map((_, i) => {
                    const number = (i + 1).toString();
                    return (
                        <Box
                            key={i}
                            display='flex'
                            component='span'
                            alignItems='center'
                            justifyContent='center'
                            onClick={handleNumSelect(name, number)}
                            className={`numbers-item ${!isOther && values?.[name] === number ? 'selected' : ''}`}
                        >
                            <Typography component='p' variant='subtitle1'>
                                {++i}
                            </Typography>
                        </Box>
                    );
                })}
                <div className='other-wrapper'>
                    {isOther
                        ? <TextField
                            name={name}
                            variant='outlined'
                            onChange={handleInput}
                            value={values[name] ?? ''}
                        />
                        : <Typography
                            variant='subtitle1'
                            onClick={handleOther}
                        >
                            {t(`${transKey}other.name`)}
                        </Typography>}
                </div>
            </div>
            {errors?.[name] && touched[name] && (
                <Typography variant="subtitle1">
                    <span className='error-text'>
                        {t(`errors:${errors[name] as string}`)}
                    </span>
                </Typography>
            )}
        </Box>
    );
};