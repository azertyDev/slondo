import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {Typography} from '@material-ui/core';
import {useStyles} from './useStyles';

type ConfirmStageProps = {
    amount: number;
    notEnoughBonus: boolean;
};

export const ConfirmStage: FC<ConfirmStageProps> = props => {
    const {t} = useTranslation('cabinet');
    const {amount, notEnoughBonus} = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography className='write-off-title'>
                {t('to_write_off', {amount})} {t('bonuses')}
            </Typography>
            {notEnoughBonus && (
                <Typography className='error-text'>
                    {t('not_enough_bonus')}
                </Typography>
            )}
        </div>
    );
};
