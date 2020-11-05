import React, {FC, useState} from "react";
import {Menu, MenuItem, Typography} from "@material-ui/core";
import {CustomMenuProps} from "@root/interfaces/CustomMenuProps";
import {ButtonComponent} from "@src/components/elements/button/Button";


export const CustomMenu: FC<CustomMenuProps> = (props) => {
    const {valueName, items, onClick, onBlur} = props;

    const [anchor, setAnchor] = useState(null);

    const handleMenuOpen = (e) => {
        setAnchor(e.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchor(null);
    };

    return (
        <>
            <ButtonComponent
                style={{
                    backgroundColor: '#fafafa',
                    border: '1px solid #4e4e4e',
                }}
                onClick={handleMenuOpen}
                disabled={!items.length}
            >
                <Typography style={{color: '#4e4e4e'}}>
                    {valueName}
                </Typography>
            </ButtonComponent>
            <Menu
                anchorEl={anchor}
                open={Boolean(anchor)}
                onClose={handleMenuClose}
            >
                {
                    items.map((item, i) => (
                        <MenuItem
                            key={i}
                            id={item.name}
                            onBlur={onBlur}
                            onClick={onClick(item, setAnchor)}
                        >
                            <Typography>{item.name}</Typography>
                        </MenuItem>
                    ))
                }
            </Menu>
        </>
    )
};