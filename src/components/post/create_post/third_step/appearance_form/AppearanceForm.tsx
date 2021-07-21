import {FC, useContext, useEffect, useState} from 'react';
import axios from "axios";
import {useFormik} from 'formik';
import {Typography} from '@material-ui/core';
import {UPLOAD_FILES_LIMIT} from '@src/constants';
import {PreviewPhotos} from './preview_photos/PreviewPhotos';
import {CustomAccordion} from '@src/components/elements/accordion/CustomAccordion';
import {IdNameType} from '@root/interfaces/Post';
import {ViewIcon} from '@src/components/elements/icons';
import {appearanceSchema} from '@root/validation_schemas/createPostSchemas';
import {CustomFormikProvider} from '@src/components/elements/custom_formik_provider/CustomFormikProvider';
import {useTranslation} from 'react-i18next';
import {useRouter} from "next/router";
import {ErrorCtx} from "@src/context";
import {useStyles} from './useStyles';

type AppearanceFormPropsType = {
    categoryName: string,
    colors: (IdNameType & { hex_color_code: string })[],
    handleSubmit: (v) => void,
    isPreview: boolean,
    currentFormIndex: number,
    handleFormOpen: (i) => () => void,
    handleNextFormOpen: () => void
};

export const AppearanceForm: FC<AppearanceFormPropsType> = (props) => {
    const {
        categoryName,
        currentFormIndex,
        colors,
        handleSubmit,
        isPreview,
        handleFormOpen,
        handleNextFormOpen
    } = props;

    const formIndex = 2;
    const isJob = categoryName === 'job';

    const {t} = useTranslation('filters');
    const {images} = useRouter().query;
    const {setErrorMsg} = useContext(ErrorCtx);

    const [isFetch, setIsFetch] = useState(false);

    const fetchFiles = (urls: { url: string }[]) => {
        try {
            return Promise.all(urls.filter(url => !!url).map(file =>
                axios
                    .get(file.url, {responseType: 'arraybuffer'})
                    .then(res => new Blob([res.data]))
                    .catch(({response}) => {
                        throw (response.data.message);
                    })
            ));
        } catch (e) {
            setErrorMsg(e.message);
        }
    };

    const onSubmit = async ({files, color}) => {
        setIsFetch(true);
        const appearance: { photos: any, color_id?: number } = {
            photos: await fetchFiles(files)
        };
        setIsFetch(false);
        if (color) appearance.color_id = color.id;
        handleSubmit({appearance});
        handleNextFormOpen();
    };

    const initPhotos = () => {
        if (images) {
            const imgs = JSON.parse(images as string).map(img => ({url: img.url.default}));
            const nulls = Array.from({length: UPLOAD_FILES_LIMIT - imgs.length}).map(_ => null);
            return [...imgs, ...nulls];
        } else {
            return Array.from({length: UPLOAD_FILES_LIMIT}).map(_ => null);
        }
    };

    const formik = useFormik({
        onSubmit,
        initialValues: {
            color: null,
            files: initPhotos()
        },
        validationSchema: !isJob ? appearanceSchema : null
    });

    const {
        values,
        setValues,
        errors,
        touched
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
        <CustomFormikProvider formik={formik}>
            <CustomAccordion
                isFetch={isFetch}
                icon={<ViewIcon/>}
                isPreview={isPreview}
                open={currentFormIndex === formIndex}
                isEditable={currentFormIndex < formIndex}
                handleEdit={handleFormOpen(formIndex)}
                submitTxt='priceDescContacts'
                title={t('post:appearance')}
            >
                <div className={classes.root}>
                    {isPreview
                        ? <div className='preview'>
                            {!!color && (
                                <div className='color-preview'>
                                    <Typography variant="subtitle1">
                                        <strong>
                                            {t('color')}:
                                        </strong>
                                    </Typography>
                                    <Typography variant='subtitle2'>
                                        {t(values.color.name)}
                                    </Typography>
                                    <div
                                        className='color'
                                        style={{backgroundColor: values.color.hex_color_code}}
                                    />
                                </div>)}
                            <div className='photos-preview'>
                                <Typography variant="subtitle1">
                                    <strong>
                                        {t('post:photos')}:
                                    </strong>
                                </Typography>
                                {files.map((photo, i) =>
                                    photo && <img
                                        key={i}
                                        alt="photo"
                                        src={photo.url}
                                    />
                                )}
                            </div>
                        </div>
                        : <div>
                            {!!colors && (
                                <div>
                                    <Typography variant="subtitle1">
                                        {!isJob && (
                                            <strong>
                                                {t('color')}
                                                {<span className='error-text'>*&nbsp;</span>}
                                            </strong>
                                        )}
                                        {errors.color
                                        && touched.color
                                        && <span className='error-text'>
                                             {t(errors.color as string)}
                                         </span>}
                                    </Typography>
                                    <div className='color-select'>
                                        {colors.map(clr =>
                                            <div
                                                key={clr.id}
                                                onClick={handleColor(clr)}
                                                className='color-wrapper'
                                            >
                                                <div
                                                    className={!!color && clr.id === color.id ? 'selected-color' : ''}
                                                    style={{backgroundColor: clr.hex_color_code}}
                                                />
                                                <Typography variant='subtitle2'>
                                                    {t(clr.name)}
                                                </Typography>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                            <div className='photos-wrapper'>
                                <Typography variant="subtitle1">
                                    <strong>
                                        {t('post:photos')}
                                        {!isJob && <span className='error-text'>*</span>}
                                    </strong>
                                    {errors.files && touched.files && (
                                        <span className='error-text'>
                                             &nbsp;{t(`errors:${errors.files as string}`)}
                                         </span>
                                    )}
                                </Typography>
                                <PreviewPhotos
                                    values={values}
                                    setValues={setValues}
                                />
                            </div>
                        </div>}
                </div>
            </CustomAccordion>
        </CustomFormikProvider>
    );
};