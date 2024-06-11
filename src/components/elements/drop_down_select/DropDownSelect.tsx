import {FC} from 'react';
import {getTime, isRequired} from '@src/helpers';
import {useTranslation} from 'next-i18next';
import {noTranslatableFields} from "@src/common_data/fields_keys";
import {Checkbox, FormControl, MenuItem, Select, Typography} from '@material-ui/core';
import {useStyles} from './useStyles';

type CustomSelectPropsType = {
    isRequire?: boolean,
    disabled?: boolean,
    transKey?: string,
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
        isRequire = false,
        disabled,
        name,
        transKey,
        multiple,
        disableRequire,
        labelTxt,
        items = [],
        onBlur,
        values,
        errorMsg,
        handleSelect
    } = props;

    const {t} = useTranslation('filters');
    const isCurrency = name === 'currency';
    const isDuration = name === 'duration';
    const optionKey = isDuration ? 'hours' : 'name';
    const noTranslatable = noTranslatableFields.some(f => f === name);

    const onChange = ({target}) => {
        const {name, value} = target;

        if (multiple) {
            handleSelect(name, value);
        } else {
            const selectedItem = items.find(item => item.id === +value) || null;
            handleSelect(name, selectedItem);
        }
    };

    const selectedHandle = (selected: any) => {
        let value = t('noSelect');

        if (items.length !== 0 && multiple) {
            value = selected.map(item => {
                const valName = items.find(v => v.id === item)?.name;
                return t(noTranslatable ? valName : `${transKey}${valName}.name`);
            }).join(', ');
        } else if (selected) {
            const selectedItem = items.find(item => item.id === +selected);
            if (selectedItem !== undefined) value = selectedItem[optionKey];
        }

        return !selected || multiple || noTranslatable
            ? isDuration && typeof value !== 'string'
                ? getTime(+value * 3600).days : value
            : isCurrency
                ? t(`common:${value}`) : t(`${transKey}${value}.name`);
    };

    const classes = useStyles();
    return (
        <FormControl className={classes.root}>
            <label htmlFor={name}>
                <Typography variant='subtitle1' gutterBottom>
                    {labelTxt}
                    {((!isCurrency && !disableRequire && isRequired(name)) || isRequire)
                    && <span className='error-text'>*&nbsp;</span>}
                </Typography>
            </label>
            <Select
                name={name}
                labelId={name}
                variant='outlined'
                onBlur={onBlur}
                multiple={multiple}
                onChange={onChange}
                renderValue={selectedHandle}
                disabled={!items.length || disabled}
                className={'select-wrapper' + `${errorMsg ? ' error-border' : ''}`}
                value={multiple ? values[name]?.map(v => v?.id ?? v) || [] : values[name]?.id ?? 0}
            >
                {!multiple && !isCurrency && (
                    <MenuItem value={0}>
                        {t('filters:noSelect')}
                    </MenuItem>
                )}
                {items.map((item, i) => {
                    const isSelected = multiple && !!values[name]?.some(v => v === item.id);
                    
                    return (
                        <MenuItem
                            key={i}
                            value={item.id}
                        >
                            {multiple && (
                                <Checkbox
                                    size="small"
                                    checked={isSelected}
                                    style={{padding: 0, marginRight: 5}}
                                />
                            )}
                            {t(transKey && !noTranslatable
                                ? `${transKey}${item[optionKey]}.name`
                                : isCurrency
                                    ? t(`common:${item[optionKey]}`)
                                    : isDuration ? `${getTime(item[optionKey] * 3600).days}` : item[optionKey])}
                        </MenuItem>
                    );
                })}
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