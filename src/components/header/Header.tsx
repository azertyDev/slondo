import {FC, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Container, Modal} from '@material-ui/core';
import {useTranslation} from 'next-i18next';
import Top from "./top/TopContainer";
import Bottom from './bottom/Bottom';
import {AuthRegPage} from "./auth_reg/AuthRegPage";
import {signInAction, setIsAuthModalOpen} from '@src/redux/slices/userSlice';
import {RootState} from "@src/redux/rootReducer";
import {fetchLocations} from "@src/redux/slices/locationsSlice";
import {useStyles} from './useStyles';
import {cookies} from "@src/helpers";
import {useRouter} from "next/router";


export const Header: FC = () => {
    const user = cookies.get('slondo_user');
    const isAuth = !!user;

    const dispatch = useDispatch();
    const {t} = useTranslation(['header']);
    const {locale} = useRouter();
    const {isAuthModalOpen} = useSelector((store: RootState) => store.user);

    const handleModal = value => () => {
        dispatch(setIsAuthModalOpen(value));
    };

    useEffect(() => {
        dispatch(fetchLocations(locale));
    }, [locale]);

    useEffect(() => {
        user && dispatch(signInAction(user));
    }, [isAuth]);

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
                        <AuthRegPage handleCloseModal={handleModal(false)}/>
                    </>
                </Modal>
            </div>
        </header>
    )
};
