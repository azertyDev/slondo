import {FC, useContext, useState} from "react";
import {Typography} from "@material-ui/core";
import {CustomButton} from "@src/components/elements/custom_button/CustomButton";
import {ResponsiveModal} from "@src/components/elements/responsive_modal/ResponsiveModal";
import {useTranslation} from "next-i18next";
import {useFormik} from "formik";
import {complaintSchema} from "@root/validation_schemas/postSchemas";
import {CustomFormikProvider} from "@src/components/elements/custom_formik_provider/CustomFormikProvider";
import {FormikField} from "@src/components/elements/formik_field/FormikField";
import {TEXT_LIMIT} from "@src/constants";
import {useStyles} from './useStyles';
import {getErrorMsg} from "@src/helpers";
import {postAPI} from "@src/api/api";
import {ErrorCtx} from "@src/context";
import {unstable_batchedUpdates} from "react-dom";

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
            <CustomFormikProvider formik={formik}>
                <div className={classes.root}>
                    <Typography variant='h6'>
                        {t('post:indicateReason')}
                    </Typography>
                    <div className='textarea'>
                        <FormikField
                            t={t}
                            rows={10}
                            multiline
                            name='complaint'
                            value={complaint}
                            limit={TEXT_LIMIT}
                            placeholder={t('post:describeReason')}
                            errorMsg={getErrorMsg(errors.complaint, touched.complaint, t)}
                        />
                    </div>
                    <CustomButton disabled={isFetch} type='submit'>
                        <Typography variant='subtitle1'>
                            {t('common:send')}
                        </Typography>
                    </CustomButton>
                </div>
            </CustomFormikProvider>
        </ResponsiveModal>
    );
};