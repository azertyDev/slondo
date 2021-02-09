import React, {FC} from 'react';
import {WithT} from "i18next";
import {Grid, Step, StepLabel, Stepper, Typography, IconButton} from '@material-ui/core';
import {ButtonComponent} from '@src/components/elements/button/Button';
import {BackspaceIcon} from '@root/src/components/elements/icons';
import {useStyles} from './useStyles';
import {PostType} from "@root/interfaces/Post";

type AncmntAuctionTopPropsType = {
    activeStep: number;
    steps: string[];
    handleBackBtn: () => void;
    postType: PostType;
    isSuccessStep: boolean;
    isPostTypeStep: boolean;
};

export const PostHeader: FC<AncmntAuctionTopPropsType & WithT> = (props) => {
    const {
        t,
        postType,
        activeStep,
        steps,
        handleBackBtn,
        isSuccessStep,
        isPostTypeStep
    } = props;

    const classes = useStyles();
    return (
        <Grid container alignItems="center" className={classes.root}>
            <Grid item xs={3}>
                {!isPostTypeStep && !isSuccessStep
                && <div className='menu-header'>
                    <IconButton
                        className="back-btn"
                        onClick={handleBackBtn}
                    >
                        <BackspaceIcon/>
                    </IconButton>
                    <Typography variant="h6" color="initial">
                        {t(`common:${postType.name}`)}
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
