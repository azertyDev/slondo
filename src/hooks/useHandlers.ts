import {Dispatch, SetStateAction} from 'react';
import {booleanFields, fractionalFields, singleFields, stringFields} from '@src/common_data/fields_keys';
import {numberRegEx} from '@src/common_data/reg_exs';
import {isRequired} from '@src/helpers';

export const useHandlers = (values: any, setValues: Dispatch<SetStateAction<any>>) => {
    return {
        handleNumericInput: ({target: {name, value}}) => {
            const isFractionalField = fractionalFields.some((n => n === name));
            if (RegExp(numberRegEx).test(value)) {
                if ((!isFractionalField) || (isFractionalField && value.length < 4)) {
                    if (isFractionalField && value.length === 2 && value[1] !== '.') {
                        value = value.replace(/(?<=^.{1})./, `.${value[1]}`);
                    }
                    setValues({...values, [name]: value});
                }
            }
        },
        handleSwitch: ({target}, checked) => {
            setValues({...values, [target.name]: checked});
        },
        handleInput: ({target: {name, value}}) => {
            setValues({...values, [name]: value});
        },
        handleSelect: (name, value) => {
            setValues({...values, [name]: value});
        },
        handleCheckbox: ({target}) => {
            setValues({...values, [target.name]: target.checked});
        },
        handleOptionCheckbox: (name, item) => {
            if (values[name]) {
                const isExst = values[name].some(({id}) => id === item.id);
                if (isExst) {
                    values[name].forEach(({id}, i) => id === item.id && values[name].splice(i, 1));
                } else {
                    values[name].push(item);
                }
            } else {
                values[name] = [item];
            }
            setValues({...values});
        },
        setValsByParams: (urlParams, filters) => {
            const vals: any = {};

            Object.keys(urlParams).forEach(k => {
                const isSingleField = singleFields.some(f => f === k);
                const isStringField = stringFields.some(f => f === k);
                const isBooleanField = booleanFields.some(f => f === k);

                if (filters[k]) {
                    if (isSingleField) {
                        vals[k] = filters[k].find(v => v.id === +urlParams[k]);
                    } else {
                        vals[k] = filters[k].filter(v => urlParams[k].split(',').some(p => +p === v.id));
                    }
                } else if ((isStringField && values[k] === '') || isBooleanField && values[k] === '') {
                    vals[k] = isBooleanField || urlParams[k];
                }
            });

            if (urlParams.model && vals?.manufacturer?.models) {
                vals.model = vals.manufacturer.models.find(m => m.id === +urlParams.model);
            }

            setValues({...values, ...vals});
        },
        setRequireVals: (filters) => {
            const reqVals = {};

            Object.keys(filters).forEach(k => {
                if (isRequired(k) && !values[k]) reqVals[k] = null;
            });
            setValues({...values, ...reqVals});
        }
    };
};