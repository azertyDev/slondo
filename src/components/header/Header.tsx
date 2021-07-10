import {FC, useContext, useEffect} from 'react';
import {Container} from '@material-ui/core';
import {useTranslation} from 'next-i18next';
import {Top} from './top/Top';
import Bottom from './bottom/Bottom';
import {AuthContainer} from './auth/AuthContainer';
import {cookies} from '@src/helpers';
import {UserCtx, AuthCtx} from "@src/context";
import {useStyles} from './useStyles';
// import {socketIO} from '@src/api/api';


export const Header: FC = () => {
    const {t} = useTranslation('header');

    const userFromCookie = cookies.get('slondo_user');

    const {user, setUser} = useContext(UserCtx);
    const {auth, setAuthModalOpen, setIsAuth} = useContext(AuthCtx);

    const isAuth = auth.isAuth || !!userFromCookie;

    const handleOpenModal = () => {
        setAuthModalOpen(true);
    };

    const handleSignin = () => {
        setIsAuth(true);
        setUser(userFromCookie);
    };

    useEffect(() => {
        !auth.isAuth
        && !!userFromCookie
        && handleSignin();
        // !!userId && socketIO.on('connect', () => {
        //     socketIO.emit('user_connected', user.id);
        // });
    }, [isAuth]);

    const classes = useStyles();
    return (
        <header className={classes.root} id='back-to-top-anchor'>
            <div className='header-wrapper'>
                <Container maxWidth="xl">
                    <Top
                        t={t}
                        isAuth={isAuth}
                        handleOpenModal={handleOpenModal}
                    />
                    <div>
                        <Bottom
                            t={t}
                            isAuth={isAuth}
                            avatar={user.avatar}
                            handleOpenModal={handleOpenModal}
                        />
                    </div>
                </Container>
                <div className={classes.modalDialog}>
                    <AuthContainer/>
                </div>
            </div>
        </header>
    );
};
