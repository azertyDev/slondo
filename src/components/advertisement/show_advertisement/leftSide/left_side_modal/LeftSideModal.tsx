import React, {FC, Dispatch} from 'react';
import {Container, Modal, Typography} from '@material-ui/core';
import {SyncSliders} from "@src/components/elements/sync_sliders/SyncSliders";
import {useStyles} from './useStyles';

type LeftSideModalProps = {
    imgs: [];
    title: string;
    open: boolean;
    currentSlide: number;
    setCurrentSlide: Dispatch<number>
    handleShowModalClose: () => void;
};

export const LeftSideModal: FC<LeftSideModalProps> = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Modal
                open={props.open}
                className={classes.modal}
                onClose={props.handleShowModalClose}
            >
                <Container className={classes.slider}>
                    <Typography variant="h6">
                        {props.title}
                    </Typography>
                    <SyncSliders
                        imgs={props.imgs}
                        isModalOpen={props.open}
                        currentSlide={props.currentSlide}
                        setCurrentSlide={props.setCurrentSlide}
                    />
                    <div className={classes.sliderCounter}>
                        <Typography variant="subtitle1">
                            {props.currentSlide + 1} / {props.imgs.length}
                        </Typography>
                    </div>
                </Container>
            </Modal>
        </div>
    )
}