import {FC} from 'react';
import {Typography} from '@material-ui/core';
import {FormikField} from '@src/components/elements/formik_field/FormikField';
import {getErrorMsg} from '@src/helpers';
import {WithT} from 'i18next';

type PostTitlePropsType = {
    isPreview: boolean,
    title: string,
    formik
} & WithT;

export const PostTitle: FC<PostTitlePropsType> = (props) => {
    const {
        t,
        isPreview,
        title,
        formik
    } = props;

    const {
        values,
        setValues,
        errors,
        touched
    } = formik;

    const titleTxtLimit = 50;

    const handleTitle = ({target: {name, value}}) => {
        if (titleTxtLimit >= value.length) {
            setValues({...values, [name]: value});
        }
    };

    return (
        <div>
            {isPreview
             ? <Typography variant="subtitle1">
                 <strong>
                     {t('filters:title')}:&nbsp;
                 </strong>
                 {title}
             </Typography>
             : <FormikField
                 t={t}
                 size='small'
                 name='title'
                 labelText='title'
                 limit={50}
                 value={title}
                 onChange={handleTitle}
                 placeholder={t('filters:example_title')}
                 errorMsg={getErrorMsg(errors.title, touched.title, t)}
             />}
        </div>
    );
};
