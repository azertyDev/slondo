import React, {FC} from 'react';


type SearchResultPropsType = {
    resultList
};

export const SearchResult: FC<SearchResultPropsType> = (props) => {
    const {resultList} = props;

    return (
        <div>
            Result
        </div>
    );
};
