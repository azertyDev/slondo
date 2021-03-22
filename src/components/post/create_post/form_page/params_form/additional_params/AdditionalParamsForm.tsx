import React, {FC} from "react";
import {WithT} from "i18next";
import {Typography} from "@material-ui/core";
import {FlatIcon} from "@src/components/elements/icons";
import {CustomAccordion} from "@src/components/post/create_post/form_page/components/accordion/CustomAccordion";
import {CustomFormikField} from "@src/components/elements/custom_formik_field/CustomFormikField";
import {Apartments} from "./apartments_form/Apartments";
import {HousesCottages} from "./houses_cottages_form/HousesCottages";
import {useStyles} from './useStyles';


type RegularFormPropsType = {
    type,
    filters,
    subCategory,
    formik,
    isPreview: boolean,
    currentFormIndex: number,
    handleFormOpen: (k) => () => void,
    handleInput: (e) => void,
    handleCheckbox: (e) => void,
    handleSelect: (key: string, value) => void,
} & WithT;

export const AdditionalParamsForm: FC<RegularFormPropsType> = (props) => {
    const {
        t,
        type,
        filters,
        formik,
        isPreview,
        subCategory,
        currentFormIndex,
        handleInput,
        handleFormOpen,
        handleCheckbox,
        handleSelect
    } = props;

    const formIndex = 4;

    const {
        values,
        errors,
        touched
    } = formik;


    const formBySubCategory = () => {
        switch (subCategory.name) {
            case 'apartments':
                return <Apartments
                    t={t}
                    type={type}
                    formik={formik}
                    filters={filters}
                    isPreview={isPreview}
                    handleSelect={handleSelect}
                    handleCheckbox={handleCheckbox}
                />
            default:
                return <HousesCottages
                    t={t}
                    type={type}
                    formik={formik}
                    filters={filters}
                    isPreview={isPreview}
                    handleSelect={handleSelect}
                    handleCheckbox={handleCheckbox}
                />
        }
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CustomAccordion
                icon={<FlatIcon/>}
                isPreview={isPreview}
                open={currentFormIndex === formIndex}
                isEditable={currentFormIndex < formIndex}
                handleEdit={handleFormOpen(formIndex)}
                nextButtonTxt={t('parameters')}
                title={t(`categories:${subCategory.name}`)}
            >
                <div className='title-wrapper'>
                    {isPreview
                        ? <Typography variant="subtitle1">
                            <strong>
                                {t('title')}:&nbsp;
                            </strong>
                            {values.title}
                        </Typography>
                        : <CustomFormikField
                            t={t}
                            name='title'
                            errors={errors}
                            touched={touched}
                            value={values.title}
                            onChange={handleInput}
                            style={{width: '50%'}}
                            placeholder={t('exampleTitle')}
                            className={errors.title && touched.title ? 'error-border' : ''}
                        />}
                </div>
                {formBySubCategory()}
            </CustomAccordion>
        </div>
    );
};