import React from 'react'
import {TopHeaderContainer} from "./topHeader/TopHeaderContainer"
import BottomHeader from './bottomHeader/BottomHeader'
import { Container } from '@material-ui/core'
import { ModalComponent } from '../elements/modal/Modal'

// styles
import { useStyles } from './useStyles'

export const Header = () => {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpenModal = () => {
        setOpen(true)
    };

    const handleCloseModal = () => {
        setOpen(false)
    };

    return (
        <header className={classes.root}>
            <Container maxWidth="lg">
                <TopHeaderContainer />
                <div className={classes.bottomHeaderWrapper}>
                    <BottomHeader handleOpenModal={handleOpenModal} />
                </div>
                <ModalComponent
                    open={open}
                    handleCloseModal={handleCloseModal}
                />
            </Container>
        </header>
    )
};
