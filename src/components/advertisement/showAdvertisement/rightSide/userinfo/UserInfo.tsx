import React from 'react';
import { Typography } from '@material-ui/core';
import { ButtonComponent } from '../../../../elements/button/Button';
import { Link } from '../../../../../../i18n';
import { UserInfoWithAvatar } from '../../../../elements/userInfoWithAvatar/userInfoWithAvatar';
// icons
import { DeliveryIcon } from '../../../../elements/icons/DeliveryIcon';
import { SafeIcon } from '../../../../elements/icons/SafeIcon';
import { ExchangeIcon } from '../../../../elements/icons/ExchangeIcon';
import { Subscribe_icon } from '../../../../elements/icons';

// styles
import { useStyles } from './useStyles';

export const UserInfo = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className="contact-buttons">
                <div>
                    <ButtonComponent>
                        <Typography variant="subtitle1" color="initial">
                            Показать номер
                        </Typography>
                    </ButtonComponent>
                </div>

                <div>
                    <ButtonComponent>
                        <Typography variant="subtitle1" color="initial">
                            Написать продавцу
                        </Typography>
                    </ButtonComponent>
                </div>
            </div>
            <UserInfoWithAvatar />
            <div className="subscribe">
                <div>
                    <img src={Subscribe_icon} />
                </div>
                <Link href="#">
                    <a>
                        <Typography variant="subtitle1" color="initial">
                            Подписаться на продавца
                        </Typography>
                    </a>
                </Link>
            </div>
            <div className="ad-exp">
                <div>
                    <div>
                        <div className="delivery-icon">
                            <DeliveryIcon />
                        </div>
                    </div>
                    <div>
                        <Typography variant="subtitle1" color="initial">
                            Есть доставка
                        </Typography>
                    </div>
                </div>

                <div>
                    <div>
                        <div className="safe-icon">
                            <SafeIcon />
                        </div>
                    </div>
                    <div>
                        <Typography variant="subtitle1" color="initial">
                            Безопасный торг
                        </Typography>
                    </div>
                </div>

                <div>
                    <div>
                        <div className="exchange-icon">
                            <ExchangeIcon />
                        </div>
                    </div>
                    <div>
                        <Typography variant="subtitle1" color="initial">
                            Возможен обмен
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    );
};
