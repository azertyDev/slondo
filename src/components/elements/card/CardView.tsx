import {FC} from 'react';
import {Box, Grid} from '@material-ui/core';
import {CardDataType} from '@root/interfaces/CardData';
import {ListCard} from '@src/components/elements/card/list_card/ListCard';
import {GridCard} from '@src/components/elements/card/grid_card/GridCard';
import {FavoriteBorderIcon} from '@src/components/elements/icons';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';

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
            ? <>
                {data.map(cardData =>
                    <Box mb={2} key={cardData.id}>
                        <ListCard cardData={cardData} />
                        {/*<CustomButton*/}
                        {/*    className='favorite'*/}
                        {/*>*/}
                        {/*    <FavoriteBorderIcon />*/}
                        {/*</CustomButton>*/}
                    </Box>
                )}
            </>
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