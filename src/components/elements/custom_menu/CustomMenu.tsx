import React, {FC, useState} from "react";
import {WithT} from "i18next";
import {FormikTouched} from "formik";
import {Menu, MenuItem, Typography} from "@material-ui/core";
import {ButtonComponent} from "@src/components/elements/button/Button";


type CustomMenuProps = {
    disabled?: boolean;
    name?: string;
    className?: string;
    valueName: string;
    getValByName?: string;
    items: ItemsType[];
    onClick: (v: unknown, a: unknown) => () => void;
    touched: FormikTouched<any>;
    setTouched: (touched: FormikTouched<any>, shouldValidate?: boolean) => any;
};

type ItemsType = {
    id: number;
    name: string;
    icon?: { url: string };
    hex_color_code?: string;
};

export const CustomMenu: FC<CustomMenuProps & WithT> = (props) => {
    const {
        t,
        disabled,
        name,
        valueName,
        items,
        onClick,
        touched,
        setTouched,
        getValByName = 'name'
    } = props;

    const isCurrency = name === 'currency';

    const [anchor, setAnchor] = useState(null);

    const handleMenuOpen = e => {
        setAnchor(e.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchor(null);
        setTouched({...touched, [name]: true})
    };

    return (
        <div className={props.className}>
            <ButtonComponent
                name={name}
                // onBlur={onBlur}
                onClick={handleMenuOpen}
                disabled={items.length < 2 || disabled}
                style={{
                    backgroundColor: '#fafafa',
                    border: '1px solid #4e4e4e',
                }}
            >
                <Typography style={{color: '#4e4e4e'}}>
                    {isCurrency ? t(`common:${valueName}`) : t(valueName)}
                </Typography>
            </ButtonComponent>
            <Menu
                anchorEl={anchor}
                open={Boolean(anchor)}
                onClose={handleMenuClose}
            >
                {
                    // !isRequired(name) && (
                    //     <MenuItem
                    //         id={noSelect.name}
                    //         onClick={onClick(noSelect, setAnchor)}
                    //     >
                    //         <Typography>{t(noSelect.name)}</Typography>
                    //     </MenuItem>
                    // )
                }
                {
                    items.map((item, i) =>
                        <MenuItem
                            key={i}
                            id={item.name}
                            onClick={onClick(item, setAnchor)}
                        >
                            <Typography>
                                {
                                    isCurrency
                                        ? t(`common:${item[getValByName]}`)
                                        : item[getValByName]
                                }
                            </Typography>
                        </MenuItem>
                    )
                }
            </Menu>
        </div>
    )
};