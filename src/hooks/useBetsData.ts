import {useContext, useState} from 'react';
import {unstable_batchedUpdates} from 'react-dom';
import {userAPI} from '@src/api/api';
import {ErrorCtx} from "@src/context";

type BetsStatesProps = {
    auction_id: number,
    page: number,
    itemsPerPage: number,
};

export const useBetsData = (props: BetsStatesProps) => {
    const {
        auction_id,
        page,
        itemsPerPage
    } = props;

    const {setErrorMsg} = useContext(ErrorCtx);
    const [bets, setBets] = useState([]);
    const [betsCount, setBetsCount] = useState(0);
    const [isBetsFetch, setIsBetsFetch] = useState(false);

    const setFetchedBetsData = async () => {
        try {
            const params = {
                auction_id,
                page,
                itemsPerPage
            };

            setIsBetsFetch(true);
            const {data, total} = await userAPI.getAuctionBets(params);
            setIsBetsFetch(false);

            unstable_batchedUpdates(() => {
                setBets(data);
                setBetsCount(total);
            });
        } catch (e) {
            unstable_batchedUpdates(() => {
                setErrorMsg(e.message);
                setIsBetsFetch(false);
            });
        }
    };

    return {
        bets,
        betsCount,
        isBetsFetch,
        setFetchedBetsData
    };
};