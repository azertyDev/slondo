import React, {FC} from 'react';
import {Link, useTranslation} from "@root/i18n";
import {Grid, Step, StepLabel, Stepper, Typography, IconButton} from '@material-ui/core';
import {BackspaceIcon} from '@root/src/components/elements/icons';
import {useStyles} from './useStyles';


type AncmntAuctionTopPropsType = {
    activeStep: number;
    backUrl?: string;
    title?: string;
};

export const CreatePostHeader: FC<AncmntAuctionTopPropsType> = (props) => {
    const {t} = useTranslation(['post']);

    const {
        title,
        activeStep,
        backUrl,
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
        <Grid
            container
            className={classes.root}
        >
            <Grid item xs={8}>
                {!isPostTypeStep
                && <div className='menu-header'>
                    <Link href={backUrl}>
                        <a>
                            <IconButton className="back-btn">
                                <BackspaceIcon/>
                            </IconButton>
                        </a>
                    </Link>
                    <Typography
                        noWrap
                        variant="h6"
                        title={title}
                    >
                        {title}
                    </Typography>
                </div>}
            </Grid>
            <Grid item xs={4}>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map(label =>
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    )}
                </Stepper>
            </Grid>
        </Grid>
    );
};
