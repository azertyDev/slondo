import React, {FC} from 'react';
import {FormikProvider} from "formik";
import {useSelector} from "react-redux";
import {AncmntForm} from './AncmntForm';
import {RootState} from "@src/redux/rootReducer";


export const autoSelectKeys = ['condition', 'area'];
export const textFieldKeys = ['area'];

const numberRegEx = /^[0-9]*$/;

export const AncmntFormContainer: FC<any> = (props) => {
    const {locations} = useSelector((store: RootState) => store);

    const {
        values,
        setValues,
        errors,
        touched,
        setTouched,
        handleBlur,
        handleSubmit,
    } = props.formik;

    let {adParams} = values;

    const handleCheckboxChange = (valName) => ({target}) => {
        const isAuctionField = ['auto_renewal', 'display_phone', 'offer_the_price']
            .some(fieldName => fieldName === valName);

        if (isAuctionField) {
            setValues({
                ...values,
                auction: {
                    ...values.auction,
                    [valName]: target.checked
                }
            });
        } else if (valName === 'price_by_now') {
            setValues({
                ...values,
                auction: {
                    ...values.auction,
                    price_by_now: {
                        isActive: target.checked,
                        value: values.auction.price_by_now.value
                    }
                }
            });
        } else {
            setValues({...values, [valName]: target.checked});
        }
    };

    const handleParamsCheckbox = (valueName, value) => () => {
        if (adParams[valueName]) {
            if (adParams[valueName].some(val => val.id === value.id)) {
                adParams[valueName].map((val, index) => {
                    if (val.id === value.id) {
                        adParams[valueName].splice(index, 1);
                    }
                });
            } else {
                adParams = {
                    ...adParams,
                    [valueName]: [...adParams[valueName], value]
                };
            }
        } else {
            adParams = {...adParams, [valueName]: [value]};
        }
        setValues({...values, adParams});
    };

    const handleMenuItem = (valueName) => (newValue, setAnchor) => () => {
        setAnchor(null);

        if (valueName === 'currency') {
            setValues({
                ...values,
                [valueName]: newValue
            });
        } else if (valueName === 'duration') {
            setValues({
                ...values,
                auction: {
                    ...values.auction,
                    [valueName]: newValue
                }
            });
        } else {
            // Reset sub props in values
            Object.keys(newValue).map(key => {
                if (adParams[key]) {
                    adParams = {
                        ...adParams,
                        [key]: {id: null, name: 'Не выбрано'}
                    };
                }
                setValues({
                    ...values,
                    adParams: {
                        ...adParams,
                        [valueName]: newValue
                    }
                });
            });
        }
    };

    const handleListItem = (valueName, value) => () => {
        if (adParams[valueName] && adParams[valueName].id === value.id) {
            adParams = {
                ...adParams,
                [valueName]: {id: null, name: 'Не выбрано'}
            };
        } else {
            adParams = {
                ...adParams,
                [valueName]: value
            };
        }
        setValues({...values, adParams});
    };

    const handleInput = (valueName) => ({target}) => {
        if (numberRegEx.test(target.value)) {
            if (valueName === 'price') {
                setValues({...values, [valueName]: target.value})
            } else {
                adParams = {...adParams, [valueName]: target.value};
                setValues({...values, adParams})
            }
        }
    };

    const handleAuctionInput = (valName) => ({target}) => {
        if (numberRegEx.test(target.value)) {
            if (valName === 'price_by_now') {
                setValues({
                    ...values,
                    auction: {
                        ...values.auction,
                        [valName]: {
                            isActive: true,
                            value: target.value
                        }
                    }
                })
            } else {
                setValues({
                    ...values,
                    auction: {
                        ...values.auction,
                        [valName]: target.value
                    }
                })
            }
        }
    };

    const handleSwitch = (_, value) => {
        setValues({
            ...values,
            avalTime: {
                ...values.avalTime,
                isActive: value
            }
        });
    };

    const handleWeekDay = (value) => () => {
        if (values.avalTime.week.some(val => val.id === value.id)) {
            values.avalTime.week.map((val, index) => {
                if (val.id === value.id) {
                    values.avalTime.week.splice(index, 1)
                }
            });
            setValues({...values});
        } else {
            setValues({
                ...values,
                avalTime: {
                    ...values.avalTime,
                    week: [
                        ...values.avalTime.week,
                        value
                    ]
                }
            });
        }
    };

    const handleTime = ({target}) => {
        let {value} = target;
        const regEx = /^([0-1]?[0-9]|2[0-3])?:([0-5][0-9]?)?$/;
        const isValid = regEx.test(value);

        if (isValid) {
            value = value.replace(/^:(.+)/, m => `00${m}`).replace(/(.+):$/, m => `${m}00`);
            setValues({
                ...values,
                avalTime: {
                    ...values.avalTime,
                    [target.name]: value
                }
            });
        }
    };

    return (
        <FormikProvider value={props.formik}>
            <form onSubmit={handleSubmit}>
                <AncmntForm
                    {...props}
                    errors={errors}
                    touched={touched}
                    setTouched={setTouched}
                    values={values}
                    setValues={setValues}
                    locations={locations}
                    handleBlur={handleBlur}
                    handleTime={handleTime}
                    handleInput={handleInput}
                    handleSwitch={handleSwitch}
                    handleWeekDay={handleWeekDay}
                    handleListItem={handleListItem}
                    handleMenuItem={handleMenuItem}
                    handleAuctionInput={handleAuctionInput}
                    handleParamsCheckbox={handleParamsCheckbox}
                    handleCheckboxChange={handleCheckboxChange}
                />
            </form>
        </FormikProvider>
    )
}