import React, { FC } from 'react';
import { Grid, Step, StepLabel, Stepper, Typography } from '@material-ui/core';
import { ButtonComponent } from '@src/components/elements/button/Button';
import { BackspaceIcon } from '@root/src/components/elements/icons';
import { useStyles } from './useStyles';

type AncmntAuctionTopPropsType = {
    activeStep: number;
    steps: string[];
    handleBackBtn: () => void;
};

export const PostHeader: FC<AncmntAuctionTopPropsType> = ({
    activeStep,
    steps,
    handleBackBtn,
}) => {
    const classes = useStyles();
    return (
        <Grid container alignItems="center" className={classes.root}>
            <Grid item xs={3}>
                {activeStep !== 0 && activeStep !== 4 && (
                    <ButtonComponent
                        className="back-btn"
                        onClick={handleBackBtn}
                    >
                        <BackspaceIcon />
                        <Typography variant="h6" color="initial">
                            Объявление
                        </Typography>
                    </ButtonComponent>
                )}
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
