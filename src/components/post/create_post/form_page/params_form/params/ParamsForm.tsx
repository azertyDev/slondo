import React, {FC} from "react";
import {WithT} from "i18next";
import {Typography} from "@material-ui/core";
import {FlatIcon, ParametersIcon} from "@src/components/elements/icons";
import {CustomAccordion} from "@src/components/post/create_post/form_page/components/accordion/CustomAccordion";
import {CustomFormikField} from "@src/components/elements/custom_formik_field/CustomFormikField";
import {LandParams} from "@src/components/post/create_post/form_page/params_form/params/land_params/LandParams";
import {ParkingLotsBoxes} from "@src/components/post/create_post/form_page/params_form/params/parking_lots_boxes_params/ParkingLotsBoxes";
import {CommercialPropertyParams} from "@src/components/post/create_post/form_page/params_form/params/commercial_property_params/CommercialPropertyParams";
import {RegularParams} from "@src/components/post/create_post/form_page/params_form/params/regular_params/RegularParams";
import {ApartmentsParams} from "@src/components/post/create_post/form_page/params_form/params/apartments_params/ApartmentsParams";
import {HousesCottagesParams} from "@src/components/post/create_post/form_page/params_form/params/houses_cotteges_params/HousesCottagesParams";
import {useStyles} from './useStyles';


type DefaultFormPropsType = {
    filters,
    mark,
    formik,
    isPreview: boolean,
    isExtendSubCtgr: boolean,
    currentFormIndex: number,
    type,
    subCategory,
    handleInput,
    handleFormOpen: (k) => () => void,
    handleSelect: (key: string, value) => void,
    handleOptionCheckbox,
} & WithT;

export const ParamsForm: FC<DefaultFormPropsType> = (props) => {
    const {
        t,
        mark,
        type,
        filters,
        formik,
        isPreview,
        isExtendSubCtgr,
        subCategory,
        currentFormIndex,
        handleInput,
        handleFormOpen,
        handleSelect,
        handleOptionCheckbox
    } = props;

    const formIndex = 3;

    const isEstate = mark === 'estate' && !isExtendSubCtgr;

    const icon = isEstate ? <FlatIcon/> : <ParametersIcon/>;
    const title = isEstate ? t(`categories:${subCategory.name}`) : t('parameters');

    const {
        values,
        errors,
        touched
    } = formik;

    const formBySubCategory = () => {
        switch (subCategory.name) {
            case 'apartments':
                return <ApartmentsParams
                    t={t}
                    formik={formik}
                    filters={filters}
                    isPreview={isPreview}
                    handleSelect={handleSelect}
                    handleOptionCheckbox={handleOptionCheckbox}
                />
            case 'housesCottages':
                return <HousesCottagesParams
                    t={t}
                    formik={formik}
                    filters={filters}
                    isPreview={isPreview}
                    handleSelect={handleSelect}
                    handleOptionCheckbox={handleOptionCheckbox}
                />
            case 'land':
                return <LandParams
                    t={t}
                    isPreview={isPreview}
                    type={type}
                    formik={formik}
                    filters={filters}
                    handleSelect={handleSelect}
                />
            case 'parkingLotsAndBoxes':
                return <ParkingLotsBoxes
                    t={t}
                    isPreview={isPreview}
                    type={type}
                    formik={formik}
                    filters={filters}
                    handleSelect={handleSelect}
                />
            case 'commercialProperty':
                return <CommercialPropertyParams
                    t={t}
                    type={type}
                    formik={formik}
                    filters={filters}
                    isPreview={isPreview}
                    handleSelect={handleSelect}
                    handleOptionCheckbox={handleOptionCheckbox}
                />
            default:
                return <RegularParams
                    t={t}
                    formik={formik}
                    filters={filters}
                    isPreview={isPreview}
                    handleSelect={handleSelect}
                />
        }
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CustomAccordion
                icon={icon}
                title={title}
                isPreview={isPreview}
                nextButtonTxt={t('appearance')}
                open={currentFormIndex === formIndex}
                handleEdit={handleFormOpen(formIndex)}
                isEditable={currentFormIndex < formIndex}
            >
                {!isExtendSubCtgr && (
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
                )}
                {formBySubCategory()}
            </CustomAccordion>
        </div>
    );
};