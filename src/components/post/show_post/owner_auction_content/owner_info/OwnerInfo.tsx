import React, {FC} from 'react';
import {Typography} from '@material-ui/core';
import {ButtonComponent} from '@src/components/elements/button/Button';
import {UserInfoWithAvatar} from '@src/components/elements/user_info_with_avatar/UserInfoWithAvatar';
import {SafeIcon} from '@root/src/components/elements/icons';
import {useStyles} from './useStyles';


export const OwnerInfo: FC<any> = ({phone, safe_deal}) => {
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
                        {isPhoneAval
                            ? phone ?? 'default'
                            : 'Показать номер'}
                    </Typography>
                </ButtonComponent>
                <ButtonComponent color="primary">
                    <Typography variant="subtitle1" color="initial">
                        Написать продавцу
                    </Typography>
                </ButtonComponent>
                {safe_deal === 1 && (
                    <ButtonComponent
                        color="primary"
                        className="safe-shopping-btn"
                    >
                        <SafeIcon/>
                        <Typography variant="subtitle1" color="initial">
                            Безопасная покупка
                        </Typography>
                    </ButtonComponent>
                )}
            </div>
        </div>
    );
};
