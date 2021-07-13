import {FC} from 'react';
import {Grid, Typography} from '@material-ui/core';
import {WithT} from 'i18next';
import {CheckboxSelect} from '@src/components/elements/checkbox_select/CheckboxSelect';
import {excludeFields} from '@src/common_data/fields_keys';
import {useStyles} from './useStyles';


type PreviewValuesPropsType = {
    values
} & WithT;

export const PreviewValues: FC<PreviewValuesPropsType> = (props) => {
    const {t, values} = props;

    const classes = useStyles();

    // const mockVals = {};

    return (
        <div className={classes.prevWrapper}>
            <Grid container spacing={2}>
                {Object.keys(values).map(key => {
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
        </div>
    );
};