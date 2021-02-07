import React, {FC, useState} from "react";
import {Typography} from "@material-ui/core";
import {ButtonComponent} from "@src/components/elements/button/Button";
import {WithT} from "i18next";
import {useStyles} from './useStyles';


export const ReadMore: FC<any & WithT> = ({t, descHeight, children}) => {
    const [isHidden, setIsHidden] = useState(true);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={isHidden ? classes.hidden : ''}>{children}</div>
            {descHeight >= 110
            && <ButtonComponent
                disableRipple
                onClick={() => setIsHidden(!isHidden)}
                className='show-more-button'
            >
                {isHidden
                    ? <Typography variant='subtitle1'>
                        {t('common:showMore')}
                        <svg width="13" height="6" viewBox="0 0 13 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0H13L6.5 6L0 0Z" fill="#675EAA"/>
                        </svg>
                    </Typography>
                    : <Typography variant='subtitle1'>
                        {t('common:hide')}
                        <svg width="13" height="6" viewBox="0 0 13 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 6H0L6.5 0L13 6Z" fill="#675EAA"/>
                        </svg>
                    </Typography>}
            </ButtonComponent>}
        </div>
    );
}