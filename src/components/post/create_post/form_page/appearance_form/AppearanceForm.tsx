import React, {FC, useEffect} from "react";
import {WithT} from "i18next";
import {FormikProvider, useFormik} from "formik";
import {Typography} from "@material-ui/core";
import {PreviewPhotos} from "./preview_photos/PreviewPhotos";
import {CustomAccordion} from "../accordion/CustomAccordion";
import {IdNameType} from "@root/interfaces/Post";
import {ViewIcon} from '@src/components/elements/icons';
import {appearanceSchema} from "@root/validation_schemas/createPostSchemas";
import {useStyles} from './useStyles';


type AppearanceFormPropsType = {
    isPreview: boolean,
    openKey: boolean,
    mark,
    colors: (IdNameType & { hex_color_code: string })[],
    post,
    setPost,
    handleFormOpen: (k, e) => void
} & WithT;

export const AppearanceForm: FC<AppearanceFormPropsType> = (props) => {
    const {
        t,
        openKey,
        mark,
        colors,
        post,
        setPost,
        isPreview,
        handleFormOpen
    } = props;

    const formKey = 'appearance';
    const nextFormKey = 'defParams';

    const initForm = {
        color: null,
        files: []
    };

    const onSubmit = ({files, color}) => {
        const photos = files.filter(({file}) => file);

        if (color) {
            post[mark] = {
                ...post[mark],
                color_id: color.id
            };
        }

        setPost({...post, photos});
        handleFormOpen(nextFormKey, true);
    };

    const formik = useFormik({
        onSubmit,
        initialValues: initForm,
        validationSchema: appearanceSchema,
    });

    const {
        values,
        setValues,
        errors,
        touched,
        handleSubmit
    } = formik;

    const {color, files} = values;

    const handleColor = (value) => () => {
        if (color && color.id === value.id) {
            values.color = {id: null};
        } else {
            values.color = value;
        }
        setValues({...values});
    };

    useEffect(() => {
        !!colors && setValues({
            ...values,
            color: {
                id: null,
                name: '',
                hex_color_code: ''
            }
        });
    }, [colors]);

    const classes = useStyles();
    return (
        <FormikProvider value={formik}>
            <form onSubmit={handleSubmit}>
                <CustomAccordion
                    isPreview={isPreview}
                    formKey={formKey}
                    handleOpen={handleFormOpen}
                    icon={<ViewIcon/>}
                    title={t('appearance')}
                    nextButtonTxt={t('titleDescContacts')}
                    open={openKey || isPreview}
                >
                    <div className={classes.root}>
                        {
                            isPreview
                                ? <div className='preview'>
                                    {
                                        !!color && <div className='color-preview'>
                                            <Typography variant="subtitle1">
                                                <strong>
                                                    {t('colors')}:
                                                </strong>
                                            </Typography>
                                            <div
                                                className='color'
                                                style={{backgroundColor: values.color.hex_color_code}}
                                            />
                                        </div>
                                    }
                                    <div className='photos-preview'>
                                        <Typography variant="subtitle1">
                                            <strong>
                                                {t('photos')}:
                                            </strong>
                                        </Typography>
                                        {
                                            files.map((photo, i) =>
                                                <img
                                                    key={i}
                                                    alt="photo"
                                                    src={photo.url}
                                                />
                                            )
                                        }
                                    </div>
                                </div>
                                : <div>
                                    {
                                        !!colors && (
                                            <>
                                                <Typography variant="subtitle1">
                                                    <strong>
                                                        {t('colors')}
                                                        {<span className='error-text'>*&nbsp;</span>}
                                                    </strong>
                                                    {
                                                        errors.color
                                                        && touched.color
                                                        && <span className='error-text'>
                                                            {t(errors.color as string)}
                                                        </span>
                                                    }
                                                </Typography>
                                                <div className='color-wrapper'>
                                                    {
                                                        colors.map(clr =>
                                                            <div
                                                                key={clr.id}
                                                                onClick={handleColor(clr)}
                                                                className={!!color && clr.id === color.id ? 'selected-color' : ''}
                                                                style={{
                                                                    width: '50px',
                                                                    height: '50px',
                                                                    backgroundColor: clr.hex_color_code
                                                                }}
                                                            />
                                                        )
                                                    }
                                                </div>
                                            </>
                                        )
                                    }
                                    <div className='photos-wrapper'>
                                        <Typography variant="subtitle1">
                                            <strong>
                                                {t('photos')}
                                                {<span className='error-text'>*</span>}
                                            </strong>
                                            {
                                                errors.files
                                                && touched.files
                                                && <span className='error-text'>&nbsp;{t(errors.files as string)}</span>
                                            }
                                        </Typography>
                                        <PreviewPhotos
                                            values={values}
                                            setValues={setValues}
                                        />
                                    </div>
                                </div>
                        }
                    </div>
                </CustomAccordion>
            </form>
        </FormikProvider>
    )
};