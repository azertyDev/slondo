import {FC, useEffect, useState} from 'react';
import {Box, FormControlLabel, Switch, Typography} from '@material-ui/core';
import {numberPrettier} from '@src/helpers';
import {Notification} from '@src/components/cabinet/cabinet_pages/notifications/notification_card/Notification';
import {CustomPagination} from '@src/components/elements/custom_pagination/CustomPagination';
import {ITEMS_PER_PAGE} from '@src/constants';
import {CabinetModal} from '@src/components/cabinet/components/cabinet_modal/CabinetModal';
import {useTranslation} from 'next-i18next';
import {userAPI} from '@src/api/api';
import {setErrorMsgAction} from '@src/redux/slices/errorSlice';
import {initialNotificationType} from '@src/components/cabinet/cabinet_pages/notifications/NotificationsContainer';
import {useDispatch} from 'react-redux';

type NotificationModalPropsType = {
    open: boolean,
    onClose: () => void,
    post
};

export const NotificationModal: FC<NotificationModalPropsType> = (props) => {
    const {
        open,
        onClose,
        post
    } = props;

    const dispatch = useDispatch();
    const {t} = useTranslation('cabinet');

    const [isFetch, setIsFetch] = useState(false);
    const [itemsCount, setItemsCount] = useState(0);
    const [page, setPage] = useState(1);
    const [phone, setPhone] = useState(null);

    const [notification, setNotification] = useState<initialNotificationType[]>([]);

    const fetchAuctionNotifications = async (_, page) => {
        try {
            setIsFetch(true);
            const params = {
                ads_id: post.id,
                page,
                itemsPerPage: ITEMS_PER_PAGE
            };

            const {data, total} = await userAPI.getNotificationById(params);

            setItemsCount(total);
            setNotification(data);
            setIsFetch(false);
        } catch (e) {
            setIsFetch(false);
            dispatch(setErrorMsgAction(e.message));
        }
    };

    const fetchUserPhone = (user_id) => async () => {
        try {
            setIsFetch(true);

            const {phone} = await userAPI.getPhoneByUserId(user_id);

            setPhone(phone);
            setIsFetch(false);
        } catch (e) {
            setIsFetch(false);
            dispatch(setErrorMsgAction(e.message));
        }
    };

    const handleDeleteNotification = () => {
        try {

        } catch (e) {
            
        }
    };

    useEffect(() => {
        !!post.id && fetchAuctionNotifications(null, 1);
    }, [post.id]);

    return (
        <CabinetModal
            openDialog={open}
            handleCloseDialog={onClose}
        >
            <Box
                display='flex'
                alignItems='center'
                flexDirection='column'
            >
                <Typography variant='subtitle1' gutterBottom>
                    {t('common:notificationsStories')}
                </Typography>
                <Typography variant='caption'>
                    {`${t(`common:${post.ads_type}`)} №: ${post.id}`}
                </Typography>
            </Box>
            <Box
                display='flex'
                flexDirection='row'
                alignItems='center'
                justifyContent='space-between'
            >
                <Typography>
                    {`${t('common:extremeRate')}: ${numberPrettier(post?.auction?.bet?.bet) || 0} ${t('common:sum')}`}
                </Typography>
                <FormControlLabel
                    control={
                        <Switch
                            // checked={state.checkedA}
                            // onChange={handleChange}
                            name="checkedA"
                            color='primary'
                        />
                    }
                    label={t('common:notifyMe')}
                    labelPlacement="start"
                />
            </Box>
            {/*{notification.map(notification => (*/}
            {/*    <Box*/}
            {/*        mb={1}*/}
            {/*        key={notification.id}*/}
            {/*    >*/}
            {/*        <Notification*/}
            {/*            t={t}*/}
            {/*            phone={phone}*/}
            {/*            data={notification}*/}
            {/*            fetchUserPhone={fetchUserPhone}*/}
            {/*            handleDeleteNotification={handleDeleteNotification}*/}
            {/*        />*/}
            {/*    </Box>*/}
            {/*))}*/}
            {/*{notification.length > ITEMS_PER_PAGE && (*/}
            {/*    <Box display='flex' justifyContent='center'>*/}
            {/*        <CustomPagination*/}
            {/*            currentPage={page}*/}
            {/*            totalItems={itemsCount}*/}
            {/*            itemsPerPage={ITEMS_PER_PAGE}*/}
            {/*            handlePagePagination={handlePagePagination}*/}
            {/*        />*/}
            {/*    </Box>*/}
            {/*)}*/}
        </CabinetModal>
    );
};
