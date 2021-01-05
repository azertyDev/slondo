import React, {FC} from "react";
import {Accordion, AccordionDetails, AccordionSummary, Typography} from '@material-ui/core';
import {useStyles} from './useStyles';


type AccordionComponentPropsTypes = {
    icon: string;
    title: string;
};

export const AccordionComponent: FC<AccordionComponentPropsTypes> = (props) => {
    const {icon, title} = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Accordion expanded={true}>
                <AccordionSummary id="panel1a-header">
                    <img src={icon} alt="icon"/>
                    <Typography className={classes.root}>
                        {title}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
};