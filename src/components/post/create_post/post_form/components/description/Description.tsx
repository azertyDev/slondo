import React, {FC} from "react";
import {Typography} from "@material-ui/core";
import {CustomFormikTextarea} from "@src/components/elements/custom_formik_textarea/CustomFormikTextarea";
import {useStyles} from './useStyles';


export const Description: FC<any> = (props) => {
    const {
        isPreview,
        errors,
        touched,
        handleInput,
        handleBlur,
        defaultParams,
    } = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="subtitle1">
                <strong>
                    Описание
                    {!isPreview
                    && <span className='error-text'>*</span>}
                </strong>
                {errors.description && touched.description
                && <span className='error-text'> {errors.description}</span>}
            </Typography>
            {isPreview
                ? <Typography>{defaultParams.description}</Typography>
                : <CustomFormikTextarea
                    name='description'
                    onChange={handleInput}
                    onBlur={handleBlur}
                    className={
                        `description-area ${errors.description && touched.description ? 'error-border' : ''}`
                    }
                    rowsMin={15}
                    value={defaultParams.description}
                />}
        </div>
    )
}