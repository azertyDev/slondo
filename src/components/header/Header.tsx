import React, {useEffect, useState} from 'react';
import Cookies from 'universal-cookie';
import {i18n, Router, withTranslation} from '@root/i18n';
import {Container, Typography} from '@material-ui/core';
import TopHeaderContainer from "./topHeader/TopHeaderContainer";
import BottomHeader from './bottomHeader/BottomHeader';
import {ModalComponent} from '../elements/modal/Modal';
import {AuthRegPage} from "./auth_reg/AuthRegPage";
import {useDispatch, useSelector} from "react-redux";
import {setIsAuthAction} from '@src/redux/slices/authRegSlice';
import {RootState} from "@src/redux/rootReducer";
import {ButtonComponent} from "@src/components/elements/button/Button";
import {fetchCategories} from "@src/redux/slices/categoriesSlice";
// styles
import {useStyles} from './useStyles';


const Header = (props) => {
    const {t} = props;

    const cookies = new Cookies();
    const isTokenExst = !!cookies.get('token');

    const lang = i18n.language;

    const {isAuth, error} = useSelector((store: RootState) => store.auth);
    const dispatch = useDispatch();

    const [isOpen, setIsOpen] = useState(false);
    const [isCreateAd, setIsCreateAd] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
        setIsCreateAd(false);
    };

    const handleCreateAd = () => {
        isAuth
            ? Router.push('/create_advertisement')
            : setIsOpen(true);
        setIsCreateAd(true);
    };

    useEffect(() => {
        dispatch(fetchCategories(lang));
    }, [lang]);

    useEffect(() => {
        isCreateAd && isAuth && Router.push('/create_advertisement');
    }, [isCreateAd, isAuth]);

    useEffect(() => {
        isAuth && !error && handleCloseModal()
    }, [isAuth, error, isCreateAd]);

    useEffect(() => {
        dispatch(setIsAuthAction(isTokenExst));
    }, [isTokenExst]);

    const classes = useStyles();
    return (
        <header className={classes.root}>
            <Container maxWidth="lg">
                <TopHeaderContainer t={t} handleOpenModal={handleOpenModal}/>
                <div className={classes.bottomHeader}>
                    <BottomHeader
                        t={t}
                        isAuth={isAuth}
                        handleOpenModal={handleOpenModal}
                        handleCreateAd={handleCreateAd}
                    />
                </div>
            </Container>
            <ModalComponent
                isOpen={isOpen}
                handleCloseModal={handleCloseModal}
                className={classes.modalDialog}
            >
                {
                    isAuth
                        ? (
                            <div style={{width: '200px', height: '80px', backgroundColor: '#fff'}}>
                                <Typography variant='h5'>Выйти из сайта?</Typography>
                                <div style={{display: 'flex'}}>
                                    <ButtonComponent onClick={handleCloseModal}>Отмена</ButtonComponent>
                                    <ButtonComponent>Выйти</ButtonComponent>
                                </div>
                            </div>
                        )
                        : (
                            <>
                                <AuthRegPage
                                    t={t}
                                    handleCloseModal={handleCloseModal}
                                />
                            </>
                        )
                }
            </ModalComponent>
        </header>
    )
};

export default withTranslation(['header', 'auth_reg', 'common'])(Header);
