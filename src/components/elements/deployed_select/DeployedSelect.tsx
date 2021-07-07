import {FC} from 'react';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {FormControl, Grid, Typography} from '@material-ui/core';
import {isRequired} from '@src/helpers';
import {useTranslation} from 'react-i18next';
import {useStyles} from './useStyles';


type SelectOptionsPropsType = {
    name: string,
    categoryName: string,
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
        categoryName,
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
                    {t(`${name}`)}
                    {!disableRequire && isRequired(name) && <span className='error-text'>*&nbsp;</span>}
                </Typography>
            </label>
            <Grid container className='options' xs={12}>
                {options.map(item =>
                    <Grid item xs={6}>
                        <CustomButton
                            key={item.id}
                            onClick={handleClick(item)}
                            className={values[name]?.id === item.id ? 'selected' : ''}
                        >
                            <Typography variant='subtitle1'>
                                {t(`${categoryName}.${item.name}.name`)}
                            </Typography>
                        </CustomButton>
                    </Grid>
                )}
            </Grid>
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