import {FC} from 'react';
import {CardView} from '@src/components/elements/card/card_view/CardView';


type SearchResultPropsType = {
    posts
};

export const SearchResult: FC<SearchResultPropsType> = (props) => {
    const {
        posts
    } = props;

    return (
        <div>
            <CardView
                listMode
                list={posts}
            />
        </div>
    );
};
