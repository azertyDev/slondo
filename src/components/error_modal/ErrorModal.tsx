import React, {FC} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Modal, Typography} from "@material-ui/core";
import {RootState} from "@src/redux/rootReducer";
import {resetErrorAction} from "@src/redux/slices/errorSlice";
import {useStyles} from "./useStyles";


export const ErrorModal: FC = () => {
    const {isError, errorMsg} = useSelector((store: RootState) => store.error);
    const dispatch = useDispatch();

    const onClose = () => {
        dispatch(resetErrorAction());
    };

    const classes = useStyles();
    return (
        <Modal
            open={isError}
            onClose={onClose}
        >
            <div className={classes.root}>
                <Typography className='error-text'>{errorMsg}</Typography>
            </div>
        </Modal>
    )
};