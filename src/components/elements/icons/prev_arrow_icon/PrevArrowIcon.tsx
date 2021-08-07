import React from 'react';
import {useStyles} from './useStyles';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';

export const PrevArrowIcon = ({ onClick }) => {

    const classes = useStyles();
    return (
        <CustomButton className={classes.root} onClick={onClick}>
            <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M25 7.66667H6.10667L10.88 2.88L9 1L1 9L9 17L10.88 15.12L6.10667 10.3333H25V7.66667Z"
                    fill="#4E4E4E"
                    stroke="white"
                />
            </svg>
        </CustomButton>
    )
};
