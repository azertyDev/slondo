import React from 'react';
import { Typography } from '@material-ui/core';
import { ButtonComponent } from '../../../../elements/button/Button';
import { CustomField } from '../../../../elements/custom_field/CustomField';

// styles
import { useStyles } from './useStyles';

export const LotInfo = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className="lot-info">
                <div>
                    <Typography variant="subtitle1" color="initial">
                        Окончание торгов через:
                    </Typography>
                </div>
                <div>
                    <div></div>
                </div>
                <div>
                    <Typography variant="subtitle1" color="initial">
                        Текущие ставки
                    </Typography>
                </div>
                <div className="lot-participants">
                    <div>
                        <Typography variant="subtitle1" noWrap>
                            Playe***112 (1)
                        </Typography>
                        <Typography variant="subtitle1" noWrap>
                            1 350 000
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="subtitle1" noWrap>
                            Samv****91 (3)
                        </Typography>
                        <Typography variant="subtitle1" noWrap>
                            1 240 000
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="subtitle1" noWrap>
                            Sar***44 (1)
                        </Typography>
                        <Typography variant="subtitle1" noWrap>
                            1 150 000
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="subtitle1" noWrap>
                            Playe***54 (2)
                        </Typography>
                        <Typography variant="subtitle1" noWrap>
                            970 000
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="subtitle1" noWrap>
                            Grand***ve (1)
                        </Typography>
                        <Typography variant="subtitle1" noWrap>
                            950 000
                        </Typography>
                    </div>
                    <div>
                        <ButtonComponent>
                            <Typography variant="subtitle1" color="initial">
                                Все ставки
                            </Typography>
                        </ButtonComponent>
                    </div>
                </div>
                <div className="bet-info">
                    <div>
                        <Typography variant="subtitle1" color="initial">
                            Сделать ставку
                        </Typography>
                    </div>
                    <div>
                        <CustomField placeholder="14200000" />
                        <ButtonComponent>
                            <Typography variant="subtitle1" color="initial">
                                Применить
                            </Typography>
                        </ButtonComponent>
                    </div>
                    <div>
                        <Typography variant="subtitle2" color="initial">
                            Максимально возможная ставка 2025000
                        </Typography>
                    </div>
                    <div>
                        <ButtonComponent>
                            <Typography variant="subtitle1" color="initial">
                                Предложить цену
                            </Typography>
                        </ButtonComponent>
                    </div>
                </div>
            </div>
        </div>
    );
};
