import {FC} from 'react';
import {SidebarMenu} from '@src/components/cabinet/cabinet_sidebar/sidebar_menu/SidebarMenu';
import {useStyles} from './useStyles';

export const CabinetSidebar: FC = () => {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <SidebarMenu/>
        </div>
    );
};
