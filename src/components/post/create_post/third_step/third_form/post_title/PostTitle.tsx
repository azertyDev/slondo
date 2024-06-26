import {FC} from 'react';
import {Typography} from '@material-ui/core';
import {FormikField} from '@src/components/elements/formik_field/FormikField';
import {getErrorMsg} from '@src/helpers';
import {WithT} from 'i18next';
import {TITLE_LIMIT, TITLE_MIN} from "@src/constants";

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

    const handleTitle = ({target: {name, value}}) => {
        if (TITLE_LIMIT >= value.length) {
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
                    {title.trim()}
                </Typography>
                : <FormikField
                    t={t}
                    name='title'
                    labelText='title'
                    value={title}
                    limit={TITLE_LIMIT}
                    onChange={handleTitle}
                    placeholder={t('filters:example_title')}
                    errorMsg={getErrorMsg(errors.title, touched.title, t, TITLE_MIN)}
                />}
        </div>
    );
};
