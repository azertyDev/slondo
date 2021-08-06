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
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {useStyles} from './useStyles';

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
        <Accordion elevation={0} expanded={open || isPreview} className={classes.root}>
            <AccordionSummary>
                <Box
                    display='flex'
                    padding='5px 15px'
                    alignItems='center'
                    className={classes.accordionTitle}
                >
                    {icon}
                    <Typography
                        component='p'
                        variant={isXsDown ? 'subtitle1' : 'h6'}
                    >
                        {title}
                    </Typography>
                </Box>
                {!open && !isPreview && isEditable && (
                    <Typography
                        component='p'
                        variant='subtitle1'
                        className='header-preview'
                        onClick={handleEdit}
                    >
                        {t('edit')}
                    </Typography>
                )}
            </AccordionSummary>
            <AccordionDetails>
                <Grid container spacing={2}>
                    {props.children}
                    {!isPreview && (
                        <Grid item xs={12} container>
                            <CustomButton
                                type='submit'
                                disabled={isFetch}
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
    );
};