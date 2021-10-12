import {FC, useContext, useState} from 'react';
import {unstable_batchedUpdates} from "react-dom";
import {CabinetModal} from '@src/components/cabinet/components/cabinet_modal/CabinetModal';
import {
    Avatar,
    Box,
    Grid,
    List,
    ListItem,
    ListItemText,
    Typography
} from '@material-ui/core';
import {useFormik} from "formik";
import {userAPI} from '@src/api/api';
import {useTranslation} from 'next-i18next';
import {CommonModalType} from "@src/components/cabinet/Cabinet";
import {FormikField} from "@src/components/elements/formik_field/FormikField";
import {CustomButton} from "@src/components/elements/custom_button/CustomButton";
import {CustomFormikProvider} from "@src/components/elements/custom_formik_provider/CustomFormikProvider";
import {CustomCircularProgress} from '@src/components/elements/custom_circular_progress/CustomCircularProgress';
import {phoneSchema} from "@root/validation_schemas/authRegSchema";
import {getErrorMsg, phonePrepare, urlByParams} from "@src/helpers";
import {ErrorCtx} from "@src/context";
import {useRouter} from "next/router";
import {useStyles} from './useStyles';

enum SettingsModalPropsType {
    'restore',
    'deactivate',
    'deactivate_variants',
    'edit_post',
    'rise_in_tape',
    'confirm',
    'sold_on_slondo',
    'settings'
}

