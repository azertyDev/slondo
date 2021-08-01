import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {Checkbox, FormControl, MenuItem, Select, Typography} from '@material-ui/core';
import {isRequired} from '@src/helpers';
import {noTranslatableFields} from "@src/common_data/fields_keys";
import {useStyles} from './useStyles';

type CustomSelectPropsType = {
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
    const optionKey = name === 'duration' ? 'hours' : 'name';
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
                return t(`${transKey}${valName}.name`);
            }).join(', ');
        } else if (selected) {
            const selectedItem = items.find(item => item.id === +selected) || null;
            if (selectedItem !== null) value = selectedItem[optionKey];
        }

        return !selected || multiple || noTranslatable
            ? value : isCurrency
                ? t(`common:${value}`) : t(`${transKey}${value}.name`);
    };

    const classes = useStyles();
    return (
        <FormControl className={classes.root}>
            <label htmlFor={name}>
                <Typography variant='subtitle1' gutterBottom>
                    {labelTxt}
                    {!isCurrency && !disableRequire && isRequired(name) && <span className='error-text'>*&nbsp;</span>}
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
                value={multiple ? values[name]?.map(v => v?.id ?? v) || [] : values[name]?.id ?? 0}
                className={'select-wrapper' + `${errorMsg ? ' error-border' : ''}`}
            >
                {!multiple && !isCurrency && (
                    <MenuItem value={0}>
                        {t('filters:noSelect')}
                    </MenuItem>
                )}
                {items.map(item => {
                    const isSelected = multiple && !!values[name]?.some(v => v === item.id);

                    return (
                        <MenuItem
                            key={item.id}
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
                                : isCurrency ? t(`common:${item[optionKey]}`) : item[optionKey])}
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