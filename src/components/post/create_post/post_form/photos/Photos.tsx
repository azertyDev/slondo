import React, {FC} from "react";
import {WithT} from "i18next";
import {Typography} from "@material-ui/core";
import {PreviewPhotos} from "./preview_photos/PreviewPhotos";
import {useStyles} from "./useStyles";


export const Photos: FC<any & WithT> = (props) => {
    const {
        t,
        isPreview,
        errors,
        touched,
        values,
        setValues,
    } = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="subtitle1">
                <strong>
                    {t('photos')}
                    {!isPreview && <span className='error-text'>*</span>}
                </strong>
                {errors.files && touched.files && <span className='error-text'> {errors.files}</span>}
            </Typography>
            <PreviewPhotos
                values={values}
                setValues={setValues}
                isPreview={isPreview}
            />
        </div>
    )
};