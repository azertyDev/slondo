import React, {FC} from 'react';
import {Link, useTranslation} from "@root/i18n";
import {Grid, Step, StepLabel, Stepper, Typography, IconButton} from '@material-ui/core';
import {BackspaceIcon} from '@root/src/components/elements/icons';
import {useStyles} from './useStyles';


type AncmntAuctionTopPropsType = {
    activeStep: number;
    backUrl?: string;
    postType?: string;
};

export const PostHeader: FC<AncmntAuctionTopPropsType> = (props) => {
    const {t} = useTranslation(['post']);

    const {
        activeStep,
        backUrl,
        postType
    } = props;

    const isPostTypeStep = activeStep === 0;

    const steps = [
        t('postType'),
        t('category'),
        t('fill'),
        t('check')
    ];

    const classes = useStyles();
    return (
        <Grid container alignItems="center" className={classes.root}>
            <Grid item xs={3}>
                {!isPostTypeStep
                && <div className='menu-header'>
                    <Link href={backUrl}>
                        <a>
                            <IconButton className="back-btn">
                                <BackspaceIcon/>
                            </IconButton>
                        </a>
                    </Link>
                    <Typography variant="h6" color="initial">
                        {t(`common:${postType}`)}
                    </Typography>
                </div>}
            </Grid>
            <Grid container justify="center" item xs={9}>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Grid>
        </Grid>
    );
};
