import {FC} from 'react';
import {Grid, Typography} from '@material-ui/core';
import {useTranslation} from 'next-i18next';
import {postTypes} from '@src/common_data/post_types';
import {MainLayout} from '@src/components/main_layout/MainLayout';
import {Steps} from '@src/components/post/create_post/steps/Steps';
import {useRouter} from 'next/router';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {useStyles} from './useStyles';


export const PostTypesPage: FC = () => {
    const {t} = useTranslation('post');
    const {push} = useRouter();

    const handlePostType = (url: string) => () => {
        push(url, null, {shallow: true});
    };

    const classes = useStyles();
    return (
        <MainLayout>
            <Steps activeStep={0}/>
            <div className={classes.root}>
                <Grid container spacing={2}>
                    {postTypes.map((postType, i) =>
                        <Grid
                            item
                            xs={4}
                            key={i}
                        >
                            <div
                                className={`${postType.name} post-wrapper`}
                            >
                                <div
                                    style={{backgroundImage: `url(${postType.image.url})`}}
                                >
                                    <Typography variant="subtitle1">
                                        {t(`common:${postType.name}`)}
                                    </Typography>
                                    <Typography variant="body2">
                                        {t(postType.subtitle)}
                                    </Typography>
                                </div>
                                <CustomButton
                                    onClick={handlePostType(`/create/type/${postType.name}`)}
                                >
                                    {t(`create_${postType.name}`)}
                                </CustomButton>
                            </div>
                            <div className="guide">
                                <a href="#">
                                    <Typography
                                        variant="subtitle2"
                                        className={postType.name}
                                    >
                                        {t(`${postType.guide}`)}
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
