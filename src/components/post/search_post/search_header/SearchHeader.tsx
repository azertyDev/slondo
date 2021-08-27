import {FC} from 'react';
import {Top} from '@src/components/header/top/Top';
import {useModal} from '@src/hooks';
import Bottom from '@src/components/header/bottom/Bottom';
import {AuthContainer} from '@src/components/header/auth/AuthContainer';
import {CategoriesDrawer} from '@src/components/header/bottom/categories_drawer/CategoriesDrawer';
import {Hidden} from '@material-ui/core';
import {useRouter} from 'next/router';
import {useStyles} from './useStyles';

export const SearchHeader: FC = () => {
    const {
        modalOpen: drawerOpen,
        handleModalOpen: handleDrawerOpen,
        handleModalClose: handleDrawerClose
    } = useModal();
    const {pathname} = useRouter();

    const handlePageReload = () => {
        return pathname === '/' && window.location.reload();
    };

    const classes = useStyles();
    return (
        <header className={classes.root} id='back-to-top-anchor'>
            <div className='header-wrapper'>
                <Top
                    positionStatic
                    handleDrawerOpen={handleDrawerOpen}
                    handlePageReload={handlePageReload}
                />
                <Hidden smDown>
                    <Bottom handleDrawerOpen={handleDrawerOpen} handlePageReload={handlePageReload} />
                </Hidden>
                <div className={classes.modalDialog}>
                    <AuthContainer />
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
