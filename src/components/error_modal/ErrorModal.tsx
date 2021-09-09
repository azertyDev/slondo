import {FC, useContext} from 'react';
import Link from 'next/link';
import {ErrorCtx} from '@src/context';
import {useStyles} from './useStyles';
import {Box, Grid, Typography} from '@material-ui/core';
import {CustomButton} from '../elements/custom_button/CustomButton';
import {ResponsiveModal} from '@src/components/elements/responsive_modal/ResponsiveModal';
import {ModalHeader} from '@src/components/cabinet/components/modal_header/ModalHeader';
import {useTranslation} from 'next-i18next';

export const ErrorModal: FC = () => {
    const {error: {isError, errorMsg}, resetError} = useContext(ErrorCtx);
    const {t} = useTranslation('errors');

    const classes = useStyles();
    return (
        <ResponsiveModal
            maxWidth='xs'
            openDialog={isError}
            handleCloseDialog={resetError}
        >
            <ModalHeader
                title={t('error')}
                handleCloseDialog={resetError}
            />
            <Box p={3} className={classes.root}>
                <Grid container spacing={2} justifyContent='center'>
                    <Grid item xs={12} container justifyContent='center'>
                        <Box display='flex' flexDirection='column' alignItems='center'>
                            <Typography className="error-text" variant="h6" align='center' component='p' gutterBottom>
                                {errorMsg}
                            </Typography>
                            <img src="/img/server-error-bg.png" alt="server-error-bg" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} container justifyContent='center'>
                        <Typography variant="subtitle1" color="initial" align='center'>
                            {t('error_modal.text')} <br />
                            <Link href="/help/feedback">
                                <a>{t('error_modal.feedback_link_text')}</a>
                            </Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={6} container justifyContent='center'>
                        <CustomButton onClick={resetError} color='secondary'>
                            <Typography variant="subtitle1" component='p'>
                                Ок
                            </Typography>
                        </CustomButton>
                    </Grid>
                </Grid>
            </Box>
        </ResponsiveModal>
    );
};
