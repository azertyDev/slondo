import {FC} from 'react';
import {Grid, Typography} from '@material-ui/core';
import {CheckboxSelect} from '@src/components/elements/checkbox_select/CheckboxSelect';
import {excludeFields, noTranslatableFields} from '@src/common_data/fields_keys';
import {useTranslation} from "next-i18next";
import {useStyles} from './useStyles';

type PreviewValuesPropsType = {
    transKey: string,
    values,
    filters
};

export const PreviewValues: FC<PreviewValuesPropsType> = (props) => {
    const {
        values,
        filters,
        transKey
    } = props;

    const {t} = useTranslation('filters');

    const classes = useStyles();
    return (
        <div className={classes.prevWrapper}>
            <Grid item container spacing={2}>
                {Object.keys(values).map(key => {
                        let value;
                        const isString = typeof values[key] === 'string';
                        const isBoolean = typeof values[key] === 'boolean';
                        const isArray = Array.isArray(values[key]);
                        const isExcludeKey = excludeFields.some(k => k === key);
                        const noTranslatable = noTranslatableFields.some(f => f === key);
                    console.log(key);
                        if ((!!values[key] && !isExcludeKey && !isArray) || (isArray && !!values[key].length)) {
                            if (isArray) {
                                value = values[key].map(val => {
                                    const valueName = filters[key].find(f => f.id === val).name;
                                    return t(`${transKey}${valueName}.name`);
                                }).join(', ');
                            } else if (isString) {
                                value = values[key];
                            } else if (values[key].name) {
                                const valName = values[key].name;
                                value = t(noTranslatable ? valName : `${transKey}${valName}.name`);
                            }

                            return (
                                <Grid
                                    item
                                    key={key}
                                    sm={6}
                                    xs={12}
                                >
                                    {isBoolean
                                        ? <CheckboxSelect
                                            disabled
                                            checked
                                            name={key}
                                            labelTxt={key}
                                            handleCheckbox={null}
                                        />
                                        : <Typography variant="subtitle1" className='prev-text'>
                                            <strong>
                                                {t(noTranslatable ? key : `${transKey}${key}.name`)}:&nbsp;
                                            </strong>
                                            {value}
                                        </Typography>}
                                </Grid>
                            );
                        }
                    }
                )}
            </Grid>
        </div>
    );
};