import React, { FC } from 'react';
import { Grid, Typography, ButtonBase } from '@material-ui/core';
import { PostType } from '@root/interfaces/Post';
import { WithT } from 'i18next';
import { useStyles } from './useStyles';

type AncmntTypesPageProps = {
    postTypes: PostType[];
    handlePostType: (ancmntType) => () => void;
};

export const PostTypesPage: FC<AncmntTypesPageProps & WithT> = ({
    postTypes,
    handlePostType,
    t,
}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                {postTypes.map((anType, i) => {
                    return (
                        <Grid item xs={4} key={i}>
                            <ButtonBase onClick={handlePostType(anType)}>
                                <div
                                    style={{
                                        backgroundImage: `url(${anType.image.url})`,
                                    }}
                                    className='card-bg'
                                >
                                    <Typography variant="subtitle1">
                                        {t(`common:${anType.name}`)}
                                    </Typography>
                                    <Typography variant="body2">
                                        {t(`categories:${anType.subtitle}`)}
                                    </Typography>
                                </div>
                            </ButtonBase>
                            <div className="guide">
                                <a href="#">
                                    <Typography
                                        variant="subtitle2"
                                        color="initial"
                                        className={anType.name}
                                    >
                                        ({t(`categories:${anType.guide}`)})
                                    </Typography>
                                </a>
                                <Typography variant="subtitle1" color="initial">
                                    ({t('categories:trainingVideo')})
                                </Typography>
                            </div>
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
};
