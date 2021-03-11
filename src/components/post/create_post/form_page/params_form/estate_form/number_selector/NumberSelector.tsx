import React, {FC} from "react";
import {WithT} from "i18next";
import {Typography} from "@material-ui/core";


type FloorsPropsType = {
    name: string,
    count: number,
    errors,
    touched
} & WithT;

export const NumberSelector: FC<FloorsPropsType> = (props) => {
    const {
        t,
        name,
        count,
        errors,
        touched
    } = props;

    return (
        <div>
            <Typography variant="subtitle1">
                <strong>
                    {t(name)}
                    <span className='error-text'>*&nbsp;</span>
                </strong>
                {errors && errors[name] && touched[name] && (
                    <span className='error-text'>
                        {t(errors[name] as string)}
                    </span>
                )}
            </Typography>
            {Array.from({length: count}).map((_, i) =>
                <span key={i}>{++i}</span>
            )}
            <span className='other'>{t('other')}</span>
        </div>
    )
}