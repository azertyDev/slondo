import React, {FC} from 'react';
import {SubscriptionItem} from '@src/components/cabinet/cabinet_pages/subs/subscription_item/SubscriptionItem';
import {useStyles} from './useStyles';
import {CircularProgress} from '@material-ui/core';
import {EmptyPage} from '@src/components/cabinet/components/empty_page/EmptyPage';
import {useTranslation} from 'next-i18next';

export const Subscriptions: FC<any> = ({isFetch, subscriptions, handleFollow}) => {
    const {t} = useTranslation();

    const classes = useStyles();
    return (
        <div className={classes.root}>
            {isFetch ? <CircularProgress color="primary" />
                : subscriptions.length === 0
                    ? <EmptyPage
                        label={t('cabinet:empty.subscription')}
                    />
                    : subscriptions.map(({id, subscription}) => (
                        <SubscriptionItem
                            key={id}
                            handleFollow={handleFollow}
                            user={subscription}
                        />)
                    )}
        </div>
    );
};