import React from 'react';
import {Container, Typography} from '@material-ui/core';

// styles
import {useStyles} from './useStyles';
import {SyncSliders} from "@src/components/elements/sync_sliders/SyncSliders";
import {ModalComponent} from "@src/components/elements/modal/Modal";

export const LeftSideModal = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <ModalComponent isOpen={props.isOpen} handleCloseModal={props.handleShowModal(false)} className={classes.modal}>
                <Container className={classes.slider}>
                    <Typography variant="h6">
                        {props.title}
                    </Typography>
                    <SyncSliders
                        imgs={props.imgs}
                        currentSlide={props.currentSlide}
                        setCurrentSlide={props.setCurrentSlide}
                        variableWidth={false}
                        centerMode={true}
                    />
                </Container>
            </ModalComponent>
        </div>
    )
}