import {FC} from 'react';
import {Box, Button, IconButton, Paper, Typography} from '@material-ui/core';
import {useStyles} from './useStyles';
import {CloseIcon} from '@src/components/elements/icons';
import Link from 'next/link';
import {WithT} from 'i18next';
import ErrorIcon from '@material-ui/icons/Error';
import {Phone} from '@material-ui/icons';

export type NotificationDataType = {
    data,
    handleDeleteNotification: (id: number, ads_id: number) => () => void,
    fetchUserPhone: (user_id) => () => void,
    phone: number
} & WithT;

export const Notification: FC<NotificationDataType> = (props) => {
    const {
        t,
        data,
        handleDeleteNotification,
        fetchUserPhone,
        phone
    } = props;

    const {
        id,
        message,
        ads_id,
        created_at,
        go_to,
        go_to_type
    } = data;

    const date = new Date(created_at);

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
                    flexDirection='column'
                    alignItems='center'
                    justifyContent='center'
                >
                    <ErrorIcon color='secondary' />
                    <Typography variant='caption'>
                        {`${date.getHours()}:${date.getMinutes()}`}
                    </Typography>
                </Box>
                <Box width='100%'>
                    <Box>
                        <Typography variant="h6" color="initial">
                            {t(`notifications:${message}.title`, {id: ads_id, user_id: go_to})}
                        </Typography>
                        <Typography variant="subtitle1" color="initial">
                            {t(`notifications:${message}.desc`, {user_id: go_to})}
                        </Typography>
                    </Box>
                    <Box display='flex' justifyContent='flex-end'>
                        {
                            go_to_type !== 'go_to_user'
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
                                    <Typography variant='subtitle1' color="secondary">{phone}</Typography>
                                </Button>
                                : <Button
                                    size="small"
                                    color="secondary"
                                    className='forward-to-btn'
                                    onClick={fetchUserPhone(go_to)}
                                >
                                    <Phone className='phone-icon' />
                                    <Typography variant='subtitle1' color="secondary">
                                        Показать номер
                                    </Typography>
                                </Button>
                        }
                    </Box>
                </Box>
                <IconButton onClick={handleDeleteNotification(id, ads_id)}>
                    <CloseIcon />
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
            default:
                return type;
        }
    }

};
