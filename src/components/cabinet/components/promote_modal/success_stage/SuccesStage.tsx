import {FC} from 'react';
import {useTranslation} from 'next-i18next';
import {Typography, Box} from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import {useStyles} from './useStyles';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';

type SuccessStageProps = {
    handleClose: () => void;
};

export const SuccessStage: FC<SuccessStageProps> = ({handleClose}) => {
    const {t} = useTranslation('cabinet');

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className="success-info">
                <CheckCircleOutlineIcon />
                <Typography variant="subtitle1">
                    {t('service_success_paid')}
                </Typography>
            </div>
            <Box
                display="flex"
                justifyContent="center"
                className="close-btn-wrapper"
                onClick={handleClose}
            >
                <CustomButton style={{color: '#fff'}}>
                    {t('common:close')}
                </CustomButton>
            </Box>
        </div>
    );
};
