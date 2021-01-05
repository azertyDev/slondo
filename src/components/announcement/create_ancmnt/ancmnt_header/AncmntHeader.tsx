import React, {FC} from "react";
import {Step, StepLabel, Stepper} from "@material-ui/core";
import {ButtonComponent} from "@src/components/elements/button/Button";
import {useStyles} from './useStyles';


type AncmntAuctionTopPropsType = {
    activeStep: number;
    steps: string[];
    handleBackBtn: () => void;
};

export const AncmntHeader: FC<AncmntAuctionTopPropsType> = ({activeStep, steps, handleBackBtn}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <ButtonComponent
                className='back-btn'
                onClick={handleBackBtn}
            >
                Назад
            </ButtonComponent>
            <div className='stepper-wrapper'>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </div>
        </div>
    )
};