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
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down('xs'));

    const classes = useStyles({isXs});
    return (
        <Box className={classes.actionButtons}>
            <CustomButton onClick={handleReset}>
                <Typography variant='subtitle1'>
                    {t('reset')}
                </Typography>
            </CustomButton>
            <CustomButton type='submit'>
                <Typography variant='subtitle1'>
                    {t('apply')}
                </Typography>
            </CustomButton>
        </Box>
    );
};