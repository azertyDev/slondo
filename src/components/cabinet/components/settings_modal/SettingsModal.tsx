import {FC, useContext, useState} from 'react';
import {unstable_batchedUpdates} from "react-dom";
import {ArrowBack} from '@material-ui/icons';
import {CabinetModal} from '@src/components/cabinet/components/cabinet_modal/CabinetModal';
import {
    Avatar,
    Box,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Typography
} from '@material-ui/core';
import {userAPI} from '@src/api/api';
import {useTranslation} from 'next-i18next';
import {CustomCircularProgress} from '@src/components/elements/custom_circular_progress/CustomCircularProgress';
import {CommonModalType} from "@src/components/cabinet/CabinetWrapper";
import {CustomButton} from "@src/components/elements/custom_button/CustomButton";
import {FormikField} from "@src/components/elements/formik_field/FormikField";
import {CustomFormikProvider} from "@src/components/elements/custom_formik_provider/CustomFormikProvider";
import {useFormik} from "formik";
import {phoneSchema} from "@root/validation_schemas/authRegSchema";
import {getErrorMsg} from "@src/helpers";
import {useStyles} from './useStyles';
import {ErrorCtx} from "@src/context";

enum SettingsModalPropsType {
    'deactivate',
    'rise_in_tape',
    'confirm',
    'sold_on_slondo'
}

export const SettingsModal: FC<CommonModalType> = (props) => {
    const {
        post,
        open,
        onClose,
        handleRefresh
    } = props;

    const {setErrorMsg} = useContext(ErrorCtx);
    const {t} = useTranslation('cabinet');
    const isPost = post.ads_type === 'post';
    const initBuyerState = {
        name: '',
        surname: '',
        avatar: ''
    };

    const [isFetch, setIsFetch] = useState(false);
    const [buyer, setBuyer] = useState(initBuyerState);
    const [status, setStatus] = useState<keyof typeof SettingsModalPropsType>('deactivate');

    const reasons = {
        sold: 1,
        archive: 2
    };

    const onSubmit = async () => {
        try {
            setIsFetch(true);
            switch (status) {
                case 'deactivate':
                case "sold_on_slondo":
                    const data = {
                        ads_id: post.id,
                        reason_id: status === 'deactivate' ? reasons.archive : reasons.sold
                    };
                    // await userAPI.deactivatePost(data);
                    break;
                case 'rise_in_tape':
                    await userAPI.ricePostInTape(post.id);
                    break;
            }
            unstable_batchedUpdates(() => {
                handleClose();
                handleRefresh();
                setIsFetch(false);
            });
        } catch (e) {
            unstable_batchedUpdates(() => {
                setIsFetch(false);
                setErrorMsg(e.message);
            });
        }
    };

    const formik = useFormik({
        onSubmit,
        initialValues: {phone: ''},
        validationSchema: phoneSchema
    });

    const {values, errors, touched, handleReset} = formik;

    const handleStatus = (status: keyof typeof SettingsModalPropsType) => () => {
        setStatus(status);
    };

    const handlePrevMenu = () => {
        unstable_batchedUpdates(() => {
            handleReset({phone: ''});
            setStatus('deactivate');
        });
    };

    const handleClose = () => {
        unstable_batchedUpdates(() => {
            onClose();
            handleReset({phone: ''});
            setStatus('deactivate');
        });
    };

    const classes = useStyles();
    const getModalContent = () => {
        switch (status) {
            case 'deactivate':
                return <List
                    component="nav"
                    aria-label="main"
                    disablePadding
                    className={classes.settingsList}
                >
                    <ListItem
                        button
                        onClick={handleStatus(isPost ? 'sold_on_slondo' : 'confirm')}
                    >
                        <ListItemText
                            primaryTypographyProps={{variant: 'subtitle1'}}
                            primary={t('deactivate')}
                        />
                    </ListItem>
                    <ListItem
                        button
                        onClick={handleStatus('rise_in_tape')}
                    >
                        <ListItemText
                            primary={t('rise_in_tape')}
                            secondary={t('can_use_in_week')}
                            primaryTypographyProps={{variant: 'subtitle1'}}
                            secondaryTypographyProps={{variant: 'subtitle2'}}
                        />
                    </ListItem>
                </List>;
            case 'sold_on_slondo':
                return <>
                    <Typography
                        variant='h6'
                        className="title"
                    >
                        {t('sold_on_slondo')}
                    </Typography>
                    <Box
                        width='100%'
                        display='flex'
                        justifyContent='space-between'
                        className={classes.userPhoneAndData}
                        mt={3}
                    >
                        <FormikField
                            t={t}
                            type='tel'
                            name='phone'
                            value={values.phone}
                            errorMsg={getErrorMsg(errors.phone, touched.phone, t)}
                        />
                        <Box className={classes.userData}>
                            {isFetch
                                ? <Typography>loading...</Typography>
                                : <>
                                    <Avatar src={buyer.avatar ?? ''}/>
                                    <Typography variant='subtitle2' noWrap>
                                        {buyer.name}
                                        {buyer.surname}
                                    </Typography>
                                </>}
                        </Box>
                    </Box>
                    <Box
                        mt={1}
                        width='100%'
                    >
                        <CustomButton type='submit' className={classes.submitBtn}>
                            <Typography variant='subtitle1'>{t('common:send')}</Typography>
                        </CustomButton>
                    </Box>
                </>;
            case 'confirm':
            case 'rise_in_tape':
                return <List
                    disablePadding
                    component="nav"
                    aria-label="main"
                    className={classes.settingsList}
                >
                    <ListItem
                        button
                        onClick={handlePrevMenu}
                    >
                        <ListItemText
                            primary={t('common:no')}
                            primaryTypographyProps={{variant: 'subtitle1'}}
                        />
                    </ListItem>
                    <CustomButton type='submit'>
                        <ListItemText
                            primary={t('common:yes')}
                            primaryTypographyProps={{variant: 'subtitle1'}}
                        />
                    </CustomButton>
                </List>;
        }
    };

    return (
        <CabinetModal
            maxWidth='xs'
            openDialog={open}
            handleCloseDialog={handleClose}
        >
            {isFetch
                ? <CustomCircularProgress/>
                : <CustomFormikProvider formik={formik}>
                    {status === 'deactivate'
                        ? <Typography className="title" variant="h6">
                            {`${t(`common:${post.ads_type}`)} №: ${post.id}`}
                        </Typography>
                        : <IconButton
                            size="medium"
                            aria-label="back"
                            className='prev-btn'
                            onClick={handlePrevMenu}
                        >
                            <ArrowBack fontSize="inherit"/>
                        </IconButton>}
                    {getModalContent()}
                </CustomFormikProvider>}
        </CabinetModal>
    );
};
