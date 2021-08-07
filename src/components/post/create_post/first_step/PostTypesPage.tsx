import {FC} from 'react';
import {Grid, Hidden, Typography} from '@material-ui/core';
import {useTranslation} from 'next-i18next';
import {postTypes} from '@src/common_data/post_types';
import {MainLayout} from '@src/components/main_layout/MainLayout';
import {StepsProgress} from '@src/components/post/create_post/steps_progress/StepsProgress';
import {useRouter} from 'next/router';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {DoubleCheckIcon} from '@src/components/elements/icons';
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
            <StepsProgress activeStep={0}/>
            <div className={classes.root}>
                <Grid container spacing={2}>
                    {postTypes.map((postType, i) =>
                        <Grid
                            item
                            key={i}
                            md={4}
                            xs={12}
                        >
                            <div
                                className={`${postType.name} post-wrapper`}
                            >
                                <Hidden smDown>
                                    <div className='post-title-text'>
                                        <Typography variant="subtitle1">
                                            {t(`common:${postType.name}`)}
                                        </Typography>
                                        <Hidden mdDown>
                                            <Typography variant="body2">
                                                {t(postType.subtitle)}
                                            </Typography>
                                        </Hidden>
                                    </div>
                                    <div style={{backgroundImage: `url(${postType.image.url})`}} className='post-img'/>
                                    <div className='post-bottom'>
                                        {Object.entries(postType.services).map(([key, value]) => (
                                            <div className={classes.postType} key={key}>
                                                <DoubleCheckIcon checked={value}/>
                                                <Typography
                                                    style={{color: value ? '#828282' : '#E0E0E0'}} variant="subtitle2"
                                                >
                                                    {t(`common:${key}`)}
                                                </Typography>
                                            </div>
                                        ))}
                                    </div>
                                </Hidden>
                                <Hidden mdUp>
                                    <Hidden xsDown>
                                        <div className='post-title-text'>
                                            <Typography variant="subtitle1">
                                                {t(`common:${postType.name}`)}
                                            </Typography>
                                        </div>
                                    </Hidden>
                                    <div className='post-bottom'>
                                        <div
                                            style={{backgroundImage: `url(${postType.image.url})`}}
                                            className='post-img'
                                        />
                                        <div className='options-wrapper'>
                                            {Object.entries(postType.services).map(([key, value]) => (
                                                <div className={classes.postType} key={key}>
                                                    <DoubleCheckIcon checked={value}/>
                                                    <Typography variant="subtitle2">
                                                        {t(`common:${key}`)}
                                                    </Typography>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </Hidden>
                                <CustomButton
                                    onClick={handlePostType(`/create/${postType.name}`)}
                                >
                                        {t(`create_${postType.name}`)}
                                </CustomButton>
                            </div>
                            <Hidden smDown>
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
                            </Hidden>
                        </Grid>
                    )}
                </Grid>
            </div>
        </MainLayout>
    );
};
