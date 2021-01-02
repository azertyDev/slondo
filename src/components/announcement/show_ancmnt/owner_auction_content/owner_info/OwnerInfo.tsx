import React from 'react';
import {Typography} from '@material-ui/core';
import {ButtonComponent} from '@src/components/elements/button/Button';
import {UserInfoWithAvatar} from '@src/components/elements/user_info_with_avatar/UserInfoWithAvatar';
import {useStyles} from './useStyles';


export const OwnerInfo = (props) => {
    const [isPhoneAval, setIsPhoneAval] = React.useState(false);

    const handleShowPhone = () => {
        setIsPhoneAval(!isPhoneAval);
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <UserInfoWithAvatar/>
            <div className="contact-buttons">
                <ButtonComponent color="primary" onClick={handleShowPhone}>
                    <Typography variant="subtitle1" color="initial">
                        {isPhoneAval ? props.data.phone ?? '0123456789' : 'Показать номер'}
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
