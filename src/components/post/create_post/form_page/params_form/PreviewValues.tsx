import React, {FC} from 'react';
import {Grid, Typography} from '@material-ui/core';
import {WithT} from 'i18next';
import {CheckboxSelect} from '@src/components/elements/checkbox_select/CheckboxSelect';
import {excludedKeys} from '@src/common_data/form_fields';


type PreviewValuesPropsType = {
    values
} & WithT;

export const PreviewValues: FC<PreviewValuesPropsType> = (props) => {
    const {t, values} = props;

    return (
        <Grid item container>
            {Object.keys(values)
                .map(key => {
                        let value;
                        const isExcludeKey = excludedKeys.some(k => k === key);
                        const isBoolean = typeof values[key] === 'boolean';
                        const isString = typeof values[key] === 'string';

                        if (values[key] && !isExcludeKey) {
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
                                     ? <CheckboxSelect
                                         t={t}
                                         disabled
                                         checked
                                         name={key}
                                         labelText={key}
                                     />
                                     : <Typography variant="subtitle1">
                                         <strong>
                                             {t(key)}:&nbsp;
                                         </strong>
                                         {value}
                                     </Typography>}
                                </Grid>
                            );
                        }
                    }
                )}
        </Grid>
    );
};