import {FC, useContext, useState} from 'react';
import {unstable_batchedUpdates} from 'react-dom';
import {Box, IconButton, Paper, Typography} from '@material-ui/core';
import {Error} from '@material-ui/icons';
import {CloseIcon} from '@src/components/elements/icons';
import {userAPI} from '@src/api/api';
import {useTranslation} from 'next-i18next';
import {ErrorCtx} from '@src/context';
import {CustomCircularProgress} from '@src/components/elements/custom_circular_progress/CustomCircularProgress';
import {ITEMS_PER_PAGE} from '@src/constants';
import {useRouter} from 'next/router';
import {useStyles} from './useStyles';

export type NotificationDataType = {
    isPersonal?: boolean;
    id: number;
    user_name: string;
    value: number;
    title: string;
    message: string;
    ads_id: number;
    created_at: string;
    handleRefresh: () => void;
    setNotifications;
};

export const NotificationCard: FC<NotificationDataType> = props => {
    const {
        isPersonal,
        id,
        title,
        value,
        message,
        ads_id,
        user_name,
        created_at,
        handleRefresh,
        setNotifications
    } = props;

    const {locale} = useRouter();
    const {t} = useTranslation('notifications');
    const {setErrorMsg} = useContext(ErrorCtx);

    const date = new Date(created_at);

    const [isFetch, setIsFetch] = useState(false);

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
            <Typography variant="subtitle1" gutterBottom>
                {date.toLocaleDateString()}
            </Typography>
            <Paper elevation={0} className={classes.root}>
                {isFetch ? (
                    <CustomCircularProgress />
                ) : (
                    <>
                        <Box
                            mr={1}
                            display="flex"
                            alignItems="center"
                            flexDirection="column"
                            justifyContent="center"
                        >
                            <Error color="secondary" />
                            <Typography variant="caption">
                                {`${date.getHours()}:${date.getMinutes()}`}
                            </Typography>
                        </Box>
                        <Box width="100%">
                            <Box>
                                {title && (
                                    <Typography variant="h6" color="initial">
                                        {t(`titles.${title}`)}
                                    </Typography>
                                )}
                                {message && (
                                    <Typography
                                        variant="subtitle1"
                                        color="initial"
                                    >
                                        {t(`descriptions.${message}`, {
                                            ads_id,
                                            user_name,
                                            value:
                                                locale === 'ru' &&
                                                message !== 'activated_raise_tape'
                                                    ? `${value / 24} ${
                                                          value / 24 > 4
                                                              ? 'дней'
                                                              : 'дня'
                                                      }`
                                                    : value
                                        })}
                                    </Typography>
                                )}
                            </Box>
                        </Box>
                        {isPersonal && (
                            <IconButton onClick={handleDeleteNotification}>
                                <CloseIcon />
                            </IconButton>
                        )}
                    </>
                )}
            </Paper>
        </>
    );
};
