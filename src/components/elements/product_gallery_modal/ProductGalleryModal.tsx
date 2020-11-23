import React from "react";
import {Fade} from "@material-ui/core";
import {ModalComponent} from "@src/components/elements/modal/Modal";

export const ProductGalleryModal = ({isOpen, handleClose}) => {
    return (
        <ModalComponent isOpen={isOpen} handleCloseModal={handleClose}>
            <Fade in={isOpen}>
                  <div>
                      modal
                  </div>
            </Fade>
        </ModalComponent>
    )
}