import {FC} from 'react';
import {Box, Grid} from '@material-ui/core';
import {CardDataType} from '@root/interfaces/CardData';
import {ListCard} from '@src/components/elements/card/list_card/ListCard';
import {GridCard} from '@src/components/elements/card/grid_card/GridCard';

export type ViewPropsType = {
    isFetch?: boolean,
    listMode?: boolean,
    data?: CardDataType[],
    handleModalOpen?: (value?, id?) => void
};

export const CardView: FC<ViewPropsType> = (props) => {
    const {listMode, data, isFetch} = props;

    return (
        listMode
        ? <div>
            {data.map(cardData =>
                <Box mb={2} key={cardData.id}>
                    <ListCard cardData={cardData}/>
                </Box>
            )}
        </div>
        : <Grid container spacing={2}>
            {data.map((cardData, i) => (
                <Grid key={i} xs={6} sm={6} md={4} lg={3} item>
                    <GridCard
                        {...cardData}
                        isFetch={isFetch}
                    />
                </Grid>
            ))}
        </Grid>
    );

};