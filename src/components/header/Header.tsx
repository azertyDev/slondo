import React, {FC, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Container, Modal} from '@material-ui/core';
import {i18n, useTranslation} from '@root/i18n';
import {cookies} from '@root/src/helpers';
import Top from "./top/TopContainer";
import Bottom from './bottom/Bottom';
import {AuthRegPage} from "./auth_reg/AuthRegPage";
import {signInAction, setIsAuthModalOpen} from '@src/redux/slices/authRegSlice';
import {RootState} from "@src/redux/rootReducer";
import {fetchLocations} from "@src/redux/slices/locationsSlice";
import {useStyles} from './useStyles';


export const Header: FC = () => {
    const {t} = useTranslation(['header']);

    const isToken = !!cookies.get('token');

    const lang = i18n.language;

    const dispatch = useDispatch();
    const {isAuth, isAuthModalOpen} = useSelector((store: RootState) => store.auth);

    const handleModal = value => () => {
        dispatch(setIsAuthModalOpen(value));
    };

    useEffect(() => {
        dispatch(fetchLocations(lang));
    }, [lang]);

    // useEffect(() => {
    //     dispatch(signInAction(isToken));
    // }, [isToken]);

    const classes = useStyles();
    return (
        <header className={classes.root} id='back-to-top-anchor'>
            <div className='header-wrapper'>
                <Container maxWidth="xl">
                    <Top
                        t={t}
                        handleOpenModal={handleModal(true)}
                    />
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
                        <AuthRegPage
                            t={t}
                            handleCloseModal={handleModal(false)}
                        />
                    </>
                </Modal>
            </div>
        </header>
    )
};
