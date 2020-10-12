import React, {useState} from 'react'
import {withTranslation, i18n} from '../../../i18n'
import {Container} from '@material-ui/core'
import TopHeaderContainer from "./topHeader/TopHeaderContainer"
import BottomHeader from './bottomHeader/BottomHeader'
import {ModalComponent} from '../elements/modal/Modal'
import {AuthRegPage} from "../auth_reg/AuthRegPage"

// styles
import {useStyles} from './useStyles'

const Header = (props) => {
    const {t} = props;
    const {language} = i18n;

    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true)
    };

    const handleCloseModal = () => {
        setIsOpen(false)
    };

    const classes = useStyles();
    return (
        <header className={classes.root}>
            <Container maxWidth="lg">
                <TopHeaderContainer t={t}/>
                <div className={classes.bottomHeaderWrapper}>
                    <BottomHeader t={t} handleOpenModal={handleOpenModal}/>
                </div>
            </Container>
            <ModalComponent
                isOpen={isOpen}
                handleCloseModal={handleCloseModal}
            >
                <>
                    <AuthRegPage t={t} language={language}/>
                </>
            </ModalComponent>
        </header>
    )
};

export default withTranslation(['header', 'auth_reg', 'common'])(Header);
