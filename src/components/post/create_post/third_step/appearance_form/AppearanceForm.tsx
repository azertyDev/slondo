import {FC, useEffect} from 'react';
import {useFormik} from 'formik';
import {useRouter} from 'next/router';
import {useTranslation} from 'react-i18next';
import {DropResult} from 'react-beautiful-dnd';
import {unstable_batchedUpdates} from 'react-dom';
import {Box, Grid, Typography, useMediaQuery, useTheme} from '@material-ui/core';
import {UPLOAD_FILES_LIMIT} from '@src/constants';
import {PreviewPhotos} from './preview_photos/PreviewPhotos';
import {CustomAccordion} from '@src/components/elements/accordion/CustomAccordion';
import {FileType, IdNameType} from '@root/interfaces/Post';
import {ViewIcon} from '@src/components/elements/icons';
import {appearanceSchema} from '@root/validation_schemas/postSchemas';
import {CustomFormikProvider} from '@src/components/elements/custom_formik_provider/CustomFormikProvider';
import {CustomSlider} from '@src/components/elements/custom_slider/CustomSlider';
import {useStyles} from './useStyles';
import {notRequirePhotosCategories} from "@src/common_data/fields_keys";

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

    const isXsDown = useMediaQuery(useTheme().breakpoints.down('xs'));

    const sliderSettings = {
        dots: false,
        infinite: false,
        arrows: !isXsDown,
        slidesToShow: 10,
        slidesToScroll: 1,
        centerPadding: '0px',
        centerMode: false,
        adaptiveHeight: false,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 8
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 6
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2.5
                }
            }
        ]
    };
    const formIndex = 2;
    const notReqPhoto = notRequirePhotosCategories.some(c => c === categoryName);

    const {t} = useTranslation('filters');
    const {images, model} = useRouter().query;

    const onSubmit = ({files, color}) => {
        const imgs = files.filter(f => !!f);
        const appearance: { photos: any, color_id?: number } = {
            photos: imgs
        };
        if (color) appearance.color_id = color.id;
        unstable_batchedUpdates(() => {
            handleNextFormOpen();
            handleSubmit({appearance});
        });
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
                url: img.url?.default
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
        validationSchema: notReqPhoto ? null : appearanceSchema
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
            files: sortArray([...files, ...photos])
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
                submitTxt='priceDescContacts'
                title={t('post:appearance')}
                open={currentFormIndex === formIndex}
                handleEdit={handleFormOpen(formIndex)}
                isEditable={currentFormIndex < formIndex}
            >
                <Grid item container spacing={2} className={classes.root}>
                    {isPreview
                        ? <>
                            {!!color && (
                                <Grid item xs={12}>
                                    <Typography variant="subtitle1" component='p' gutterBottom>
                                        {t('color')}
                                    </Typography>
                                    <Box className='color-preview'>
                                        <div
                                            className='color'
                                            style={{backgroundColor: values.color.hex_color_code}}
                                        />
                                        {values.color.name && (
                                            <Typography variant='subtitle2' component='p'>
                                                {t(`${categoryName}.${values.color.name}.name`)}
                                            </Typography>
                                        )}
                                    </Box>
                                </Grid>
                            )}
                            <Grid item xs={12}>
                                <Typography variant="subtitle1" component='p' gutterBottom>
                                    {t('post:photos')}:&nbsp;
                                    {files.every(p => p === null) && t('common:no')}
                                </Typography>
                                <Grid item container xs={12} spacing={1} className='photos-preview'>
                                    {files.map((photo, i) => (
                                        !!photo && (
                                            <Grid key={i} item xs={6} sm={4} lg={2}>
                                                <img
                                                    key={i}
                                                    alt="photo"
                                                    src={photo.url}
                                                />
                                            </Grid>
                                        )
                                    ))}
                                </Grid>
                            </Grid>
                        </>
                        : <>
                            {!!colors && (
                                <Grid item xs={12}>
                                    <Typography variant="subtitle1" gutterBottom>
                                        {!notReqPhoto && (
                                            <>
                                                {t(`${categoryName}.color.name`)}
                                                {<span className='error-text'>*&nbsp;</span>}
                                                <br/>
                                            </>
                                        )}
                                        {errors.color && touched.color && (
                                            <span className='error-text'>
                                                {t(`errors:${errors.color}`)}
                                            </span>
                                        )}
                                    </Typography>
                                    <CustomSlider {...sliderSettings}>
                                        {colors.map(clr => {
                                                const selected = !!color && color.id === clr.id;
                                                const hexColor = clr.hex_color_code;
                                                const colorURL = clr.name === 'multi_color'
                                                    ? '/img/multi_color.png'
                                                    : clr.name === 'other' ? '/img/other_color.png' : null;

                                                return (
                                                    <Box
                                                        key={clr.id}
                                                        className='color-wrapper'
                                                        onClick={handleColor(clr)}
                                                    >
                                                        {colorURL
                                                            ? <img
                                                                src={colorURL}
                                                                alt='color-image'
                                                                className={`color-img ${selected ? 'selected-color' : ''}`}
                                                            />
                                                            : <span
                                                                style={{backgroundColor: hexColor}}
                                                                className={selected ? 'selected-color' : ''}
                                                            />}
                                                        <Typography variant='subtitle2' component='p'>
                                                            {t(`${categoryName}.${clr.name}.name`)}
                                                        </Typography>
                                                    </Box>
                                                );
                                            }
                                        )}
                                    </CustomSlider>
                                </Grid>
                            )}
                            <Grid item xs={12}>
                                <Box
                                    fontWeight={500}
                                    fontSize={18}
                                    mb={2}
                                >
                                    {t('post:photos')}
                                    {!notReqPhoto && <span className='error-text'>*</span>}
                                    {errors.files && touched.files && (
                                        <Box
                                            mt={1}
                                            component='p'
                                            className='error-text'
                                            fontSize='subtitle2.fontSize'
                                        >
                                            &nbsp;{t(`errors:${errors.files as string}`)}
                                        </Box>
                                    )}
                                </Box>
                                <Box
                                    fontWeight={500}
                                    color='text.disabled'
                                    fontSize='subtitle2.fontSize'
                                    mb={2}
                                >
                                    {t('first_photo_txt')}
                                </Box>
                                <PreviewPhotos
                                    files={files}
                                    removeFile={removeFile}
                                    handleUploadFile={handleUploadFile}
                                    handleOnDragEnd={handleOnDragEnd}
                                />
                                <Box
                                    mt={2}
                                    fontWeight={500}
                                    color='text.disabled'
                                    fontSize='subtitle2.fontSize'
                                >
                                    Вы можете загрузить фотографий в формате JPEG или PNG. Размер одной фотографии
                                    не должно превышать - 15 Mb
                                </Box>
                            </Grid>
                        </>
                    }
                </Grid>
            </CustomAccordion>
        </CustomFormikProvider>
    );
};