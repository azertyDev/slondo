import React, {Dispatch} from "react"
import Drawer from '@material-ui/core/Drawer'
import {Typography} from "@material-ui/core"
import {Link} from '@root/i18n'

// icons
import {QuestionIcon, StoreIcon, BusinessIcon} from "@src/components/elements/icons";

// styles
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
                <Link href='#'>
                    <a>
                        <BusinessIcon/>
                        <Typography variant="h6">Для бизнеса</Typography>
                    </a>
                </Link>
                <Link href='#'>
                    <a>
                        <StoreIcon/>
                        <Typography variant="h6">Магазины</Typography>
                    </a>
                </Link>
                <Link href='#'>
                    <a>
                        <QuestionIcon/>
                        <Typography variant="h6">Помощь</Typography>
                    </a>
                </Link>


            </div>
        </Drawer>
    )
};