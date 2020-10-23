import React, {useEffect, useState} from 'react'
import Cookies from 'universal-cookie'
import {withTranslation} from '../../../i18n'
import {Container, Hidden} from '@material-ui/core'
import TopHeaderContainer from "./topHeader/TopHeaderContainer"
import BottomHeader from './bottomHeader/BottomHeader'
import {ModalComponent} from '../elements/modal/Modal'
import {AuthRegPage} from "./auth_reg/AuthRegPage"
import {AuthRegSm} from "./auth_reg/auth_reg_sm/AutRegSm"
import {SET_IS_AUTH} from "../../redux/actions/authActions"
import {useDispatch} from "react-redux"

// styles
import {useStyles} from './useStyles'


const Header = (props) => {
    const {t} = props;

    const dispatch = useDispatch();

    const cookies = new Cookies();
    const isTokenExst = !!cookies.get('token');

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        console.log(isTokenExst)

        dispatch({
            type: SET_IS_AUTH,
            payload: isTokenExst
        });
    }, [isTokenExst]);

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    const classes = useStyles();
    return (
        <header className={classes.root}>
            <Container maxWidth="lg">
                <TopHeaderContainer t={t} handleOpenModal={handleOpenModal}/>
                <div className={classes.bottomHeader}>
                    <BottomHeader t={t} handleOpenModal={handleOpenModal}/>
                </div>
            </Container>
            <ModalComponent
                isOpen={isOpen}
                handleCloseModal={handleCloseModal}
                className={classes.modalDialog}
            >
                <>
                    <Hidden smDown>
                        <AuthRegPage
                            t={t}
                            handleCloseModal={handleCloseModal}
                        />
                    </Hidden>
                    <Hidden mdUp>
                        <AuthRegSm
                            t={t}
                            handleCloseModal={handleCloseModal}
                        />
                    </Hidden>
                </>
            </ModalComponent>
        </header>
    )
};

export default withTranslation(['header', 'auth_reg', 'common'])(Header);
