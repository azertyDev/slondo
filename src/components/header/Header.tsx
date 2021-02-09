import React, {FC, useEffect} from 'react';
import Cookies from 'universal-cookie';
import {i18n, useTranslation} from '@root/i18n';
import {Container, Modal, Typography} from '@material-ui/core';
import Top from "./top/TopContainer";
import Bottom from './bottom/Bottom';
import {AuthRegPage} from "./auth_reg/AuthRegPage";
import {useDispatch, useSelector} from "react-redux";
import {setIsAuthAction, setIsAuthModalOpen} from '@src/redux/slices/authRegSlice';
import {RootState} from "@src/redux/rootReducer";
import {ButtonComponent} from "@src/components/elements/button/Button";
import {fetchLocations} from "@src/redux/slices/locationsSlice";
import {useStyles} from './useStyles';


export const Header: FC = () => {
    const {t} = useTranslation(['header']);

    const cookies = new Cookies();
    const isTokenExst = !!cookies.get('token');

    const lang = i18n.language;

    const {isAuth, isAuthModalOpen} = useSelector((store: RootState) => store.auth);
    const dispatch = useDispatch();

    const handleModal = (value) => () => {
        dispatch(setIsAuthModalOpen(value));
    };

    useEffect(() => {
        dispatch(fetchLocations(lang));
    }, [lang]);

    useEffect(() => {
        dispatch(setIsAuthAction(isTokenExst));
    }, [isTokenExst]);

    const classes = useStyles();
    return (
        <header className={classes.root} id='back-to-top-anchor'>
            <div className='header-wrapper'>
                <Container maxWidth="xl">
                    <div className='top-wrapper'>
                        <Top
                            t={t}
                            handleOpenModal={handleModal(true)}
                        />
                    </div>
                    <div>
                        <Bottom
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
                        {isAuth
                            ? <div style={{width: '200px', height: '80px', backgroundColor: '#fff'}}>
                                <Typography variant='h5'>{t('auth_reg:signOutFromSite')}</Typography>
                                <div style={{display: 'flex'}}>
                                    <ButtonComponent onClick={handleModal(false)}>{t('auth_reg:cancel')}</ButtonComponent>
                                    <ButtonComponent>{t('auth_reg:signOut')}</ButtonComponent>
                                </div>
                            </div>
                            : <AuthRegPage
                                t={t}
                                handleCloseModal={handleModal(false)}
                            />}
                    </>
                </Modal>
            </div>
        </header>
    )
};
