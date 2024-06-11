import {FC} from 'react';
import {useTranslation} from 'next-i18next';
import {Grid, Typography} from '@material-ui/core';
import {PayType} from '@src/components/cabinet/components/promote_modal/PromoteModal';
import {useStyles} from './useStyles';

type PaymentStageProps = {
    handleStage: (stage: PayType) => () => void;
};

export const PaymentStage: FC<PaymentStageProps> = props => {
    const {handleStage} = props;
    const {t} = useTranslation('cabinet');

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography className="select-service-title" variant="subtitle1">
                {t('payment_type')}
            </Typography>
            <Grid
                container
                item
                xs={12}
                spacing={2}
                className="pay-types-wrapper"
            >
                <Grid item xs={12} sm={4}>
                    <div onClick={handleStage('bonus')} className="bonuses-bg" />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <div onClick={handleStage('payme')} className="payme-bg" />
                </Grid>
            </Grid>
        </div>
    );
};
