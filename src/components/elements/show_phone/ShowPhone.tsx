import {FC, useContext, useState} from 'react';
import {userAPI} from '@src/api/api';
import {Box, Typography, Button, useMediaQuery, useTheme} from '@material-ui/core';
import {INCOGNITO_PHONES} from '@src/constants';
import {unstable_batchedUpdates} from 'react-dom';
import {ErrorCtx} from '@src/context';
import {useTranslation} from 'next-i18next';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {CustomCircularProgress} from '@src/components/elements/custom_circular_progress/CustomCircularProgress';
import {useModal} from '@src/hooks';
import {PhoneIcon} from '@src/components/elements/icons';
import {CustomModal} from '@src/components/elements/custom_modal/CustomModal';
import {useStyles} from './useStyles';

export const ShowPhone: FC<{ postId: number }> = ({postId}) => {
    const initPhones = {
        phone: null,
        additional_number: null
    };

    const {t} = useTranslation('post');
    const {setErrorMsg} = useContext(ErrorCtx);
    const [phones, setPhones] = useState(initPhones);
    const {phone, additional_number} = phones;
    const [notAvail, setNotAvail] = useState(false);

    const [isFetch, setIsFetch] = useState(false);
    const {modalOpen, handleModalOpen, handleModalClose} = useModal();
    const isXsDown = useMediaQuery(useTheme().breakpoints.down('xs'));

    const isIncognito = INCOGNITO_PHONES.some(p => p === phone);

    const fetchShowPhone = async () => {
        try {
            setIsFetch(true);
            const phones = await userAPI.getPostAuthorPhones(postId);

            unstable_batchedUpdates(() => {
                setPhones(phones);
                setIsFetch(false);
                isXsDown && handleModalOpen();
            });
        } catch ({response}) {
            const {message} = response.data;
            unstable_batchedUpdates(() => {
                setIsFetch(false);
                if (message !== 'forbidden:') {
                    setErrorMsg(message);
                } else {
                    setNotAvail(true);
                }
            });
        }
    };

    const handleShowPhone = () => {
        !phone && fetchShowPhone();
    };

    const classes = useStyles();
    return (
        <>
            <CustomButton className={classes.root} color="primary" onClick={handleShowPhone}>
                {isFetch
                    ? <CustomCircularProgress color='secondary'/>
                    : notAvail
                        ? <div>{t('number_not_available')}</div>
                        : <div>
                            {!isIncognito && (
                                <Typography component='p' variant='subtitle1'>
                                    {t(phone ?? 'show_phone')}
                                </Typography>
                            )}
                            {additional_number && (
                                <Typography component='p' variant='subtitle1'>
                                    {additional_number}
                                </Typography>
                            )}
                        </div>}
            </CustomButton>
            <CustomModal openModal={modalOpen} handleModalClose={handleModalClose}>
                <Box
                    width={1}
                    display='flex'
                    alignItems='center'
                    flexDirection='column'
                >
                    <Typography variant='subtitle1' gutterBottom>
                        {t('post:callToUser')}
                    </Typography>
                    {isFetch
                        ? <CustomCircularProgress color='secondary'/>
                        : <>
                            {!isIncognito && (
                                <a href={`tel:${phone}`} className={classes.phoneWrapper}>
                                    <Typography variant="subtitle1" color="initial">
                                        {phone}
                                    </Typography>
                                    <Button>
                                        <PhoneIcon/>
                                    </Button>
                                </a>
                            )}
                            {additional_number && (
                                <a href={`tel:${additional_number}`} className={classes.phoneWrapper}>
                                    <Typography variant="subtitle1" color="initial">
                                        {additional_number}
                                    </Typography>
                                    <Button>
                                        <PhoneIcon/>
                                    </Button>
                                </a>
                            )}
                        </>}
                </Box>
            </CustomModal>
        </>
    );
};