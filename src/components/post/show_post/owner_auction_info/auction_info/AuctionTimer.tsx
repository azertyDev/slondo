import React from 'react';
import { Typography } from '@material-ui/core';
import Countdown from 'react-countdown';
import {formatNumber} from '@src/helpers';

import { useStyles } from './useStyles';

export const AuctionTimer = ({ date }) => {

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return (
                <div>
                    <div className="timer-title">
                        <Typography variant="button" color="initial">
                            Аукцион закрыт:
                        </Typography>
                    </div>
                    <div>
                        <div>
                            <span className="disabled">
                                <Typography variant="h6">
                                    {formatNumber(days)}
                                </Typography>
                            </span>
                            <Typography variant="caption">дни</Typography>
                        </div>
                        <span>:</span>
                        <div>
                            <span className="disabled">
                                <Typography variant="h6">
                                    {formatNumber(hours)}
                                </Typography>
                            </span>
                            <Typography variant="caption">часы</Typography>
                        </div>
                        <span>:</span>
                        <div>
                            <span className="disabled">
                                <Typography variant="h6">
                                    {formatNumber(minutes)}
                                </Typography>
                            </span>
                            <Typography variant="caption">минуты</Typography>
                        </div>
                        <span>:</span>
                        <div>
                            <span className="disabled">
                                <Typography variant="h6">
                                    {formatNumber(seconds)}
                                </Typography>
                            </span>
                            <Typography variant="caption">секунды</Typography>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <div className="timer-title">
                        <Typography variant="button" color="initial">
                            Окончание торгов через:
                        </Typography>
                    </div>
                    <div>
                        <div>
                            <span>
                                <Typography variant="h6">
                                    {formatNumber(days)}
                                </Typography>
                            </span>
                            <Typography variant="caption">дни</Typography>
                        </div>
                        <span>:</span>
                        <div>
                            <span>
                                <Typography variant="h6">
                                    {formatNumber(hours)}
                                </Typography>
                            </span>
                            <Typography variant="caption">часы</Typography>
                        </div>
                        <span>:</span>
                        <div>
                            <span>
                                <Typography variant="h6">
                                    {formatNumber(minutes)}
                                </Typography>
                            </span>
                            <Typography variant="caption">минуты</Typography>
                        </div>
                        <span>:</span>
                        <div>
                            <span>
                                <Typography variant="h6">
                                    {formatNumber(seconds)}
                                </Typography>
                            </span>
                            <Typography variant="caption">секунды</Typography>
                        </div>
                    </div>
                </div>
            );
        }
    };

    const classes = useStyles();
    return (
        <div className={classes.lotTimer}>
            <Countdown date={date} renderer={renderer} />
        </div>
    );
};
