import {FC} from 'react';
import {Top} from './top/Top';
import {useModal} from "@src/hooks";
import Bottom from './bottom/Bottom';
import {AuthContainer} from './auth/AuthContainer';
import {CategoriesDrawer} from "@src/components/header/bottom/categories_drawer/CategoriesDrawer";
import {useStyles} from './useStyles';

export const Header: FC = () => {
    const {
        modalOpen: drawerOpen,
        handleModalOpen: handleDrawerOpen,
        handleModalClose: handleDrawerClose
    } = useModal();

    const classes = useStyles();
    return (
        <header className={classes.root} id='back-to-top-anchor'>
            <div className='header-wrapper'>
                <Top handleDrawerOpen={handleDrawerOpen}/>
                <Bottom handleDrawerOpen={handleDrawerOpen}/>
                <div className={classes.modalDialog}>
                    <AuthContainer/>
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
