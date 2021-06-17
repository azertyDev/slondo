import {useState} from 'react';
import {userAPI} from '@src/api/api';
import {setErrorMsgAction} from '@src/redux/slices/errorSlice';
import {useDispatch} from 'react-redux';

type BetsStatesProps = {
    auction_id: number,
    page: number,
    itemsPerPage: number,
    archive?: number
};

export const useBetsData = (props: BetsStatesProps) => {
    const {
        auction_id,
        page,
        itemsPerPage,
        archive = 0
    } = props;

    const dispatch = useDispatch();
    const [bets, setBets] = useState([]);
    const [betsCount, setBetsCount] = useState(0);
    const [isBetsFetch, setIsBetsFetch] = useState(false);

    const setFetchedBetsData = async () => {
        try {
            const params = {
                auction_id,
                page,
                itemsPerPage,
                archive
            };

            setIsBetsFetch(true);

            const {data, total} = await userAPI.getAuctionBets(params);

            setIsBetsFetch(false);

            setBets(data);
            setBetsCount(total);
        } catch (e) {
            setIsBetsFetch(false);
            dispatch(setErrorMsgAction(e.message));
        }
    };

    return {
        bets,
        betsCount,
        isBetsFetch,
        setFetchedBetsData
    };
};