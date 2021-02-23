import React, {FC} from "react";
import {Accordion, AccordionDetails, AccordionSummary, Typography} from '@material-ui/core';
import {ButtonComponent} from "@src/components/elements/button/Button";
import {useStyles} from './useStyles';


type AccordionComponentPropsTypes = {
    isFetch?: boolean;
    open: boolean;
    icon?: any;
    title: string;
    nextButtonTxt: string;
};

export const CustomAccordion: FC<AccordionComponentPropsTypes> = (props) => {
    const {
        icon,
        title,
        nextButtonTxt,
        isFetch,
        open,
        children
    } = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Accordion expanded={open}>
                <AccordionSummary id="panel-header">
                    {icon}
                    <Typography variant='h5'>
                        {title}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className='acc-content'>
                        {children}
                    </div>
                    <div className='next-button-wrapper'>
                        <ButtonComponent
                            type='submit'
                            disabled={isFetch}
                            className='nav-button'
                        >
                            <Typography>
                                {nextButtonTxt}
                            </Typography>
                        </ButtonComponent>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    )
};