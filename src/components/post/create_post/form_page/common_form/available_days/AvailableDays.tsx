import {FC} from "react";
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

    const {isActive, time} = avalTime;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className='switcher'>
                <Typography variant="subtitle1">
                    <strong>
                        {t('common:callTimes')}
                    </strong>
                </Typography>
                <Switch
                    color='primary'
                    checked={isActive}
                    onChange={handleSwitch}
                />
            </div>
            <Paper className='scheduler'>
                <div className='week-days'>
                    {WEEK_DAYS.map(day =>
                        <Checkbox
                            disabled={!isActive}
                            key={day.id}
                            checked={isActive && time.week_days.some(({id}) => id === day.id)}
                            checkedIcon={
                                <Typography className='selected-day'>
                                    {t(`common:${day.name}`)}
                                </Typography>
                            }
                            icon={<Typography>{t(`common:${day.name}`)}</Typography>}
                            onChange={handleAvalDays(day)}
                        />
                    )}
                </div>
                <div className='available-time'>
                    <div>
                        <TextField
                            variant='outlined'
                            name='start_time'
                            onChange={handleTime}
                            onBlur={handleBlur}
                            value={time.start_time}
                            disabled={!isActive}
                        />
                        <span>&nbsp;-&nbsp;</span>
                        <TextField
                            name='end_time'
                            variant='outlined'
                            onBlur={handleBlur}
                            onChange={handleTime}
                            value={time.end_time}
                            disabled={!isActive}
                        />
                    </div>
                </div>
            </Paper>
            <a href="#" className='settings'>{t('common:configs')}</a>
        </div>
    )
};