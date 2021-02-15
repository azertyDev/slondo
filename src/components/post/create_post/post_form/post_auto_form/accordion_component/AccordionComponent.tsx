import React, {FC} from "react";
import {Accordion, AccordionDetails, AccordionSummary, Typography} from '@material-ui/core';
import {ButtonComponent} from "@src/components/elements/button/Button";
import {useStyles} from './useStyles';


type AccordionComponentPropsTypes = {
    isFetch?: boolean;
    isPreview: boolean;
    icon?: string;
    title: string;
    nextBlockTitle: string;
};

export const AccordionComponent: FC<AccordionComponentPropsTypes> = (props) => {
    const {
        icon,
        title,
        nextBlockTitle,
        isFetch,
        isPreview,
        children
    } = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Accordion expanded={isPreview || true}>
                <AccordionSummary id="panel-header">
                    <img src={icon} alt="icon"/>
                    <Typography variant='h5'>
                        {title}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className='acc-content'>
                        {children}
                        <div className='next-button-wrapper'>
                            <ButtonComponent
                                type='submit'
                                disabled={isFetch}
                                className='nav-button'
                            >
                                <Typography>
                                    {nextBlockTitle}
                                </Typography>
                            </ButtonComponent>
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    )
};