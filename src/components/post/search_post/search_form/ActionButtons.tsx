import {FC} from 'react';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {useTranslation} from 'next-i18next';
import {useStyles} from './useStyles';
import {Box, Typography} from '@material-ui/core';

type ActionButtonsPropsType = {
    handleReset
}

export const ActionButtons: FC<ActionButtonsPropsType> = (props) => {
    const {
        handleReset
    } = props;
    const {t} = useTranslation('filters');

    const classes = useStyles();
    return (
        <Box className={classes.actionButtons}>
            <CustomButton type='submit'>
                <Typography variant='subtitle1'>
                    {t('apply')}
                </Typography>
            </CustomButton>
            <CustomButton onClick={handleReset}>
                <Typography variant='subtitle1'>
                    {t('reset')}
                </Typography>
            </CustomButton>
        </Box>
    );
};