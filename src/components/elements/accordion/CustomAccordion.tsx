import {FC} from 'react';
import {useTranslation} from 'next-i18next';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary, Box,
    Grid,
    Typography,
    useMediaQuery,
    useTheme
} from '@material-ui/core';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {useStyles} from './useStyles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

type AccordionComponentPropsType = {
    isFetch?: boolean,
    open: boolean,
    isPreview: boolean,
    icon: any,
    title: string,
    handleEdit?: () => void,
    isEditable: boolean,
    submitTxt: string
};

export const CustomAccordion: FC<AccordionComponentPropsType> = (props) => {
    const {
        isFetch,
        open,
        icon,
        isPreview,
        title,
        handleEdit,
        isEditable,
        submitTxt
    } = props;

    const {t} = useTranslation('common');
    const isXsDown = useMediaQuery(useTheme().breakpoints.down('xs'));

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Accordion expanded={open || isPreview}>
                <AccordionSummary>
                    <Box
                        display='flex'
                        padding='5px 15px'
                        className={classes.accordionTitle}
                    >
                        {icon}
                        <Typography variant='h6'>
                            {title}
                        </Typography>
                    </Box>
                    {!open && !isPreview && isEditable && (
                        <div className='header-preview'>
                            <span onClick={handleEdit}>{t('edit')}</span>
                        </div>
                    )}
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={isXsDown ? 0 : 2}>
                        {props.children}
                        {!isPreview && (
                            <Grid item xs={12} container>
                                <CustomButton
                                    disabled={isFetch}
                                    type='submit'
                                    className='nav-button'
                                >
                                    <Typography variant='subtitle1' component='p'>
                                        {t(`post:${submitTxt}`)}
                                    </Typography>
                                    <ArrowForwardIcon />
                                </CustomButton>
                            </Grid>
                        )}
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};