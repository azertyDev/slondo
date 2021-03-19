import React, {FC} from "react";
import {WithT} from "i18next";
import {DefaultForm} from "./default_form/DefaultForm";
import {ExtendForm} from "./extend_form/ExtendForm";
import {useStyles} from './useStyles';


type RegularFormPropsType = {
    filters,
    post,
    setPost,
    mark,
    isPreview: boolean,
    isExtendSubCtgr: boolean,
    currentFormIndex: number,
    type,
    subCategory,
    handleNextFormOpen: () => void,
    handleFormOpen: (k) => () => void,
} & WithT;

export const ParamsForm: FC<RegularFormPropsType> = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {props.isExtendSubCtgr && (
                <div className='acc-wrapper'>
                    <ExtendForm {...props}/>
                </div>
            )}
            <DefaultForm {...props}/>
        </div>
    );
};