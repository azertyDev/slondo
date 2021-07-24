import {FC, useEffect, useState} from 'react';
import {useFormik} from 'formik';
import {Typography} from '@material-ui/core';
import {UPLOAD_FILES_LIMIT} from '@src/constants';
import {PreviewPhotos} from './preview_photos/PreviewPhotos';
import {CustomAccordion} from '@src/components/elements/accordion/CustomAccordion';
import {FileType, IdNameType} from '@root/interfaces/Post';
import {ViewIcon} from '@src/components/elements/icons';
import {appearanceSchema} from '@root/validation_schemas/createPostSchemas';
import {CustomFormikProvider} from '@src/components/elements/custom_formik_provider/CustomFormikProvider';
import {useTranslation} from 'react-i18next';
import {useRouter} from "next/router";
import {DropResult} from "react-beautiful-dnd";
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
    const {images, model} = useRouter().query;

    const onSubmit = ({files, color}) => {
        const appearance: { photos: any, color_id?: number } = {
            photos: files.filter(f => !!f).map(f => f.id ?? f.file)
        };
        if (color) appearance.color_id = color.id;
        handleSubmit({appearance});
        handleNextFormOpen();
    };

    const initColor = () => {
        if (model) {
            const color = JSON.parse(model as string).color;
            if (color) {
                return colors.find(clr => clr.id === color.id);
            }
        }
        return {
            id: null,
            name: '',
            hex_color_code: ''
        };
    };

    const initPhotos = () => {
        if (images) {
            const imgs = JSON.parse(images as string).map(img => ({
                id: img.id,
                url: img.url.default
            }));
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

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    const sortArray = (arr) => {
        const sorted = arr.filter(item => !!item);
        const nulls = Array.from({length: UPLOAD_FILES_LIMIT - sorted.length}).map(_ => null);
        return [...sorted, ...nulls];
    };

    const handleOnDragEnd = ({destination, source}: DropResult) => {
        if (!destination) return;
        setValues({
            ...values,
            files: sortArray(reorder(files, source.index, destination.index))
        });
    };

    const handleUploadFile = ({target}) => {
        let photos: any = Array.from(target.files);

        photos = photos.map(photo => ({
            file: photo,
            url: URL.createObjectURL(photo)
        }));

        const dist = photos.length - UPLOAD_FILES_LIMIT;
        const sum = files.length + dist;

        if (dist > 0) {
            photos.splice(-dist, dist);
        }
        if (sum > 0) {
            files.splice(-sum, sum);
        }

        setValues({
            ...values,
            files: [...photos, ...files]
        });
    };

    const removeFile = (url) => () => {
        const sorted = files.filter((item: FileType) => item && item.url !== url);
        const nulls = Array.from({length: UPLOAD_FILES_LIMIT - sorted.length}).map(_ => null);
        setValues({
            ...values,
            files: [...sorted, ...nulls]
        });
    };

    useEffect(() => {
        !!colors && setValues({
            ...values,
            color: initColor()
        });
    }, [colors]);

    const classes = useStyles();
    return (
        <CustomFormikProvider formik={formik}>
            <CustomAccordion
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
                                {files.map((photo, i) => (
                                    !!photo && <img
                                        key={i}
                                        alt="photo"
                                        src={photo.url}
                                    />
                                ))}
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
                                    files={files}
                                    removeFile={removeFile}
                                    handleUploadFile={handleUploadFile}
                                    handleOnDragEnd={handleOnDragEnd}
                                />
                            </div>
                        </div>}
                </div>
            </CustomAccordion>
        </CustomFormikProvider>
    );
};