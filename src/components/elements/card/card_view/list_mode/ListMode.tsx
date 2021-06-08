import {FC} from 'react';
import {ViewPropsType} from '@src/components/elements/card/card_view/CardView';
import {ListCard} from '@src/components/elements/card/list_card/ListCard';
import {Box} from '@material-ui/core';
import {useStyles} from './useStyles';

export const ListMode: FC<ViewPropsType> = ({data}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {data.map(cardData =>
                <Box mb={2} key={cardData.id}>
                    <ListCard cardData={cardData}/>
                </Box>
            )}
        </div>
    );
};
