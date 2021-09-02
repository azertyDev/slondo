import {FC} from 'react';
import {WithT} from 'i18next';
import {WEEK_DAYS} from '@src/common_data/common';
import {Box, Checkbox, Paper, Switch, Typography} from '@material-ui/core';
import {useStyles} from './useStyles';
import {FormikField} from "@src/components/elements/formik_field/FormikField";
import {getErrorMsg} from "@src/helpers";

type AvailableDaysPropsType = {
    isActive: boolean,
    time,
    handleTime,
    handleAvalDays,
    switchActive: (_, v) => void,
    touched,
    errors
} & WithT;

export const AvailableDays: FC<AvailableDaysPropsType> = (props) => {
    const {
        t,
        errors,
        touched,
        time,
        isActive,
        handleTime,
        handleAvalDays,
        switchActive
    } = props;

    const {
        available_start_time,
        available_end_time
    } = errors;

    const classes = useStyles();
    return (
        <Box width={1} className={classes.root}>
            <div className='switcher'>
                <Typography variant="subtitle1">
                    <strong>
                        {t('common:call_times')}
                    </strong>
                </Typography>
                <Switch
                    color='secondary'
                    checked={isActive}
                    onChange={switchActive}
                />
            </div>
            <Paper className='scheduler' elevation={0}>
                <div className='week-days'>
                    {WEEK_DAYS.map(day =>
                        <Checkbox
                            key={day.id}
                            disabled={!isActive}
                            onChange={handleAvalDays(day)}
                            icon={<Typography>{t(`common:${day.name}`)}</Typography>}
                            checked={isActive && time.available_days.some(({id}) => id === day.id)}
                            checkedIcon={
                                <Typography className='selected-day'>
                                    {t(`common:${day.name}`)}
                                </Typography>
                            }
                        />
                    )}
                </div>
                <div className='available-time'>
                    <div>
                        <Box
                            mr={1}
                            fontSize='subtitle2.fontSize'
                            component='p'
                        >
                            {t(`common:from`)}
                        </Box>
                        <FormikField
                            t={t}
                            disabled={!isActive}
                            onChange={handleTime}
                            name='available_start_time'
                            value={time.available_start_time}
                            errorMsg={getErrorMsg(available_start_time, touched.available_start_time, t)}
                        />
                        <Box
                            mx={1}
                            component='p'
                            fontSize='subtitle2.fontSize'
                        >
                            {t(`common:to`)}
                        </Box>
                        <FormikField
                            t={t}
                            disabled={!isActive}
                            onChange={handleTime}
                            name='available_end_time'
                            value={time.available_end_time}
                            errorMsg={getErrorMsg(available_end_time, touched.available_end_time, t)}
                        />
                    </div>
                </div>
            </Paper>
        </Box>
    );
};