import React from 'react';
import {Typography} from '@material-ui/core';
import {ButtonComponent} from '@src/components/elements/button/Button';
import {UserInfoWithAvatar} from '@src/components/elements/userInfoWithAvatar/UserInfoWithAvatar';

// styles
import {useStyles} from './useStyles';

export const UserInfo = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <UserInfoWithAvatar/>
            <div className="contact-buttons">
                <ButtonComponent color='primary'>
                    <Typography variant="subtitle1" color="initial">
                        Показать номер
                    </Typography>
                </ButtonComponent>
                <ButtonComponent color='primary'>
                    <Typography variant="subtitle1" color="initial">
                        Написать продавцу
                    </Typography>
                </ButtonComponent>
            </div>
        </div>
    );
};
