import {Dispatch, SetStateAction} from 'react';
import {fractionalFields, numericFields} from '@src/common_data/form_fields';
import {numberRegEx} from '@src/common_data/reg_exs';

export const useHandlers = (values: any, setValues: Dispatch<SetStateAction<any>>) => {
    return {
        handleInput: ({target: {name, value}}) => {
            const isNumericField = numericFields.some((n => n === name));
            const isFractionalField = fractionalFields.some((n => n === name));

            if (isNumericField && RegExp(numberRegEx).test(value)) {
                if ((!isFractionalField) || (isFractionalField && value.length < 4)) {
                    if (isFractionalField && value.length === 2 && value[1] !== '.') {
                        value = value.replace(/(?<=^.{1})./, `.${value[1]}`);
                    }
                    setValues({...values, [name]: value});
                }
            }
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
        }
    };
};