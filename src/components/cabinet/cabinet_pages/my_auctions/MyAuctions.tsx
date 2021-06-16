import {FC, ReactElement} from 'react';

type MyAuctionsPropsType = {
    auctionTabs: ReactElement,
}

export const MyAuctions: FC<MyAuctionsPropsType> = (props) => {
    const {
        auctionTabs,
    } = props;

    return (
        <>
            {auctionTabs}
        </>
    );
};
