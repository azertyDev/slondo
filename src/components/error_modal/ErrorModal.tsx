import {FC, useContext} from 'react';
import {Box, Grid, Typography} from '@material-ui/core';
import {ErrorCtx} from '@src/context';
import {CustomButton} from '../elements/custom_button/CustomButton';
import {useStyles} from './useStyles';
import {ResponsiveModal} from '@src/components/elements/responsive_modal/ResponsiveModal';
import {ModalHeader} from '@src/components/cabinet/components/modal_header/ModalHeader';
import Link from 'next/link';
import {useTranslation} from 'next-i18next';

export const ErrorModal: FC = () => {
    const {error: {isError, errorMsg}, resetError} = useContext(ErrorCtx);
    const {t} = useTranslation('errors');
    const onClose = () => {
        resetError();
    };

    const classes = useStyles();
    return (
        <ResponsiveModal
            maxWidth='xs'
            openDialog={isError}
            handleCloseDialog={onClose}
        >
            <ModalHeader
                title={t('error')}
                handleCloseDialog={onClose}
            />
            <Box mt={2} p={3} className={classes.root}>
                <Grid container spacing={2} justifyContent='center'>
                    <Grid item xs={12} container justifyContent='center'>
                        <Typography className="error-text" variant="h6" align='center' component='p'>
                            {errorMsg}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} container justifyContent='center'>
                        <Typography variant="subtitle1" color="initial" align='center'>
                            Что-то пошло не так... <br />
                            Свяжитесь с <Link href="/help/feedback"><a>службой поддержки</a></Link> если у вас есть
                            вопросы
                        </Typography>
                    </Grid>
                    <Grid item xs={6} container justifyContent='center'>
                        <CustomButton onClick={onClose} color='secondary'>
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
