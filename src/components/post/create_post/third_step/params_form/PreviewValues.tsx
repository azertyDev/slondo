import {FC} from 'react';
import {Box, Grid, Typography} from '@material-ui/core';
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
        <Grid item container spacing={2} className={classes.prevWrapper}>
            {Object.keys(values).map(key => {
                    let value;
                    const isString = typeof values[key] === 'string';
                    const isBoolean = typeof values[key] === 'boolean';
                    const isArray = Array.isArray(values[key]);
                    const isExcludeKey = excludeFields.some(k => k === key);
                    const noTranslatable = noTranslatableFields.some(f => f === key);

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
                                container
                                xs={12}
                                sm={6}
                            >
                                {isBoolean
                                    ? <CheckboxSelect
                                        disabled
                                        checked
                                        name={key}
                                        labelTxt={key}
                                        handleCheckbox={null}
                                    />
                                    : <>
                                        <Grid item xs={12} sm={6}>
                                            <Typography
                                                noWrap
                                                component='p'
                                                className='key'
                                                variant='subtitle1'
                                                gutterBottom
                                            >
                                                {t(noTranslatable ? key : `${transKey}${key}.name`)}:
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Typography variant='subtitle1' component='p'>
                                                {value}
                                            </Typography>
                                        </Grid>
                                    </>
                                }
                            </Grid>
                        );
                    }
                }
            )}
        </Grid>
    );
};