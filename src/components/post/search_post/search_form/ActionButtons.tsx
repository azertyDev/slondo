import {FC} from 'react';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {useTranslation} from 'next-i18next';
import {Box, Typography, useMediaQuery, useTheme} from '@material-ui/core';
import {useStyles} from './useStyles';

type ActionButtonsPropsType = {
    handleReset
}

export const ActionButtons: FC<ActionButtonsPropsType> = (props) => {
    const {
        handleReset
    } = props;

    const {t} = useTranslation('filters');
    const isXs = useMediaQuery(useTheme().breakpoints.down('xs'));

    const classes = useStyles({isXs});
    return (
        <Box className={classes.actionButtons}>
            <CustomButton onClick={handleReset} color='silver'>
                <Typography variant='subtitle1' component='p'>
                    {t('reset')}
                </Typography>
            </CustomButton>
            <CustomButton type='submit' color='secondary'>
                <Typography variant='subtitle1' component='p'>
                    {t('apply')}
                </Typography>
            </CustomButton>
        </Box>
    );
};