import {FC} from 'react';
import {Grid, Typography} from '@material-ui/core';
import {WithT} from 'i18next';
import {CheckboxSelect} from '@src/components/elements/checkbox_select/CheckboxSelect';
import {excludeFields} from '@src/common_data/form_fields';


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
                        const isString = typeof values[key] === 'string';
                        const isBoolean = typeof values[key] === 'boolean';
                        const isOptions = Array.isArray(values[key]);
                        const isExcludeKey = excludeFields.some(k => k === key);

                        if ((!!values[key] && !isExcludeKey && !isOptions) || (isOptions && !!values[key].length)) {
                            if (isOptions) {
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
                                             {t(`filters:${key}`)}:&nbsp;
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