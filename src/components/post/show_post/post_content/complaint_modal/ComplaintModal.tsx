import {FC, useContext, useState} from 'react';
import {useFormik} from 'formik';
import {unstable_batchedUpdates} from 'react-dom';
import {Box, Grid, Typography} from '@material-ui/core';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {ResponsiveModal} from '@src/components/elements/responsive_modal/ResponsiveModal';
import {useTranslation} from 'next-i18next';
import {complaintSchema} from '@root/validation_schemas/postSchemas';
import {CustomFormikProvider} from '@src/components/elements/custom_formik_provider/CustomFormikProvider';
import {FormikField} from '@src/components/elements/formik_field/FormikField';
import {TEXT_LIMIT} from '@src/constants';
import {getErrorMsg} from '@src/helpers';
import {postAPI} from '@src/api/api';
import {ErrorCtx} from '@src/context';
import {ModalHeader} from '@src/components/cabinet/components/modal_header/ModalHeader';
import {useStyles} from './useStyles';

type ComplaintModalProps = {
    postId: number,
    open: boolean,
    onClose: () => void
}

export const ComplaintModal: FC<ComplaintModalProps> = (props) => {
    const {
        postId,
        open,
        onClose
    } = props;

    const initialValues = {
        complaint: ''
    };

    const {setErrorMsg} = useContext(ErrorCtx);

    const [isFetch, setIsFetch] = useState(false);

    const handleClose = () => {
        unstable_batchedUpdates(() => {
            onClose();
            setTouched({});
            setValues({complaint: ''});
        });
    };

    const onSubmit = async ({complaint}) => {
        try {
            setIsFetch(true);
            await postAPI.complaint(postId, complaint);
            unstable_batchedUpdates(() => {
                setIsFetch(false);
                handleClose();
            });
        } catch (e) {
            unstable_batchedUpdates(() => {
                setIsFetch(false);
                setErrorMsg(e.message);
            });
        }
    };

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema: complaintSchema
    });

    const {
        values: {complaint},
        setValues,
        errors,
        touched,
        setTouched
    } = formik;

    const {t} = useTranslation('post');

    const classes = useStyles();
    return (
        <ResponsiveModal
            maxWidth='sm'
            openDialog={open}
            handleCloseDialog={handleClose}
        >
            <ModalHeader
                title={t('post:indicateReason')}
                handleCloseDialog={handleClose}
            />
            <Box className={classes.root} p={2} width={1}>
                <CustomFormikProvider formik={formik}>
                    <Grid container spacing={2} justifyContent='center'>
                        <Grid item xs={12}>
                            <FormikField
                                t={t}
                                rows={10}
                                multiline
                                name='complaint'
                                value={complaint}
                                limit={TEXT_LIMIT}
                                fullWidth
                                placeholder={t('post:describeReason')}
                                errorMsg={getErrorMsg(errors.complaint, touched.complaint, t)}
                            />
                        </Grid>
                        <Grid item xs={6} sm={5}>
                            <CustomButton disabled={isFetch} type='submit' color='secondary'>
                                <Typography variant='subtitle1' component='p'>
                                    {t('common:send')}
                                </Typography>
                            </CustomButton>
                        </Grid>
                    </Grid>
                </CustomFormikProvider>
            </Box>
        </ResponsiveModal>
    );
};