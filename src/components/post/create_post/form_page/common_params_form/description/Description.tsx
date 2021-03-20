import React, {FC} from "react";
import {Typography} from "@material-ui/core";
import {CustomFormikTextarea} from "@src/components/elements/custom_formik_textarea/CustomFormikTextarea";
import {WithT} from "i18next";
import {useStyles} from './useStyles';


type DescriptionPropsType = {
    errors,
    touched,
    handleInput,
    handleBlur,
    description
} & WithT;

export const Description: FC<DescriptionPropsType> = (props) => {
    const {
        t,
        errors,
        touched,
        handleInput,
        handleBlur,
        description,
    } = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="subtitle1">
                <strong>
                    {t('description')}
                    <span className='error-text'>*</span>
                </strong>
                {
                    errors.description
                    && touched.description
                    && <span className='error-text'>&nbsp;{t(errors.description)}</span>
                }
            </Typography>
            <CustomFormikTextarea
                rowsMin={15}
                name='description'
                value={description}
                onBlur={handleBlur}
                onChange={handleInput}
                className={`description-area ${errors.description && touched.description ? 'error-border' : ''}`}
            />
        </div>
    )
}