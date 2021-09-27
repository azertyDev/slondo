import {FC, useContext, useEffect} from 'react';
import {Top} from './top/Top';
import {useModal} from "@src/hooks";
import {Bottom} from './bottom/Bottom';
import {AuthModal} from './auth_modal/AuthModal';
import {CategoriesDrawer} from "@src/components/header/bottom/categories_drawer/CategoriesDrawer";
import {useRouter} from 'next/router';
import {useStyles} from './useStyles';
import {AuthCtx, SocketCtx} from "@src/context";

export const Header: FC = () => {
    const {
        modalOpen: drawerOpen,
        handleModalOpen: handleDrawerOpen,
        handleModalClose: handleDrawerClose
    } = useModal();

    const {pathname} = useRouter();

    const socket = useContext(SocketCtx);
    const self = useContext(AuthCtx).user;

    const handlePageReload = () => {
        return pathname === '/' && window.location.reload();
    };

    useEffect(() => {
        if (socket) {
            socket.on('connect', () => {
                socket.emit('user_connected', self.id);
            });
            return () => {
                socket.off('connect', () => {
                    socket.emit('disconnect', self.id);
                });
            };
        }
    }, [socket]);

    const classes = useStyles();
    return (
        <header className={classes.root} id='back-to-top-anchor'>
            <div className='header-wrapper'>
                <Top handleDrawerOpen={handleDrawerOpen} handlePageReload={handlePageReload}/>
                <Bottom handleDrawerOpen={handleDrawerOpen} handlePageReload={handlePageReload}/>
                <div className={classes.modalDialog}>
                    <AuthModal/>
                </div>
                <CategoriesDrawer
                    position='left'
                    open={drawerOpen}
                    onClose={handleDrawerClose}
                />
            </div>
        </header>
    );
};
