import {FC} from 'react';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {FormControl, InputLabel, Typography} from '@material-ui/core';
import {isRequired} from '@src/helpers';
import {useTranslation} from 'react-i18next';
import {useStyles} from './useStyles';


type SelectOptionsPropsType = {
    name: string,
    disableRequire?: boolean,
    values,
    errorMsg?: string,
    handleSelect: (n, v) => void,
    options: any[]
};

export const DeployedSelect: FC<SelectOptionsPropsType> = (props) => {
    const {
        name,
        values,
        disableRequire,
        handleSelect,
        errorMsg,
        options = []
    } = props;

    const {t} = useTranslation('filters');

    const handleClick = (item) => () => {
        handleSelect(name, item);
    };

    const classes = useStyles();
    return (
        <FormControl className={classes.root}>
            <label>
                <Typography variant='subtitle1' gutterBottom>
                    {t(`filters:${name}`)}
                    {!disableRequire && isRequired(name) && <span className='error-text'>*&nbsp;</span>}
                </Typography>
            </label>
            <div className='options'>
                {options.map(item =>
                    <CustomButton
                        key={item.id}
                        onClick={handleClick(item)}
                        className={values[name]?.id === item.id ? 'selected' : ''}
                    >
                        <Typography variant='subtitle1'>
                            {t(`filters:${item.name}`)}
                        </Typography>
                    </CustomButton>
                )}
            </div>
            {errorMsg !== '' && (
                <Typography variant="subtitle1">
                        <span className='error-text'>
                        {errorMsg}
                    </span>
                </Typography>
            )}
        </FormControl>
    );
};