import {FC, useEffect, useState} from 'react';
import {ITEMS_PER_PAGE} from '@src/constants';
import {userAPI} from '@src/api/api';
import {CardData, CardDataType} from '@root/interfaces/CardData';
import {initCardData} from '@src/common_data/common';
import {unstable_batchedUpdates} from "react-dom";
import Typography from "@material-ui/core/Typography";
// import {GridCard} from "@src/components/elements/card/grid_card/GridCard";
import {useStyles} from "./useStyles";

const initCards: CardDataType[] = [];

for (let i = 1; i <= 16; i++) {
    initCards.push(initCardData);
}

const initialCardData: CardData = {
    cards: initCards,
    total: null
};

export const SimilarPosts: FC<{ ancmntType: string }> = (props) => {
    const {ancmntType} = props;

    const [isFetch, setIsFetch] = useState(false);
    const [errMsg, setErrorMsg] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [cardData, setCardData] = useState(initialCardData);

    const type = ancmntType === 'post' ? 'auc' : 'exauc';

    const setFetchedCardData = async () => {
        try {
            const params = {
                itemsPerPage: ITEMS_PER_PAGE,
                page: currentPage,
                type
            };

            setIsFetch(true);

            const newData = await userAPI.getCards(params);

            unstable_batchedUpdates(() => {
                setIsFetch(false);
                setCardData({
                    cards: newData.data,
                    total: newData.total
                });
            });
        } catch (e) {
            unstable_batchedUpdates(() => {
                setIsFetch(false);
                setErrorMsg(e.message);
            });
        }
    };

    const handleShowMore = () => {
        setCurrentPage(currentPage + 1);
    };

    useEffect(() => {
        setFetchedCardData();
    }, [currentPage]);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="subtitle1" color="initial">
                Похожие объявления
            </Typography>
            {/*<GridCard isFetch={isFetch} {...cardData.cards}/>*/}
        </div>
    );
};
