import {FC} from 'react';
import {SubsItem} from '@src/components/cabinet/cabinet_pages/subs/subsTab/subs_item/SubsItem';
import {CircularProgress} from '@material-ui/core';
import {EmptyPage} from '@src/components/cabinet/components/empty_page/EmptyPage';
import {useTranslation} from 'next-i18next';
import {useStyles} from './useStyles';

type SubsTabProps = {
    subscribers?: boolean,
    isFetch: boolean,
    subs: any
}

export const SubsTab: FC<SubsTabProps> = ({isFetch, subscribers = false, subs}) => {
    const {t} = useTranslation('cabinet');

    const classes = useStyles();
    return (
        <div className={classes.root}>
            {isFetch
                ? <CircularProgress color="primary"/>
                : subs.length === 0
                    ? <EmptyPage
                        label={t(`empty.${subscribers ? 'subscriber' : 'subscription'}`)}
                    />
                    : subs.map(({id, subscription, subscriber}) =>
                        <SubsItem
                            key={id}
                            user={subscription ?? subscriber}
                        />
                    )}
        </div>
    );
};