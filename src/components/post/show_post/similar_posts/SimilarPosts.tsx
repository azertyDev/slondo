import {FC} from 'react';
import {GridCard} from '@src/components/elements/card/grid_card/GridCard';
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
            <GridCard isFetch={isFetch} {...list}/>
        </div>
    );
};
