import React, {FC} from 'react';
import {ViewPropsType} from '@root/src/components/elements/card/card_view/CardView';
import {useStyles} from './useStyles';
import {CabinetCard} from '@src/components/cabinet/cabinet_card/CabinetCard';


export const MyPosts: FC<ViewPropsType> = (props) => {
    const { isFetch, list } = props;

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CabinetCard listMode={true} list={list} isFetch={isFetch} />
        </div>
    );
};
