import React from 'react';
import {Typography} from "@material-ui/core";
import Countdown from 'react-countdown';

import {useStyles} from './useStyles';

export const LotTimer = ({date}) => {
    const formatNumber = (number) => {
        if (number <= 9) {
            return `0${number}`
        } else {
            return number
        }
    }

    const renderer = ({days, hours, minutes, seconds, completed}) => {
        if (completed) {
            return <div>Finish</div>;
        } else {
            return (
                <div>
                    <div>
                        <span>
                            <Typography variant='h6'>{formatNumber(days)}</Typography>
                        </span>
                        <Typography variant='caption'>дни</Typography>
                    </div>
                    <span>:</span>
                    <div>
                        <span>
                            <Typography variant='h6'>{formatNumber(hours)}</Typography>
                        </span>
                        <Typography variant='caption'>часы</Typography>
                    </div>
                    <span>:</span>
                    <div>
                        <span>
                            <Typography variant='h6'>{formatNumber(minutes)}</Typography>
                        </span>
                        <Typography variant='caption'>минуты</Typography>
                    </div>
                    <span>:</span>
                    <div>
                        <span>
                            <Typography variant='h6'>{formatNumber(seconds)}</Typography>
                        </span>
                        <Typography variant='caption'>секунды</Typography>
                    </div>
                </div>
            );
        }
    };

    const classes = useStyles();
    return (
        <div className={classes.lotTimer}>
            <Typography variant="subtitle1" color="initial">
                Окончание торгов через:
            </Typography>
            <Countdown date={date} renderer={renderer}/>
        </div>
    )
}