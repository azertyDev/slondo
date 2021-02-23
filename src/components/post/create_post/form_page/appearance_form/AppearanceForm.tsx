import React, {FC} from "react";
import {WithT} from "i18next";
import {FormikProvider, useFormik} from "formik";
import {TOTAL_FILES_LIMIT} from "@src/constants";
import {initPhoto} from "../FormPage";
import {Typography} from "@material-ui/core";
import {PreviewPhotos} from "./preview_photos/PreviewPhotos";
import {CustomAccordion} from "../accordion/CustomAccordion";
import {IdNameType} from "@root/interfaces/Post";
import {useStyles} from './useStyles';
import {ViewIcon} from '@src/components/elements/icons'


type AppearanceFormPropsType = {
    isPreview: boolean,
    open: boolean,
    colors: (IdNameType & { hex_color_code: string })[],
    handleSetPost
} & WithT;

export const AppearanceForm: FC<AppearanceFormPropsType> = (props) => {
    const {
        t,
        isPreview,
        open,
        colors,
        handleSetPost
    } = props;

    const initForm = {
        color: {
            id: null,
            name: '',
            hex_color_code: ''
        },
        files: Array.from({length: TOTAL_FILES_LIMIT}).map(() => initPhoto)
    };

    const onSubmit = ({files, color}) => {
        const photos = files.filter(({file}) => file);
        handleSetPost({photos, color_id: color.id});
    };

    const formik = useFormik({
        onSubmit,
        initialValues: initForm,
        validationSchema: null,
    });

    const {
        values,
        setValues,
        errors,
        touched,
        handleSubmit
    } = formik;

    const handleColor = (value) => () => {
        if (values.color.id === value.id) {
            values.color = initForm.color;
        } else {
            values.color = value;
        }
        setValues({...values});
    };

    const classes = useStyles();
    return (
        isPreview
            ? <div>Preview</div>
            : <FormikProvider value={formik}>
                <form onSubmit={handleSubmit}>
                    <CustomAccordion
                        open={open}
                        icon={<ViewIcon/>}
                        title={t('appearance')}
                        nextButtonTxt={t('titleDescContacts')}
                    >
                        <div className={classes.root}>
                            {colors && <>
                                <Typography variant="subtitle1">
                                    <strong>
                                        {t('colors')}
                                        {<span className='error-text'>*</span>}
                                    </strong>
                                    {errors.color
                                    && touched.color
                                    && <span className='error-text'>&nbsp;{errors.color}</span>}
                                </Typography>
                                <div className='color-wrapper'>
                                    {colors.map(clr =>
                                        <div
                                            key={clr.id}
                                            onClick={handleColor(clr)}
                                            className={clr.id === values.color.id ? 'selected-color' : ''}
                                            style={{
                                                width: '50px',
                                                height: '50px',
                                                backgroundColor: clr.hex_color_code
                                            }}
                                        />
                                    )}
                                </div>
                            </>}
                            <div className='photos-wrapper'>
                                <Typography variant="subtitle1">
                                    <strong>
                                        {t('photos')}
                                        {<span className='error-text'>*</span>}
                                    </strong>
                                    {errors.files
                                    && touched.files
                                    && <span className='error-text'>&nbsp;{errors.files}</span>}
                                </Typography>
                                <PreviewPhotos
                                    values={values}
                                    setValues={setValues}
                                />
                            </div>
                        </div>
                    </CustomAccordion>
                </form>
            </FormikProvider>
    )
};