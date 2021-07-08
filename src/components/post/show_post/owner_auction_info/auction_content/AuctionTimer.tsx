import React from 'react';
import {Typography} from '@material-ui/core';
import Countdown from 'react-countdown';
import {formatNumber} from '@src/helpers';

import {useStyles} from './useStyles';
import {useTranslation} from 'next-i18next';

export const AuctionTimer = ({date}) => {

    const {t} = useTranslation('common');
    const renderer = ({days, hours, minutes, seconds, completed}) => {
        if (completed) {
            return (
                <div>
                    <div className="timer-title">
                        <Typography variant="button" color="initial">
                            {t('common:auctionExpired')}:
                        </Typography>
                    </div>
                    <div>
                        <div>
                            <span className="disabled">
                                <Typography variant="h6">
                                    {formatNumber(days)}
                                </Typography>
                            </span>
                            <Typography variant="caption">{t('common:days')}</Typography>
                        </div>
                        <span>:</span>
                        <div>
                            <span className="disabled">
                                <Typography variant="h6">
                                    {formatNumber(hours)}
                                </Typography>
                            </span>
                            <Typography variant="caption">{t('common:hours')}</Typography>
                        </div>
                        <span>:</span>
                        <div>
                            <span className="disabled">
                                <Typography variant="h6">
                                    {formatNumber(minutes)}
                                </Typography>
                            </span>
                            <Typography variant="caption">{t('common:minutes')}</Typography>
                        </div>
                        <span>:</span>
                        <div>
                            <span className="disabled">
                                <Typography variant="h6">
                                    {formatNumber(seconds)}
                                </Typography>
                            </span>
                            <Typography variant="caption">{t('common:seconds')}</Typography>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <div className="timer-title">
                        <Typography variant="button" color="initial">
                            {t('common:auctionExpirationAt')}:
                        </Typography>
                    </div>
                    <div>
                        <div>
                            <span>
                                <Typography variant="h6">
                                    {formatNumber(days)}
                                </Typography>
                            </span>
                            <Typography variant="caption">{t('common:days')}</Typography>
                        </div>
                        <span>:</span>
                        <div>
                            <span>
                                <Typography variant="h6">
                                    {formatNumber(hours)}
                                </Typography>
                            </span>
                            <Typography variant="caption">{t('common:hours')}</Typography>
                        </div>
                        <span>:</span>
                        <div>
                            <span>
                                <Typography variant="h6">
                                    {formatNumber(minutes)}
                                </Typography>
                            </span>
                            <Typography variant="caption">{t('common:minutes')}</Typography>
                        </div>
                        <span>:</span>
                        <div>
                            <span>
                                <Typography variant="h6">
                                    {formatNumber(seconds)}
                                </Typography>
                            </span>
                            <Typography variant="caption">{t('common:seconds')}</Typography>
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
