import React, {FC} from 'react';
import {useStyles} from './useStyles';
import {Box, Divider, Grid, Typography} from '@material-ui/core';
import {CabinetWrapper} from '@src/components/cabinet/CabinetWrapper';
import {WithT} from 'i18next';
import {useSelector} from 'react-redux';
import {RootState} from '@src/redux/rootReducer';
import {Rating} from '@src/components/elements/rating/Rating';
import {UserAvatarComponent} from '@root/src/components/elements/user_info_with_avatar/avatar/UserAvatarComponent';

type RatingsPropsType = {
    data
} & WithT;

export const Ratings: FC<RatingsPropsType> = (props) => {
    const {
        t,
        data
    } = props;


    const {rating, observer: {number_of_ratings}} = useSelector((store: RootState) => store.user.info);
    const title = t('rating');

    data.map(el => {
        const author = el.author;
        const comment = el.comments.filter((comment) => {
            return comment.author_id === author.id;
        });
        console.log(comment.author_id === author.id);
    });

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CabinetWrapper headerTitle={title} title={title}>
                <Grid item xs>
                    <Box
                        component="div"
                        mb={2}
                        className='owner-rating'
                        borderColor="transparent"
                        display='inline-block'
                    >
                        <Rating
                            name="rating"
                            ratingValue={rating?.slice(0, 3)}
                            ratingCount={number_of_ratings}
                        />
                    </Box>
                    <Divider variant='fullWidth' light />
                    <Box>
                        <Typography variant='subtitle1'>
                            Оценки и отзывы
                        </Typography>
                        {
                            data.map(el => {
                                const {author, comments} = el;
                                console.log(comments);
                                return (
                                    <Box key={el.id}>
                                        <UserAvatarComponent avatar={author.avatar} />
                                        <Box>
                                            {comments.map(({comment}) => (
                                                {comment}
                                            ))}
                                        </Box>
                                    </Box>
                                );
                            })
                        }
                    </Box>
                </Grid>
            </CabinetWrapper>
        </div>
    );
};
