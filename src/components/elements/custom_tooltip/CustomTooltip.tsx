import React from 'react'
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import ShareIcon from "@material-ui/icons/Share";

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
            <div>
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
                    <ShareIcon onClick={handleTooltipOpen} style={{paddingTop: 6}} />
                </Tooltip>
            </div>
        </ClickAwayListener>
    )
}

export default CustomTooltip
