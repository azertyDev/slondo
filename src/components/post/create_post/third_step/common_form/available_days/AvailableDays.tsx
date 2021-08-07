import {FC} from 'react';
import {WithT} from 'i18next';
import {WEEK_DAYS} from '@src/common_data/common';
import {Box, Checkbox, Paper, Switch, TextField, Typography} from '@material-ui/core';
import {useStyles} from './useStyles';

type AvailableDaysPropsType = {
    isActive: boolean,
    time,
    handleTime,
    handleAvalDays,
    switchActive: (_, v) => void,
    handleBlur
} & WithT;

export const AvailableDays: FC<AvailableDaysPropsType> = (props) => {
    const {
        t,
        isActive,
        time,
        handleTime,
        handleAvalDays,
        switchActive,
        handleBlur
    } = props;

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
                        <TextField
                            variant='outlined'
                            name='available_start_time'
                            disabled={!isActive}
                            onChange={handleTime}
                            onBlur={handleBlur}
                            value={time.available_start_time}
                        />
                        <Box
                            mx={1}
                            fontSize='subtitle2.fontSize'
                            component='p'
                        >
                            {t(`common:to`)}
                        </Box>
                        <TextField
                            name='available_end_time'
                            variant='outlined'
                            disabled={!isActive}
                            onBlur={handleBlur}
                            onChange={handleTime}
                            value={time.available_end_time}
                        />
                    </div>
                </div>
            </Paper>
        </Box>
    );
};