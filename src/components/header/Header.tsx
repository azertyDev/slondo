import React, {useEffect, useState} from 'react';
import Cookies from 'universal-cookie';
import {withTranslation} from '@root/i18n';
import {Container, Typography} from '@material-ui/core';
import TopHeaderContainer from "./topHeader/TopHeaderContainer";
import BottomHeader from './bottomHeader/BottomHeader';
import {ModalComponent} from '../elements/modal/Modal';
import {AuthRegPage} from "./auth_reg/AuthRegPage";
import {useDispatch, useSelector} from "react-redux";
import {setIsAuthAction} from '@src/redux/slices/authRegSlice';
import {RootState} from "@src/redux/rootReducer";
import {CreateAdModalForm} from "@src/components/advertisement/createAdModalForm/CreateAdModalForm";
import {ButtonComponent} from "@src/components/elements/button/Button";


// styles
import {useStyles} from './useStyles';


const Header = (props) => {
    const {t} = props;

    const cookies = new Cookies();
    const isTokenExst = !!cookies.get('token');

    const {isAuth, error} = useSelector((store: RootState) => store.auth);
    const dispatch = useDispatch();

    const [isOpen, setIsOpen] = useState(false);
    const [isCreateAd, setIsCreateAd] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
        setIsCreateAd(false);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    const handleCreateAd = () => {
        setIsOpen(true);
        setIsCreateAd(true);
    };

    useEffect(() => {
        !isCreateAd && isAuth && !error && handleCloseModal()
    }, [isAuth, error]);

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
                    isCreateAd && isAuth
                        ? (
                            <div>
                                <CreateAdModalForm handleCloseModal={handleCloseModal}/>
                            </div>
                        )
                        : (
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
                        )
                }
            </ModalComponent>
        </header>
    )
};

export default withTranslation(['header', 'auth_reg', 'common'])(Header);
