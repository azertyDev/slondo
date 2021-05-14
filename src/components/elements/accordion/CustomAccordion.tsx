import React, {FC} from "react";
import {Accordion, AccordionDetails, AccordionSummary, Typography} from '@material-ui/core';
import {CustomButton} from "@src/components/elements/custom_button/CustomButton";
import {useTranslation} from "next-i18next";
import {useStyles} from './useStyles';


type AccordionComponentPropsType = {
    isFetch?: boolean,
    open: boolean,
    isPreview: boolean,
    icon: any,
    title: string,
    nextButtonTxt: string,
    handleEdit?: () => void,
    isEditable: boolean,
};

export const CustomAccordion: FC<AccordionComponentPropsType> = (props) => {
    const {
        open,
        icon,
        isFetch,
        isPreview,
        title,
        nextButtonTxt,
        handleEdit,
        isEditable
    } = props;

    const {t} = useTranslation(['common']);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Accordion expanded={open || isPreview}>
                <AccordionSummary>
                    {icon}
                    <Typography variant='h5'>
                        {title}
                    </Typography>
                    {!open && !isPreview && isEditable && (
                        <div className='header-preview'>
                            <span onClick={handleEdit}>{t('edit')}</span>
                        </div>
                    )}
                </AccordionSummary>
                <AccordionDetails>
                    <div className='acc-content'>
                        {props.children}
                    </div>
                    {!isPreview && (
                        <div className='next-button-wrapper'>
                            <CustomButton
                                type='submit'
                                disabled={isFetch}
                                className='nav-button'
                            >
                                <Typography>
                                    {nextButtonTxt}
                                </Typography>
                            </CustomButton>
                        </div>
                    )}
                </AccordionDetails>
            </Accordion>
        </div>
    )
};