export const SettingsModal: FC<CommonModalType> = (props) => {
    const {
        post,
        open,
        onClose,
        handleRefresh
    } = props;

    const {push} = useRouter();
    const {t} = useTranslation('cabinet');
    const {setErrorMsg} = useContext(ErrorCtx);

    const isPost = post.ads_type === 'post';

    const initBuyer = {
        id: null,
        name: '',
        surname: '',
        avatar: ''
    };

    const isPublic = post.status === 'public';

    const [buyer, setBuyer] = useState(initBuyer);
    const [isFetch, setIsFetch] = useState(false);
    const [status, setStatus] = useState<keyof typeof SettingsModalPropsType>('settings');

    const isSoldOnSlondo = status === 'sold_on_slondo';

    const titleTxt = (_ => {
        switch (status) {
            case 'sold_on_slondo':
                return 'type_buyer_number';
            case 'confirm':
                return isPost ? 'deactivate_post' : 'deactivate_auction';
            case 'edit_post':
                return 'edit_post_confirm';
            case 'rise_in_tape':
                return isPost ? 'rise_post_in_tape' : 'rise_auction_in_tape';
            case "restore":
                return 'restore_post';
        }
    })();

    const reasons = {
        sold: 1,
        archive: 2
    };

    const onSubmit = async () => {
        try {
            setIsFetch(true);
            switch (status) {
                case 'confirm':
                case "sold_on_slondo": {
                    const data = {
                        user_id: buyer.id,
                        ads_id: post.id,
                        reason_id: isSoldOnSlondo ? reasons.sold : reasons.archive
                    };
                    isPost
                        ? await userAPI.deactivatePost(data)
                        : await userAPI.deactivateAuction(post.id);
                    break;
                }
                case 'rise_in_tape': {
                    await userAPI.ricePostInTape(post.id);
                    break;
                }
                case "restore": {
                    await userAPI.restoreFromArchive(post.id);
                    break;
                }
                case "edit_post": {
                    const postData = await userAPI.getPostById(post.id);
                    const postType = postData.ads_type.mark;
                    const categoryName = postData.category.name;
                    const subcategoryName = postData.adsable.sub_category.name;
                    const type = postData.adsable.type ? `&type_ctgr=${postData.adsable.type.name}` : '';
                    push(`/create?post_type=${postType}&main_ctgr=${categoryName}&sub_ctgr=${subcategoryName}${type}&post_id=${postData.id}${urlByParams(postData)}`);
                    return;
                }
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
        validationSchema: isSoldOnSlondo ? phoneSchema : null
    });

    const {values, setValues, errors, touched, handleReset} = formik;

    const handleInput = async ({target: {value}}) => {
        const regEx = new RegExp(/_/g);

        if (!regEx.test(value)) {
            try {
                setIsFetch(true);
                const params = {phone: phonePrepare(value)};
                const user = await userAPI.getUserByPhoneNumber(params);
                setBuyer(user);
                setIsFetch(false);
            } catch (e) {
                setIsFetch(false);
                setBuyer(null);
            }
        }

        setValues({phone: value});
    };

    const handleStatus = (status: keyof typeof SettingsModalPropsType) => () => {
        setStatus(status);
    };

    const handlePrevMenu = () => {
        unstable_batchedUpdates(() => {
            handleReset({phone: ''});
            setStatus('settings');
        });
    };

    const handleClose = () => {
        unstable_batchedUpdates(() => {
            onClose();
            setBuyer(initBuyer);
            setStatus('settings');
            handleReset({phone: ''});
        });
    };

    const getModalContent = () => {
        switch (status) {
            case 'settings':
                return <List
                    disablePadding
                    component="nav"
                    aria-label="main"
                    className={classes.settingsList}
                >
                    {isPublic
                        ? <>
                            <ListItem
                                button
                                onClick={handleStatus(isPost ? 'deactivate_variants' : 'confirm')}
                            >
                                <ListItemText
                                    primary={t('deactivate')}
                                    primaryTypographyProps={{variant: 'subtitle1'}}
                                />
                            </ListItem>
                            {isPost && (
                                <ListItem
                                    button
                                    onClick={handleStatus('edit_post')}
                                >
                                    <ListItemText
                                        primary={t('edit')}
                                        primaryTypographyProps={{variant: 'subtitle1'}}
                                    />
                                </ListItem>
                            )}
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
                        </>
                        : <ListItem
                            button
                            onClick={handleStatus('restore')}
                        >
                            <ListItemText
                                primary={t('restore')}
                                primaryTypographyProps={{variant: 'subtitle1'}}
                            />
                        </ListItem>}
                </List>;
            case 'deactivate_variants':
                return <List
                    disablePadding
                    component="nav"
                    aria-label="main"
                    className={classes.settingsList}
                >
                    <ListItem
                        button
                        onClick={handleStatus('sold_on_slondo')}
                    >
                        <ListItemText
                            primary={t('sold_on_slondo')}
                            primaryTypographyProps={{variant: 'subtitle1'}}
                        />
                    </ListItem>
                    <ListItem
                        button
                        onClick={handleStatus('confirm')}
                    >
                        <ListItemText
                            primary={t('to_archive')}
                            primaryTypographyProps={{variant: 'subtitle1'}}
                        />
                    </ListItem>
                </List>;
            case 'sold_on_slondo':
                return <Grid container spacing={2} className={classes.mt30}>
                    <Grid item container spacing={2} justifyContent='center'>
                        <Grid item xs={12} sm={6}>
                            <Box>
                                <FormikField
                                    t={t}
                                    type='tel'
                                    name='phone'
                                    value={values.phone}
                                    onChange={handleInput}
                                    helperText={t('(Нажмите отправить если не знаете номер)')}
                                    errorMsg={getErrorMsg(errors.phone, touched.phone, t)}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={8} sm={6}>
                            <Box
                                display='flex'
                                alignItems='center'
                                className={classes.userData}
                            >
                                {isFetch
                                    ? <CustomCircularProgress/>
                                    : !!buyer
                                        ? <>
                                            <Avatar src={buyer.avatar ?? ''}/>
                                            <Typography variant='subtitle2' noWrap>
                                                {buyer.name}<br/>
                                                {buyer.surname}
                                            </Typography>
                                        </>
                                        : <Typography>{t('user_not_found')}</Typography>}
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <CustomButton type='submit' className={classes.submitBtn}>
                            <Typography variant='subtitle1'>{t('common:send')}</Typography>
                        </CustomButton>
                    </Grid>
                </Grid>;
            case "restore":
            case 'edit_post':
            case 'confirm':
            case 'rise_in_tape':
                return <List
                    disablePadding
                    component="nav"
                    aria-label="main"
                    className={classes.settingsList}
                >
                    <CustomButton type='submit'>
                        <ListItemText
                            primary={t('common:yes')}
                            primaryTypographyProps={{variant: 'subtitle1'}}
                        />
                    </CustomButton>
                    <CustomButton onClick={handlePrevMenu}>
                        <ListItemText
                            primary={t('common:no')}
                            primaryTypographyProps={{variant: 'subtitle1'}}
                        />
                    </CustomButton>
                </List>;
        }
    };

    const classes = useStyles();
    return (
        <CabinetModal
            maxWidth='xs'
            openDialog={open}
            handleCloseDialog={handleClose}
            handlePrevMenu={handlePrevMenu}
            hasPrevBtn={status !== 'settings'}
        >
            {isFetch
                ? <CustomCircularProgress/>
                : <CustomFormikProvider formik={formik}>
                    {status === 'settings' && (
                        <Typography className={classes.title} variant="h6" align='center'>
                            {`${t(`common:${post.ads_type}`)} №: ${post.id}`}
                        </Typography>
                    )}
                    {titleTxt && (
                        <Typography
                            variant='h6'
                            align='center'
                            className={classes.title}
                        >
                            {t(titleTxt)}
                        </Typography>
                    )}
                    {getModalContent()}
                </CustomFormikProvider>}
        </CabinetModal>
    );
};
