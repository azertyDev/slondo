import {FC, useState} from "react";
import {WithT} from "i18next";
import {TextField, Typography} from "@material-ui/core";
import {numberRegEx} from "@src/common_data/reg_exs";
import {isRequired} from "@src/helpers";
import {useStyles} from './useStyles';


type FloorsPropsType = {
    name: string,
    count: number,
    errors,
    touched,
    values,
    setValues,
} & WithT;

export const NumberSelect: FC<FloorsPropsType> = (props) => {
    const {
        t,
        name,
        count,
        errors,
        touched,
        values,
        setValues
    } = props;

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
        <div className={classes.root}>
            <Typography variant="subtitle1">
                <strong>
                    {t(`filters:${name}`)}
                    {isRequired(name) && <span className='error-text'>*&nbsp;</span>}
                </strong>
            </Typography>
            <div className='numbers-wrapper'>
                {Array.from({length: count}).map((_, i) => {
                    const number = (i + 1).toString();
                    return (
                        <Typography
                            variant='subtitle1'
                            key={i}
                            onClick={handleNumSelect(name, number)}
                            className={`numbers-item ${!isOther && values?.[name] === number ? 'selected' : ''}`}
                        >
                            {++i}
                        </Typography>
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
                         {t('filters:other')}
                     </Typography>}
                </div>
            </div>
            <Typography variant="subtitle1">
                {errors?.[name] && touched[name] && (
                    <span className='error-text'>
                        {t(`errors:${errors[name] as string}`)}
                    </span>
                )}
            </Typography>
        </div>
    );
};