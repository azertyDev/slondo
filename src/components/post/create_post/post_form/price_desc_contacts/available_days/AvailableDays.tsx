import React, {FC} from "react";
import {Checkbox, Paper, Switch, TextField, Typography} from "@material-ui/core";
import {WEEK_DAYS} from "@src/common_data/common";
import {useStyles} from './useStyles';


export const AvailableDays: FC<any> = (props) => {
    const {
        isPreview,
        avalTime,
        handleTime,
        handleAvalDays,
        handleBlur,
        handleSwitch,
    } = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            {!isPreview
            && <div className='switcher'>
                <Typography variant="subtitle1">
                    <strong>
                        Время звонков
                    </strong>
                </Typography>
                <Switch
                    color='primary'
                    checked={avalTime.isActive}
                    onChange={handleSwitch}
                />
            </div>}
            <Paper className='scheduler'>
                <div className='week-days'>
                    {WEEK_DAYS.map(day => (
                        <Checkbox
                            disabled={!avalTime.isActive || isPreview}
                            key={day.id}
                            checked={
                                avalTime.isActive
                                && avalTime.available_days.some(({id}) => id === day.id)
                            }
                            checkedIcon={
                                <Typography className='selected-day'>
                                    {day.name}
                                </Typography>
                            }
                            icon={<Typography>{day.name}</Typography>}
                            onChange={handleAvalDays(day)}
                        />
                    ))}
                </div>
                <div className='available-time'>
                    <div>
                        <Typography>С</Typography>
                        <TextField
                            variant='outlined'
                            name='start_time'
                            onChange={handleTime}
                            onBlur={handleBlur}
                            value={avalTime.start_time}
                            disabled={!avalTime.isActive || isPreview}
                        />
                    </div>
                    <div>
                        <Typography>До</Typography>
                        <TextField
                            variant='outlined'
                            name='end_time'
                            onChange={handleTime}
                            onBlur={handleBlur}
                            value={avalTime.end_time}
                            disabled={!avalTime.isActive || isPreview}
                        />
                    </div>
                </div>
            </Paper>
            {!isPreview && <a href="#" className='settings'>Настройки</a>}
        </div>
    )
};