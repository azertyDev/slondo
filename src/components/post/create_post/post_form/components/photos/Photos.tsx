import React, {FC} from "react";
import {Typography} from "@material-ui/core";
import {PreviewPhotos} from "./preview_photos/PreviewPhotos";


export const Photos: FC<any> = (props) => {
    const {
        isPreview,
        errors,
        touched,
        values,
        setValues,
    } = props;

    return (
        <div>
            <Typography variant="subtitle1">
                <strong>
                    Фотографии
                    {!isPreview
                    && <span className='error-text'>*</span>}
                </strong>
                {errors.files && touched.files
                && <span className='error-text'> {errors.files}</span>}
            </Typography>
            <PreviewPhotos
                values={values}
                setValues={setValues}
                isPreview={isPreview}
            />
        </div>
    )
};