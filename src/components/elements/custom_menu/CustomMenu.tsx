import React, {FC, useState} from "react";
import {Menu, MenuItem, Typography} from "@material-ui/core";
import {CustomMenuProps} from "@root/interfaces/CustomMenuProps";
import {ButtonComponent} from "@src/components/elements/button/Button";
import {isRequired} from "@root/validation_schemas/createPostSchema";
import {noSelect} from "@src/helpers";


export const CustomMenu: FC<CustomMenuProps> = (props) => {
    const {
        disabled,
        name,
        valueName,
        items,
        onClick,
        onBlur,
        getValByName = 'name'
    } = props;

    const [anchor, setAnchor] = useState(null);

    const handleMenuOpen = (e) => {
        setAnchor(e.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchor(null);
    };

    return (
        <div className={props.className}>
            <ButtonComponent
                style={{
                    backgroundColor: '#fafafa',
                    border: '1px solid #4e4e4e',
                }}
                onClick={handleMenuOpen}
                disabled={!items.length || disabled}
                name={props.name}
                onBlur={onBlur}
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
                {!isRequired(name)
                && <MenuItem
                    id={noSelect.name}
                    onClick={onClick(noSelect, setAnchor)}
                >
                    <Typography>{noSelect.name}</Typography>
                </MenuItem>}
                {items.map((item, i) => (
                    <MenuItem
                        key={i}
                        id={item.name}
                        onClick={onClick(item, setAnchor)}
                    >
                        <Typography>{item[getValByName]}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </div>
    )
};