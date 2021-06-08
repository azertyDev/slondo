import React, {FC} from 'react';
import {ViewPropsType} from '@src/components/elements/card/card_view/CardView';
import {useTranslation} from 'react-i18next';
import {useStyles} from './useStyles';
import {ListCard} from '@src/components/elements/card/list_card/ListCard';

export const ListMode: FC<ViewPropsType> = ({data}) => {
    const {t} = useTranslation('common');
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {data.map(cardData => <ListCard cardData={cardData} />)}
        </div>
    );
};
