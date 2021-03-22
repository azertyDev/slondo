import React, {FC} from 'react';
import {Grid, Typography} from "@material-ui/core";
import {WithT} from "i18next";
import {CustomCheckbox} from "@src/components/post/create_post/form_page/components/custom_checkbox/CustomCheckbox";


type PreviewValuesPropsType = {
    values
} & WithT;

export const PreviewValues: FC<PreviewValuesPropsType> = (props) => {
    const {t, values} = props;

    return (
        <Grid item container>
            {Object.keys(values).map(key => {
                    let value;
                    const isBoolean = typeof values[key] === 'boolean';
                    const isString = typeof values[key] === 'string';

                    if (values[key]) {
                        if (Array.isArray(values[key])) {
                            value = values[key].map(val => val.name).join(', ');
                        } else if (isString) {
                            value = values[key];
                        } else if (values[key].name) {
                            value = values[key].name;
                        }

                        return (
                            <Grid
                                item
                                key={key}
                                sm={4}
                                xs={12}
                            >
                                {isBoolean
                                    ? <CustomCheckbox
                                        t={t}
                                        disabled
                                        name={key}
                                        checked={true}
                                    />
                                    : <Typography variant="subtitle1">
                                        <strong>
                                            {t(key)}:&nbsp;
                                        </strong>
                                        {value}
                                    </Typography>}
                            </Grid>
                        )
                    }
                }
            )}
        </Grid>
    )
};