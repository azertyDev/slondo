import React from 'react'
import {Container} from '@material-ui/core'
import TopHeaderContainer from "./topHeader/TopHeaderContainer"
import BottomHeader from './bottomHeader/BottomHeader'
import {ModalComponent} from '../elements/modal/Modal'
import {withTranslation} from '../../../i18n'

// styles
import {useStyles} from './useStyles'

const Header = (props) => {
    const {t} = props;
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
                <TopHeaderContainer t={t}/>
                <div className={classes.bottomHeaderWrapper}>
                    <BottomHeader t={t} handleOpenModal={handleOpenModal}/>
                </div>
                <ModalComponent
                    open={open}
                    handleCloseModal={handleCloseModal}
                />
            </Container>
        </header>
    )
};

export default withTranslation(['header', 'common'])(Header);
