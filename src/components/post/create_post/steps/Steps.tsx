import React, {FC} from 'react';
import {useTranslation} from "next-i18next";
import {Grid, Step, StepLabel, Stepper, Typography, IconButton} from '@material-ui/core';
import {BackspaceIcon} from '@root/src/components/elements/icons';
import {useStyles} from './useStyles';


type AncmntAuctionTopPropsType = {
    activeStep: number;
    title?: string;
    handleBack?: () => void
};

export const Steps: FC<AncmntAuctionTopPropsType> = (props) => {
    const {t} = useTranslation(['post']);

    const {
        title,
        activeStep,
        handleBack
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
                {!isPostTypeStep && <div className='menu-header'>
                    <IconButton className="back-btn" onClick={handleBack}>
                        <BackspaceIcon/>
                    </IconButton>
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