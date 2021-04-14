import React, {FC, useEffect} from "react";
import {WithT} from "i18next";
import {ParamsForm} from "./params/ParamsForm";
import {AdditionalParamsForm} from "./additional_params/AdditionalParamsForm";
import {isRequired, prepareDataForCreate} from "@src/helpers";
import {FormikProvider, useFormik} from "formik";
import {paramsFormSchema} from "@root/validation_schemas/createPostSchemas";
import {useStyles} from './useStyles';


type RegularFormPropsType = {
    filters,
    post,
    setPost,
    mark,
    type,
    subCategory,
    isPreview: boolean,
    isExtendSubCtgr: boolean,
    currentFormIndex: number,
    handleNextFormOpen: () => void,
    handleFormOpen: (k) => () => void,
} & WithT;

export const ParamsFormContainer: FC<RegularFormPropsType> = (props) => {
    const {
        filters,
        post,
        setPost,
        mark,
        type,
        subCategory,
        isExtendSubCtgr,
        currentFormIndex,
        handleNextFormOpen
    } = props;

    const onSubmit = (values) => {
        if (currentFormIndex === 3) {
            const preparedValues = prepareDataForCreate({...values});
            post.title = values.title;
            post[mark] = {
                ...post[mark],
                ...preparedValues,
                [`${mark}_id`]: subCategory.id
            };
            if (type) {
                post[mark].type_id = type.id ?? preparedValues.type_id;
            }
            setPost({...post});
        }
        handleNextFormOpen();
    };

    const formik = useFormik({
        onSubmit,
        initialValues: {title: ''},
        validationSchema: paramsFormSchema
    });

    const {
        values,
        setValues,
        handleSubmit
    } = formik;

    const handleInput = ({target: {name, value}}) => {
        setValues({...values, [name]: value});
    };

    const handleSelect = (key, value) => {
        setValues({...values, [key]: value});
    };

    const handleCheckbox = ({target}) => {
        setValues({...values, [target.name]: target.checked});
    };

    const handleOptionCheckbox = (name, item) => {
        const isExst = values[name].some(({id}) => id === item.id);

        if (isExst) {
            values[name].forEach(({id}, i) =>
                id === item.id && values[name].splice(i, 1));
        } else {
            values[name].push(item);
        }

        setValues({...values});
    };

    const setRequireVals = () => {
        const isApartments = subCategory.name === 'apartments';
        const isHousesCottages = subCategory.name === 'housesCottages';

        Object.keys(filters).forEach(k => {
            if (!values[k]) {
                if (isRequired(k)) {
                    if (k === 'area') {
                        values.area_id = filters[k][0].id || null;
                        if (!isHousesCottages) {
                            values.area = null;
                        }
                    } else {
                        values[k] = null;
                    }
                } else if (k === 'infrastructure' || k === 'amenities') {
                    values[k] = [];
                }
            }
        });

        if ((isApartments || isHousesCottages) && !values.number_of_floors && !values.rooms) {
            if (isApartments && !values.floor) {
                values.floor = null;
            }
            if (isHousesCottages && !values.land_area && !values.general_area) {
                values.land_area = null;
                values.general_area = null;
            }
            values.rooms = null;
            values.number_of_floors = null;
        }

        setValues({...values});
    };

    useEffect(() => {
        setRequireVals();
    }, [filters]);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <FormikProvider value={formik}>
                <form onSubmit={handleSubmit}>
                    {isExtendSubCtgr && (
                        <div className='acc-wrapper'>
                            <AdditionalParamsForm
                                {...props}
                                formik={formik}
                                handleInput={handleInput}
                                handleSelect={handleSelect}
                                handleCheckbox={handleCheckbox}
                            />
                        </div>
                    )}
                    <ParamsForm
                        {...props}
                        formik={formik}
                        handleInput={handleInput}
                        handleSelect={handleSelect}
                        handleOptionCheckbox={handleOptionCheckbox}
                    />
                </form>
            </FormikProvider>
        </div>
    );
};