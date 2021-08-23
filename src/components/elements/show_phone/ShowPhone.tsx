import {FC, useContext, useState} from 'react';
import {userAPI} from "@src/api/api";
import {Typography, useMediaQuery, useTheme} from "@material-ui/core";
import {INCOGNITO_PHONES} from "@src/constants";
import {unstable_batchedUpdates} from "react-dom";
import {ErrorCtx} from "@src/context";
import {useTranslation} from "next-i18next";
import {CustomButton} from "@src/components/elements/custom_button/CustomButton";
import {CustomModal} from "@src/components/elements/custom_modal/CustomModal";
import {CustomCircularProgress} from "@src/components/elements/custom_circular_progress/CustomCircularProgress";
import {useModal} from "@src/hooks";
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
    const notAvailable = phone === 'number_not_available';

    const [isFetch, setIsFetch] = useState(false);
    const {modalOpen, handleModalOpen, handleModalClose} = useModal();
    const isXsDown = useMediaQuery(useTheme().breakpoints.down('xs'));

    const isIncognito = INCOGNITO_PHONES.some(p => p === phone);

    const handleShowPhone = async () => {
        try {
            setIsFetch(true);
            const phones = await userAPI.getPostAuthorPhones(postId);

            unstable_batchedUpdates(() => {
                setPhones(phones);
                setIsFetch(false);
            });
        } catch ({response: {data: {message}}}) {
            unstable_batchedUpdates(() => {
                setIsFetch(false);
                if (message !== 'forbidden:') {
                    setErrorMsg(message);
                } else {
                    setPhones({
                        ...phones,
                        phone: t('number_not_available')
                    });
                }
            });
        }
    };

    const handleOpen = () => {
        unstable_batchedUpdates(() => {
            !phone && handleShowPhone();
            isXsDown && handleModalOpen();
        });
    };

    const classes = useStyles();
    return (
        <>
            <CustomButton className={classes.root} color="primary" onClick={handleOpen}>
                <Typography variant="subtitle1" color="initial">
                    {isFetch
                        ? <CustomCircularProgress color='secondary'/>
                        : t(phone ?? 'show_phone')}
                </Typography>
            </CustomButton>
            <CustomModal openModal={modalOpen} handleModalClose={handleModalClose}>
                <Typography variant="subtitle1" color="initial">
                    {isFetch
                        ? <CustomCircularProgress color='secondary'/>
                        : <>
                            {!isIncognito && (
                                notAvailable
                                    ? <div>{t('number_not_available')}</div>
                                    : <>
                                        <a href={`tel:${phone}`}>{phone}</a>
                                        <br/>
                                    </>
                            )}
                            {additional_number && (
                                <span>
                                    <a href={`tel:${additional_number}`}>{additional_number}</a>
                                </span>
                            )}
                        </>}
                </Typography>
            </CustomModal>
        </>
    );
};