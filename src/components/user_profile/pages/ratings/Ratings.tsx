import {FC} from 'react';
import {useStyles} from './useStyles';
import {WithT} from 'i18next';
import {Box, Grid, Typography, useMediaQuery, useTheme} from '@material-ui/core';
import {Rating} from '@src/components/elements/rating/Rating';
import {UserAvatarComponent} from '@src/components/elements/user_info_with_avatar/avatar/UserAvatarComponent';
import {ReadMore} from '@src/components/elements/read_more/readMore';
import {useDate} from '@src/hooks';

type UserRatingsPropsType = {
    t,
    ratings,
    userInfo
} & WithT;

export const UserRatings: FC<UserRatingsPropsType> = (props) => {
    const {
        t,
        ratings,
        userInfo: {rating, observer: {number_of_ratings}}
    } = props;

    const isXsDown = useMediaQuery(useTheme().breakpoints.down('xs'));
    const {getDate} = useDate();

    const classes = useStyles();
    return (
        <>
            <Grid container spacing={isXsDown ? 0 : 2} className={classes.root}>
                <Grid item xs={12} container justifyContent={isXsDown ? 'center' : 'flex-start'}>
                    <Rating
                        readOnly
                        name="rating"
                        ratingValue={rating}
                        ratingCount={number_of_ratings}
                        className='mainRating'
                    />
                </Grid>
                <Grid item xs={12}>
                    <Box width={1} my={2} p='5px 30px' className='ratingHeader'>
                        <Typography variant='h6'>
                            {t('reviews_rating')}
                        </Typography>
                    </Box>
                    {ratings.map(({comments, rating}, index) => {
                        const [mainComment, ...replyComments] = comments;
                        const {time} = getDate(mainComment?.created_at);
                        return (
                            <Box key={index} className='review' pb={2} mb={2}>
                                <Box mb={2}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={10} container justifyContent='center'>
                                            <Grid item xs={2} container justifyContent='center'>
                                                <UserAvatarComponent
                                                    width={isXsDown ? '30px' : '50px'}
                                                    height={isXsDown ? '30px' : '50px'}
                                                    avatar={mainComment?.author?.avatar}
                                                />
                                            </Grid>
                                            <Grid item xs={10} container alignItems='center'>
                                                <Grid item xs={12} sm={9} md={8} lg={10}>
                                                    <Typography variant='subtitle1' gutterBottom>
                                                        <strong>
                                                            {`${mainComment?.author?.name ?? ''} ${mainComment?.author?.surname ?? ''}`}
                                                        </strong>
                                                    </Typography>
                                                    <Typography variant='caption' component='p' gutterBottom>
                                                        {time}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} sm={3} md={4} lg={2}>
                                                    <Rating ratingValue={rating} readOnly />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12} md={10} container justifyContent='flex-end'>
                                            <Grid item xs={12} sm={10}>
                                                <ReadMore id={mainComment?.id} threshold={55}>
                                                    <Typography variant='subtitle2'>
                                                        {mainComment?.comment}
                                                    </Typography>
                                                </ReadMore>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Grid item xs={12} md={10} container justifyContent='flex-end' spacing={2}>
                                    {replyComments.map((commentData, index) => {
                                        const {id, comment, created_at, author} = commentData;
                                        const {time} = getDate(created_at);
                                        if (index % 2) {
                                            return (
                                                <Grid item xs={12} sm={10} key={index}>
                                                    <Box>
                                                        <Box mb={2}>
                                                            <Typography variant='subtitle1' gutterBottom>
                                                                <strong>
                                                                    {`${author.name ?? ''} ${author.surname ?? ''}`}
                                                                </strong>
                                                            </Typography>
                                                            <Typography variant='caption' component='p'>
                                                                {time}
                                                            </Typography>
                                                        </Box>
                                                        <ReadMore id={id} threshold={55}>
                                                            <Typography variant='subtitle2'>
                                                                {comment}
                                                            </Typography>
                                                        </ReadMore>
                                                    </Box>
                                                </Grid>
                                            );
                                        }
                                        return (
                                            <Grid item xs={12} sm={10} key={index}>
                                                <Box className='review-answer'>
                                                    <Box mb={2}>
                                                        <Typography variant='subtitle1' gutterBottom>
                                                            <strong>
                                                                {`${author.name ?? ''} ${author.surname ?? ''}`}
                                                            </strong>
                                                        </Typography>
                                                        <Typography variant='caption' component='p'>
                                                            {time}
                                                        </Typography>
                                                    </Box>
                                                    <ReadMore id={id} threshold={55}>
                                                        <Typography variant='subtitle2'>
                                                            {comment}
                                                        </Typography>
                                                    </ReadMore>
                                                </Box>
                                            </Grid>
                                        );
                                    })}
                                </Grid>
                            </Box>
                        );
                    })}
                </Grid>
            </Grid>
        </>
    );
};
