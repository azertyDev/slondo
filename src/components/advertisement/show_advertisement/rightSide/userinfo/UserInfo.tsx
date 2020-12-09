import React from 'react';
import { Typography } from '@material-ui/core';
import { ButtonComponent } from '@src/components/elements/button/Button';
import { UserInfoWithAvatar } from '@src/components/elements/user_info_with_avatar/UserInfoWithAvatar';
// styles
import { useStyles } from './useStyles';

export const UserInfo = (props) => {
    const [show, setShow] = React.useState(false);

    const handleClick = () => {
        setShow(!show);
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <UserInfoWithAvatar />
            <div className="contact-buttons">
                <ButtonComponent color="primary" onClick={handleClick}>
                    <Typography variant="subtitle1" color="initial">
                        {show ? props.data.phone ?? '0123456789' : 'Показать номер'}
                    </Typography>
                </ButtonComponent>
                <ButtonComponent color="primary">
                    <Typography variant="subtitle1" color="initial">
                        Написать продавцу
                    </Typography>
                </ButtonComponent>
            </div>
        </div>
    );
};
