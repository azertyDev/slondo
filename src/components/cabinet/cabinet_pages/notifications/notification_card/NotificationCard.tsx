import {FC, useContext, useState} from 'react';
import {unstable_batchedUpdates} from "react-dom";
import Link from 'next/link';
import {Box, Button, IconButton, Paper, Typography} from '@material-ui/core';
import {Phone, Error} from '@material-ui/icons';
import {CloseIcon} from '@src/components/elements/icons';
import {userAPI} from "@src/api/api";
import {useTranslation} from "next-i18next";
import {ErrorCtx} from "@src/context";
import {CustomCircularProgress} from "@src/components/elements/custom_circular_progress/CustomCircularProgress";
import {ITEMS_PER_PAGE} from "@src/constants";
import {useStyles} from './useStyles';

export type NotificationDataType = {
    id: number,
    title: string,
    message: string,
    ads_id: number,
    created_at: string,
    go_to,
    go_to_type,
    handleRefresh: () => void,
    setNotifications,
    handleOpenSnackbar
};

export const NotificationCard: FC<NotificationDataType> = (props) => {
    const {
        id,
        title,
        message,
        ads_id,
        created_at,
        go_to_type,
        handleRefresh,
        setNotifications,
        handleOpenSnackbar
    } = props;
    console.log(props);
    const {t} = useTranslation('notifications');
    const {setErrorMsg} = useContext(ErrorCtx);

    const date = new Date(created_at);

    const [isFetch, setIsFetch] = useState(false);
    const [phone, setPhone] = useState(null);

    const fetchUserPhone = async () => {
        try {
            setIsFetch(true);
            const {phone} = await userAPI.getPhoneByUserId(ads_id);
            unstable_batchedUpdates(() => {
                setPhone(phone);
                setIsFetch(false);
            });
        } catch (e) {
            unstable_batchedUpdates(() => {
                setIsFetch(false);
                setErrorMsg(e.message);
            });
        }
    };

    const handleDeleteNotification = async () => {
        try {
            setIsFetch(true);
            const params = {
                page: 1,
                itemsPerPage: ITEMS_PER_PAGE
            };
            await userAPI.deleteUserNotification(id);
            const {data} = await userAPI.getAllNotifications(params);

            unstable_batchedUpdates(() => {
                handleRefresh();
                handleOpenSnackbar();
                setNotifications(data);
                setIsFetch(false);
            });
        } catch (e) {
            unstable_batchedUpdates(() => {
                setIsFetch(false);
                setErrorMsg(e.message);
            });
        }
    };

    const classes = useStyles();
    return (
        <>
            <Typography variant='subtitle1' gutterBottom>
                {date.toLocaleDateString()}
            </Typography>
            <Paper elevation={0} className={classes.root}>
                <Box
                    mr={1}
                    display='flex'
                    alignItems='center'
                    flexDirection='column'
                    justifyContent='center'
                >
                    <Error color='secondary'/>
                    <Typography variant='caption'>
                        {`${date.getHours()}:${date.getMinutes()}`}
                    </Typography>
                </Box>
                <Box width='100%'>
                    <Box>
                        {!!title && (
                            <Typography variant="h6" color="initial">
                                {t(`titles.${title}`)}
                            </Typography>
                        )}
                        <Typography variant="subtitle1" color="initial">
                            {t(`descriptions.${message}`, {ads_id})}
                        </Typography>
                    </Box>
                    <Box display='flex' justifyContent='flex-end'>
                        {go_to_type !== 'go_to_user'
                            ? <Button
                                size="small"
                                color="secondary"
                                className='forward-to-btn'
                            >
                                {forwardTo(go_to_type)}
                            </Button>
                            : phone
                                ? <Button
                                    size="small"
                                    color="secondary"
                                    className='forward-to-btn'
                                >
                                    <Typography variant='subtitle1' color="secondary">
                                        {phone}
                                    </Typography>
                                </Button>
                                : isFetch
                                    ? <CustomCircularProgress/>
                                    : <Button
                                        size="small"
                                        color="secondary"
                                        className='forward-to-btn'
                                        onClick={fetchUserPhone}
                                    >
                                        <Phone className='phone-icon'/>
                                        <Typography variant='subtitle1' color="secondary">
                                            {t('show_phone')}
                                        </Typography>
                                    </Button>
                        }
                    </Box>
                </Box>
                <IconButton onClick={handleDeleteNotification}>
                    <CloseIcon/>
                </IconButton>
            </Paper>
        </>
    );

    function forwardTo(type: string) {
        switch (type) {
            case 'go_to_my_auction':
                return <Link href='/cabinet/auctions'>
                    <a>
                        <Typography variant='subtitle1' color="secondary">Перейти</Typography>
                    </a>
                </Link>;
            case 'go_to_my_post':
                return <Link href='/cabinet/posts'>
                    <a>
                        <Typography variant='subtitle1' color="secondary">Перейти</Typography>
                    </a>
                </Link>;
            case 'get_bet':
                return;
            case 'go_to_my_archive':
                return <Link href='/cabinet/archive'>
                    <a>
                        <Typography variant='subtitle1' color="secondary">Перейти</Typography>
                    </a>
                </Link>;
            case 'go_to_my_settings':
                return <Link href='/cabinet/settings'>
                    <a>
                        <Typography variant='subtitle1' color="secondary">В настройки</Typography>
                    </a>
                </Link>;
            case 'go_to_user':
                return <Link href='#'>
                    <a>
                        <Typography variant='subtitle1' color="secondary">Перейти</Typography>
                    </a>
                </Link>;
            case 'nowhere':
                return;
        }
    }

};
