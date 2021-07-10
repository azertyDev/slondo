import {FC, useContext, useState} from 'react';
import Link from 'next/link';
import {Box, Button, IconButton, Paper, Typography} from '@material-ui/core';
import {Phone, Error} from '@material-ui/icons';
import {CloseIcon} from '@src/components/elements/icons';
import {useStyles} from './useStyles';
import {userAPI} from "@src/api/api";
import {useTranslation} from "next-i18next";
import {ErrorCtx} from "@src/context";

export type NotificationDataType = {
    id: number,
    message: string,
    ads_id: number,
    created_at: string,
    go_to,
    go_to_type,
    handleRefresh: () => void
};

export const NotificationCard: FC<NotificationDataType> = (props) => {
    const {
        id,
        message,
        ads_id,
        created_at,
        go_to,
        go_to_type,
        handleRefresh
    } = props;

    const {t} = useTranslation('notifications');
    const {setErrorMsg} = useContext(ErrorCtx);

    const date = new Date(created_at);

    const [isFetch, setIsFetch] = useState(false);
    const [phone, setPhone] = useState(null);

    const fetchUserPhone = async () => {
        try {
            setIsFetch(true);
            const {phone} = await userAPI.getPhoneByUserId(ads_id);
            setPhone(phone);
            setIsFetch(false);
        } catch (e) {
            setIsFetch(false);
            setErrorMsg(e.message);
        }
    };

    const handleDeleteNotification = async () => {
        try {
            setIsFetch(true);

            const {message} = await userAPI.deleteUserNotification(id);
            const {data} = await userAPI.getAllNotifications();

            // setNotifications(data);
            // setMessage(message);
            // handleOpenSnackbar();
            handleRefresh();
            setIsFetch(false);
        } catch (e) {
            setIsFetch(false);
            setErrorMsg(e.message);
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
                        <Typography variant="h6" color="initial">
                            {t(`${message}.title`, {id: ads_id, user_id: go_to})}
                        </Typography>
                        <Typography variant="subtitle1" color="initial">
                            {t(`${message}.desc`, {user_id: go_to})}
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
                                    ? <Typography variant='subtitle1' color="secondary">
                                        ...Loading
                                    </Typography>
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
                                    </Button>}
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
