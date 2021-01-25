import React, {FC} from 'react';
import {Grid, Typography, ButtonBase} from '@material-ui/core';
import {useStyles} from './useStyles';
import {PostType} from "@root/interfaces/Post";


type AncmntTypesPageProps = {
    postTypes: PostType[];
    handlePostType: (ancmntType) => () => void;
};

export const PostTypesPage: FC<AncmntTypesPageProps> = ({postTypes, handlePostType}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                {postTypes.map((anType, i) => {
                    return (
                        <Grid item xs={4} key={i}>
                            <ButtonBase
                                onClick={handlePostType(anType)}
                                style={{backgroundImage: `url(${anType.image.url})`}}
                            >
                                <div>
                                    <Typography variant="subtitle1">{anType.name}</Typography>
                                    <Typography variant="body2">
                                        Размещайте товары или услуги совершенно бесплатно
                                    </Typography>
                                </div>
                            </ButtonBase>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    );
};
