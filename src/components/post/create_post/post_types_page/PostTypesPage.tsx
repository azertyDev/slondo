import React, {FC} from 'react';
import {Grid, Typography} from '@material-ui/core';
import {useTranslation, Link} from '@root/i18n';
import {postTypes} from "@src/common_data/post_types_list";
import {MainLayout} from "@src/components/MainLayout";
import {Top} from "@src/components/post/create_post/top/Top";
import {useStyles} from './useStyles';


export const PostTypesPage: FC = () => {
    const {t} = useTranslation(['post']);

    const classes = useStyles();
    return (
        <MainLayout>
            <Top activeStep={0}/>
            <div className={classes.root}>
                <Grid container spacing={2}>
                    {postTypes.map((postType, i) =>
                        <Grid item xs={4} key={i}>
                            <Link href={`/create/type/${postType.name}`}>
                                <a className={postType.name}>
                                    <div
                                        className={postType.name}
                                        style={{backgroundImage: `url(${postType.image.url})`}}
                                    >
                                        <Typography variant="subtitle1">
                                            {t(`common:${postType.name}`)}
                                        </Typography>
                                        <Typography variant="body2">
                                            {t(`${postType.subtitle}`)}
                                        </Typography>
                                    </div>
                                </a>
                            </Link>
                            <div className="guide">
                                <a href="#">
                                    <Typography
                                        variant="subtitle2"
                                        className={postType.name}
                                    >
                                        ({t(`${postType.guide}`)})
                                    </Typography>
                                </a>
                                <Typography variant="subtitle1" color="initial">
                                    ({t('trainingVideo')})
                                </Typography>
                            </div>
                        </Grid>
                    )}
                </Grid>
            </div>
        </MainLayout>
    );
};
