import React, {FC} from "react";
import {Accordion, AccordionDetails, AccordionSummary, Typography} from '@material-ui/core';
import {ButtonComponent} from "@src/components/elements/button/Button";
import {useTranslation} from "@root/i18n";
import {useStyles} from './useStyles';


type AccordionComponentPropsType = {
    isFetch?: boolean,
    open: boolean,
    isPreview: boolean,
    icon?: any,
    title: string,
    nextButtonTxt: string,
    handleOpen: (k, e) => void
    formKey: string
};

export const CustomAccordion: FC<AccordionComponentPropsType> = (props) => {
    const {
        icon,
        title,
        nextButtonTxt,
        isFetch,
        open,
        isPreview,
        children,
        handleOpen,
        formKey,
    } = props;

    const {t} = useTranslation(['common']);

    const onClick = () => {
        handleOpen(formKey, true);
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Accordion expanded={open}>
                <AccordionSummary>
                    {icon}
                    <Typography variant='h5'>
                        {title}
                    </Typography>
                    {!open && (
                        <div className='header-preview'>
                            <span onClick={onClick}>{t('edit')}</span>
                        </div>
                    )}
                </AccordionSummary>
                <AccordionDetails>
                    <div className='acc-content'>
                        {children}
                    </div>
                    {!isPreview && (
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
                    )}
                </AccordionDetails>
            </Accordion>
        </div>
    )
};