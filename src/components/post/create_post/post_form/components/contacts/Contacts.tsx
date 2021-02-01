import React, {FC} from "react";
import {Checkbox, Typography} from "@material-ui/core";
import {CustomFormikField} from "@src/components/elements/custom_formik_field/CustomFormikField";
import {useStyles} from './useStyles';


export const Contacts: FC<any> = (props) => {
    const {
        isPreview,
        isAuction,
        auction,
        handleCheckboxChange,
        defaultParams,
        handleInput,
    } = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            {isAuction
            && <div className='display-phone'>
                <Checkbox
                    disabled={isPreview}
                    checked={auction.display_phone}
                    onChange={handleCheckboxChange('display_phone')}
                />
                <Typography variant="subtitle1">
                    Отображать номер телефона
                </Typography>
            </div>}
            <div>
                <Typography variant="subtitle1">
                    <strong>Ваш телефон: </strong>
                    <span>+998(90) 9998877</span>
                </Typography>
            </div>
            {((isPreview && defaultParams.phone) || !isPreview)
            && <div>
                <Typography variant="subtitle1">
                    <strong>
                        Дополнительный телефон
                    </strong>
                </Typography>
                {isPreview
                    ? <Typography>{defaultParams.phone}</Typography>
                    : <CustomFormikField
                        type="tel"
                        name="phone"
                        placeholder="+998 (__) ___ __ __"
                        onChange={handleInput}
                        value={defaultParams.phone}
                    />}
            </div>}
        </div>
    )
};