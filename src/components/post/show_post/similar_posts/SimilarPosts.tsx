import {FC} from 'react';
import {GridMode} from '@src/components/elements/card/card_view/grid_mode/GridMode';
import Typography from '@material-ui/core/Typography';
import {useStyles} from './useStyles';

type SimilarPostsPropsType = {
    list,
    isFetch: boolean,
    handleShowMore: () => void
};

export const SimilarPosts: FC<SimilarPostsPropsType> = (props) => {
    const {isFetch, list, handleShowMore} = props;

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="subtitle1" color="initial">
                Похожие объявления
            </Typography>
            <GridMode isFetch={isFetch} data={list}/>
        </div>
    );
};
