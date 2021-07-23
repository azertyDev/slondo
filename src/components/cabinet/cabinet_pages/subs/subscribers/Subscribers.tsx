import React, {FC} from 'react';
import {SubscriptionItem} from '@src/components/cabinet/cabinet_pages/subs/subscription_item/SubscriptionItem';
import {useStyles} from './useStyles';
import {CircularProgress} from '@material-ui/core';
import {EmptyPage} from '@src/components/cabinet/components/empty_page/EmptyPage';
import {useTranslation} from 'next-i18next';

export const Subscribers: FC<any> = ({isFetch, subscribers, handleFollow}) => {
    const {t} = useTranslation();

    const classes = useStyles();
    return (
        <div className={classes.root}>
            {isFetch ? <CircularProgress color="primary" />
                : subscribers.length === 0
                    ? <EmptyPage
                        label={t('cabinet:empty.subscriber')}
                    />
                    : subscribers.map(({id, subscriber}) => (
                        <SubscriptionItem
                            key={id}
                            handleFollow={handleFollow}
                            user={subscriber}
                        />)
                    )}
        </div>
    );
};
