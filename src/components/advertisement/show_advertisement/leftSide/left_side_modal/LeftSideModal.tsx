import React from 'react';
import {Container, Typography} from '@material-ui/core';
import {SyncSliders} from "@src/components/elements/sync_sliders/SyncSliders";
import {ModalComponent} from "@src/components/elements/modal/Modal";

// styles
import {useStyles} from './useStyles';

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
                        swipe={true}
                    />
                    <div className={classes.sliderCounter}>
                        <Typography variant="subtitle1">
                            {props.currentSlide + 1} / {props.imgs.length}
                        </Typography>
                    </div>
                </Container>
            </ModalComponent>
        </div>
    )
}