import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {Typography} from '@material-ui/core';
import {useStyles} from './useStyles';

type ConfirmStageProps = {
    amount: number;
};

export const ConfirmStage: FC<ConfirmStageProps> = props => {
    const {t} = useTranslation('cabinet');
    const {amount} = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography>
                {t('to_write_off', {amount})} {t('bonuses')}
            </Typography>
        </div>
    );
};
