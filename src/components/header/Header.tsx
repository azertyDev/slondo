import React, {useEffect} from 'react';
import Cookies from 'universal-cookie';
import {i18n, withTranslation} from '@root/i18n';
import {Container, Modal, Typography} from '@material-ui/core';
import TopHeaderContainer from "./topHeader/TopHeaderContainer";
import BottomHeader from './bottomHeader/BottomHeader';
import {AuthRegPage} from "./auth_reg/AuthRegPage";
import {useDispatch, useSelector} from "react-redux";
import {setIsAuthAction, setIsAuthModalOpen} from '@src/redux/slices/authRegSlice';
import {RootState} from "@src/redux/rootReducer";
import {ButtonComponent} from "@src/components/elements/button/Button";
import {fetchCategories} from "@src/redux/slices/categoriesSlice";
import {fetchLocations} from "@src/redux/slices/locationsSlice";
import {useStyles} from './useStyles';


const Header = (props) => {
    const {t} = props;

    const cookies = new Cookies();
    const isTokenExst = !!cookies.get('token');

    const lang = i18n.language;

    const {isAuth, isAuthModalOpen} = useSelector((store: RootState) => store.auth);
    const dispatch = useDispatch();

    const handleModal = (value) => () => {
        dispatch(setIsAuthModalOpen(value));
    };

    useEffect(() => {
        dispatch(fetchCategories(lang));
        dispatch(fetchLocations(lang));
    }, [lang]);

    useEffect(() => {
        dispatch(setIsAuthAction(isTokenExst));
    }, [isTokenExst]);

    const classes = useStyles();
    return (
        <header className={classes.root} id='back-to-top-anchor'>
            <Container maxWidth="lg">
                <TopHeaderContainer
                    t={t}
                    handleOpenModal={handleModal(true)}
                />
                <div className={classes.bottomHeader}>
                    <BottomHeader
                        t={t}
                        isAuth={isAuth}
                        handleOpenModal={handleModal(true)}
                    />
                </div>
            </Container>
            <Modal
                open={isAuthModalOpen}
                onClose={handleModal(false)}
                className={classes.modalDialog}
            >
                <>
                    {
                        isAuth
                            ? <div style={{width: '200px', height: '80px', backgroundColor: '#fff'}}>
                                <Typography variant='h5'>Выйти из сайта?</Typography>
                                <div style={{display: 'flex'}}>
                                    <ButtonComponent onClick={handleModal(false)}>Отмена</ButtonComponent>
                                    <ButtonComponent>Выйти</ButtonComponent>
                                </div>
                            </div>
                            : <AuthRegPage
                                t={t}
                                handleCloseModal={handleModal(false)}
                            />
                    }
                </>
            </Modal>
        </header>
    )
};

export default withTranslation(['header', 'auth_reg', 'common'])(Header);
