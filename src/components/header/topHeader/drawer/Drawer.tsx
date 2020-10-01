import React, {Dispatch} from "react"
import Drawer from '@material-ui/core/Drawer'
import {Typography} from "@material-ui/core"
import {
    HelpIcon,
    StoreIcon,
    BusinessIcon,
} from '../../../elements/icons'
import {useStyles} from './useStyles'

type DrawerProps = {
    isOpen: boolean,
    setIsOpen: Dispatch<boolean>
};

export const LeftDrawer = ({isOpen, setIsOpen}: DrawerProps) => {
    const toggleDrawer = (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setIsOpen(false);
    };

    const classes = useStyles();
    return (
        <Drawer anchor='left' className={classes.root} open={isOpen} onClose={toggleDrawer}>
            <div className='drawer-menu'>
                <a href="#">
                    <img src={HelpIcon}/>
                    <Typography variant="h6">Помощь</Typography>
                </a>
                <a href="#">
                    <img src={StoreIcon}/>
                    <Typography variant="h6">Магазины</Typography>
                </a>
                <a href="#">
                    <img src={BusinessIcon}/>
                    <Typography variant="h6">Для бизнеса</Typography>
                </a>
            </div>
        </Drawer>
    )
};