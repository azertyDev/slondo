import React from 'react'
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import {Share} from '@material-ui/icons';

const CustomTooltip = ({title, arrow}) => {

    const [open, setOpen] = React.useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };

    return (
        <ClickAwayListener onClickAway={handleTooltipClose}>
            <>
                <Tooltip
                    PopperProps={{
                        disablePortal: true,
                    }}
                    onClose={handleTooltipClose}
                    open={open}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                    title={title}
                    arrow={arrow}
                >
                    <Share onClick={handleTooltipOpen} />
                </Tooltip>
            </>
        </ClickAwayListener>
    )
}

export default CustomTooltip
