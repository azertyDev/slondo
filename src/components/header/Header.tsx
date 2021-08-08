import {FC, useContext, useEffect} from 'react';
import {Top} from './top/Top';
import Bottom from './bottom/Bottom';
import {AuthContainer} from './auth/AuthContainer';
import {cookies} from '@src/helpers';
import {UserCtx, AuthCtx} from "@src/context";
import {useStyles} from './useStyles';
import {CategoriesDrawer} from "@src/components/header/bottom/categories_drawer/CategoriesDrawer";
import {useModal} from "@src/hooks";
// import {socketIO} from '@src/api/api';


export const Header: FC = () => {
    const userFromCookies = cookies.get('slondo_user');

    const {user, setUser} = useContext(UserCtx);
    const {auth, setAuthModalOpen, setIsAuth} = useContext(AuthCtx);
    const isAuth = auth.isAuth || !!userFromCookies;

    const {
        modalOpen: drawerOpen,
        handleModalOpen: handleDrawerOpen,
        handleModalClose: handleDrawerClose
    } = useModal();

    const handleOpenModal = () => {
        setAuthModalOpen(true);
    };

    const handleSignin = () => {
        setIsAuth(true);
        setUser(userFromCookies);
    };

    useEffect(() => {
        !auth.isAuth
        && !!userFromCookies
        && handleSignin();
        // !!userId && socketIO.on('connect', () => {
        //     socketIO.emit('user_connected', user.id);
        // });
    }, [isAuth]);

    const classes = useStyles();
    return (
        <header className={classes.root} id='back-to-top-anchor'>
            <div className='header-wrapper'>
                <Top
                    isAuth={isAuth}
                    handleOpenModal={handleOpenModal}
                    handleDrawerOpen={handleDrawerOpen}
                />
                <Bottom
                    isAuth={isAuth}
                    avatar={user.avatar}
                    handleOpenModal={handleOpenModal}
                    handleDrawerOpen={handleDrawerOpen}
                />
                <CategoriesDrawer
                    position='left'
                    open={drawerOpen}
                    onClose={handleDrawerClose}
                />
                <div className={classes.modalDialog}>
                    <AuthContainer/>
                </div>
            </div>
        </header>
    );
};
