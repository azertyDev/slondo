import React from 'react';
import {Typography} from '@material-ui/core';
import {RatingComponent} from '../rating/Rating';
import {UserAvatarComponent} from '@src/components/elements/userInfoWithAvatar/avatar/UserAvatarComponent'

// styles
import {useStyles} from './useStyles';
import {ButtonComponent} from "@src/components/elements/button/Button";

export const UserInfoWithAvatar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className="user-info">
                <div>
                    <UserAvatarComponent/>
                </div>
                <div>
                    <div>
                        <Typography variant="subtitle1" color="initial">
                            <span>Имя Фамилия</span>
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="subtitle1" color="initial">
                            На Slondo с 31 августа 2020
                        </Typography>
                    </div>
                    <div>
                        <RatingComponent/>
                    </div>
                    <ButtonComponent>
                        <Typography variant='subtitle2'>
                            Подписаться
                        </Typography>
                    </ButtonComponent>
                </div>
            </div>
        </div>
    );
};
