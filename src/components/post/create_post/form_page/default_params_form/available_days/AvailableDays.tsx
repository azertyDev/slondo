import React, {FC} from "react";
import {Checkbox, Paper, Switch, TextField, Typography} from "@material-ui/core";
import {WEEK_DAYS} from "@src/common_data/common";
import {WithT} from "i18next";
import {useStyles} from './useStyles';


type AvailableDaysPropsType = {
    avalTime,
    handleTime,
    handleAvalDays,
    handleBlur,
    handleSwitch,
} & WithT;

export const AvailableDays: FC<AvailableDaysPropsType> = (props) => {
    const {
        t,
        avalTime,
        handleTime,
        handleAvalDays,
        handleBlur,
        handleSwitch,
    } = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className='switcher'>
                <Typography variant="subtitle1">
                    <strong>
                        {t('callTimes')}
                    </strong>
                </Typography>
                <Switch
                    color='primary'
                    checked={avalTime.isActive}
                    onChange={handleSwitch}
                />
            </div>
            <Paper className='scheduler'>
                <div className='week-days'>
                    {WEEK_DAYS.map(day =>
                        <Checkbox
                            disabled={!avalTime.isActive}
                            key={day.id}
                            checked={avalTime.isActive && avalTime.available_days.some(({id}) => id === day.id)}
                            checkedIcon={
                                <Typography className='selected-day'>
                                    {day.name}
                                </Typography>
                            }
                            icon={<Typography>{day.name}</Typography>}
                            onChange={handleAvalDays(day)}
                        />
                    )}
                </div>
                <div className='available-time'>
                    <div>
                        <Typography>{t('from')}</Typography>
                        <TextField
                            variant='outlined'
                            name='start_time'
                            onChange={handleTime}
                            onBlur={handleBlur}
                            value={avalTime.start_time}
                            disabled={!avalTime.isActive}
                        />
                    </div>
                    <div>
                        <Typography>{t('before')}</Typography>
                        <TextField
                            name='end_time'
                            variant='outlined'
                            onBlur={handleBlur}
                            onChange={handleTime}
                            value={avalTime.end_time}
                            disabled={!avalTime.isActive}
                        />
                    </div>
                </div>
            </Paper>
            <a href="#" className='settings'>{t('configs')}</a>
        </div>
    )
};