import React, {FC} from 'react';
import {CardView} from '@src/components/elements/card/card_view/CardView';
import {useStyles} from './useStyles';
import {CustomModal} from '@src/components/elements/custom_modal/CustomModal';
import {FavoriteDataType} from '@src/components/cabinet/cabinet_pages/favorite/FavoriteContainer';

type FavoritePropsType = {
    isFetch: boolean,
    list: FavoriteDataType[],
    handleClose: () => void,
    openModal: boolean,
    content: string,
    handleModalOpen: (value, id) => void,
    handleRemoveFavorite: () => void
}

export const Favorite: FC<FavoritePropsType> = (props) => {
    const {
        list,
        handleClose,
        openModal,
        handleModalOpen,
        handleRemoveFavorite
    } = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CardView listMode={true} list={list} handleModalOpen={handleModalOpen} />
            <CustomModal
                handleModalClose={handleClose}
                openModal={openModal}
                handleRemoveFavorite={handleRemoveFavorite}
            />
        </div>
    );
};
