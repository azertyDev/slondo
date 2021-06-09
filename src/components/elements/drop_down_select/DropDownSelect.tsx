import {FC} from 'react';
import {WithT} from 'i18next';
import {Checkbox, FormControl, InputLabel, MenuItem, Select, Typography} from '@material-ui/core';
import {isRequired} from '@src/helpers';
import {useStyles} from './useStyles';


type CustomSelectPropsType = {
    name: string;
    labelTxt?: string,
    multiple?: boolean,
    values,
    onBlur?,
    items: any[];
    handleSelect: (k, v) => void,
    disableRequire?: boolean,
    errorMsg?: string
} & WithT;

export const DropDownSelect: FC<CustomSelectPropsType> = (props) => {
    const {
        t,
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
            if (selectedItem !== null) value = t(`filters:${selectedItem[optionKey]}`);
        }

        return value;
    };

    const classes = useStyles();
    return (
        <FormControl className={classes.root}>
            <InputLabel>
                {multiple
                 ? t(`filters:${labelTxt ?? name}`)
                 : !isCurrency && (
                    <>
                        {t(`filters:${labelTxt ?? name}`)}
                        {!disableRequire && isRequired(name) && <span className='error-text'>*&nbsp;</span>}
                    </>
                )}
            </InputLabel>
            <Select
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
                    <MenuItem value={0}>
                        {t('filters:noSelect')}
                    </MenuItem>
                )}
                {items.map(item => (
                    <MenuItem
                        key={item.id}
                        value={multiple ? item : item.id}
                    >
                        {multiple && <Checkbox checked={!!values[name]?.some(el => el.id === item.id)}/>}
                        {t(`filters:${item[optionKey]}`)}
                    </MenuItem>
                ))}
            </Select>
            <Typography variant="subtitle1">
                {errorMsg && (
                    <span className='error-text'>
                        {errorMsg}
                    </span>
                )}
            </Typography>
        </FormControl>
    );
};