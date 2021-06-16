import {FC, useEffect} from 'react';
import {useFormik} from 'formik';
import {Typography} from '@material-ui/core';
import {PreviewPhotos} from './preview_photos/PreviewPhotos';
import {CustomAccordion} from '../../../../elements/accordion/CustomAccordion';
import {IdNameType} from '@root/interfaces/Post';
import {ViewIcon} from '@src/components/elements/icons';
import {appearanceSchema} from '@root/validation_schemas/createPostSchemas';
import {CustomFormikProvider} from '@src/components/elements/custom_formik_provider/CustomFormikProvider';
import {useTranslation} from 'react-i18next';
import {useStyles} from './useStyles';


type AppearanceFormPropsType = {
    colors: (IdNameType & { hex_color_code: string })[],
    handleSubmit: (v) => void,
    isPreview: boolean,
    currentFormIndex: number,
    handleFormOpen: (i) => () => void,
    handleNextFormOpen: () => void
};

export const AppearanceForm: FC<AppearanceFormPropsType> = (props) => {
    const {
        currentFormIndex,
        colors,
        handleSubmit,
        isPreview,
        handleFormOpen,
        handleNextFormOpen
    } = props;

    const formIndex = 2;

    const {t} = useTranslation('filters');

    const onSubmit = ({files, color}) => {
        const appearance: { photos: any, color_id?: number } = {
            photos: files.filter(({file}) => file)
        };

        if (color) appearance.color_id = color.id;

        handleSubmit({appearance});
        handleNextFormOpen();
    };

    const formik = useFormik({
        onSubmit,
        initialValues: {
            color: null,
            files: []
        },
        validationSchema: appearanceSchema
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
                icon={<ViewIcon/>}
                isPreview={isPreview}
                open={currentFormIndex === formIndex}
                isEditable={currentFormIndex < formIndex}
                handleEdit={handleFormOpen(formIndex)}
                title={t('post:appearance')}
                submitTxt='priceDescContacts'
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
                                 <img
                                     key={i}
                                     alt="photo"
                                     src={photo.url}
                                 />
                             )}
                         </div>
                     </div>
                     : <div>
                         {!!colors && (
                             <>
                                 <Typography variant="subtitle1">
                                     <strong>
                                         {t('color')}
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
                                     {colors.map(clr =>
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
                                     )}
                                 </div>
                             </>
                         )}
                         <div className='photos-wrapper'>
                             <Typography variant="subtitle1">
                                 <strong>
                                     {t('post:photos')}
                                     {<span className='error-text'>*</span>}
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