import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {Checkbox, FormControl, MenuItem, Select, Typography} from '@material-ui/core';
import {isRequired} from '@src/helpers';
import {useStyles} from './useStyles';


type CustomSelectPropsType = {
    ns?: string,
    name: string;
    labelTxt?: string,
    multiple?: boolean,
    values,
    onBlur?,
    items: any[];
    handleSelect: (k, v) => void,
    disableRequire?: boolean,
    errorMsg?: string
};

export const DropDownSelect: FC<CustomSelectPropsType> = (props) => {
    const {
        ns = 'filters',
        name,
        disableRequire,
        labelTxt,
        multiple,
        items = [],
        onBlur,
        values,
        errorMsg,
        handleSelect
    } = props;

    const {t} = useTranslation(ns);

    const isCurrency = name === 'currency';
    const optionKey = name === 'duration' ? 'hours' : 'name';

    const onChange = ({target}) => {
        const {name, value} = target;
        const selectedItem = items.find(item => item.id === +value) || null;
        multiple ? handleSelect(name, value) : handleSelect(name, selectedItem);
    };

    const selectedHandle = (selected: any) => {
        let value = t('filters:noSelect');

        if (multiple) {
            value = selected.map(item => item.name).join(', ');
        } else if (selected) {
            const selectedItem = items.find(item => item.id === +selected) || null;
            if (selectedItem !== null) value = t(`${selectedItem[optionKey]}`);
        }

        return value;
    };

    const classes = useStyles();
    return (
        <FormControl className={classes.root}>
            <label htmlFor={name}>
                <Typography variant='subtitle1' gutterBottom>
                    {multiple
                        ? t(`filters:${labelTxt ?? name}`)
                        : !isCurrency && (
                        <>
                            {t(`filters:${labelTxt ?? name}`)}
                            {!disableRequire && isRequired(name) && <span className='error-text'>*&nbsp;</span>}
                        </>
                    )}
                </Typography>
            </label>
            <Select
                labelId={name}
                variant='outlined'
                name={name}
                onBlur={onBlur}
                multiple={multiple}
                disabled={!items.length}
                onChange={onChange}
                renderValue={selectedHandle}
                className={'select-wrapper' + `${errorMsg ? ' error-border' : ''}`}
                value={multiple ? values[name] || [] : values[name]?.id ?? 0}
            >
                {!multiple && !isCurrency && (
                    <MenuItem
                        value={0}
                    >
                        {t('filters:noSelect')}
                    </MenuItem>
                )}
                {items.map(item => (
                    <MenuItem
                        key={item.id}
                        value={multiple ? item : item.id}
                    >
                        {multiple && <Checkbox
                            size="small"
                            checked={!!values[name]?.some(el => el.id === item.id)}
                            style={{padding: 0, marginRight: 5}}
                        />}
                        {t(`${item[optionKey]}`)}
                    </MenuItem>
                ))}
            </Select>
            {errorMsg && (
                <Typography variant="subtitle1" className='error-text'>
                    <span>
                        {errorMsg}
                    </span>
                </Typography>
            )}
        </FormControl>
    );
};