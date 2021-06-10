import {FC, ReactNode} from 'react';
import {CustomLoader} from '@src/components/elements/custom_loader/CustomLoader';

type MyPostsPropsType = {
    isFetch: boolean,
    myPostCards: ReactNode;
}

export const MyPosts: FC<MyPostsPropsType> = (props) => {
    const {
        isFetch,
        myPostCards
    } = props;

    return (
        <>
            {isFetch ? <CustomLoader color="secondary" /> : myPostCards}
        </>
    );
};
