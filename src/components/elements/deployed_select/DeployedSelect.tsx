import {FC} from 'react';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {Typography} from '@material-ui/core';
import {WithT} from 'i18next';
import {isRequired} from '@src/helpers';
import {useStyles} from './useStyles';


type SelectOptionsPropsType = {
    name: string,
    disableRequire?: boolean,
    values,
    errorMsg?: string,
    handleSelect: (n, v) => void,
    options: any[]
} & WithT;

export const DeployedSelect: FC<SelectOptionsPropsType> = (props) => {
    const {
        t,
        name,
        values,
        disableRequire,
        handleSelect,
        errorMsg,
        options = []
    } = props;

    const handleClick = (item) => () => {
        handleSelect(name, item);
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="subtitle1">
                <strong>
                    {t(`filters:${name}`)}
                    {!disableRequire && isRequired(name) && <span className='error-text'>*&nbsp;</span>}
                </strong>
            </Typography>
            <div className='options'>
                {options.map(item =>
                    <CustomButton
                        key={item.id}
                        onClick={handleClick(item)}
                        className={values[name]?.id === item.id ? 'selected' : ''}
                    >
                        {t(`filters:${item.name}`)}
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
        </div>
    );
};