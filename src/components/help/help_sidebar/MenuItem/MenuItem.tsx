import {FC, useState} from 'react';
import {
    Collapse,
    List,
    ListItem,
    ListItemText,
    Typography
} from '@material-ui/core';
import {useRouter} from 'next/router';
import {useStyles} from '../useStyles';

type MenuItemPropsType = {
    data: any,
    handleClick: (term) => () => void,
};

export const MenuItem: FC<MenuItemPropsType> = ({data, handleClick}) => {

    const [open, setOpen] = useState(false);
    const {query: {term}} = useRouter();

    const handleMenuOpen = () => {
        handleClick(data.term);
        setOpen(!open);
    };
    const classes = useStyles();
    return (
        <>
            <ListItem
                button
                onClick={handleMenuOpen}
                selected={term === data.term}
            >
                <ListItemText primary={
                    <Typography
                        variant="subtitle1"
                        color="textPrimary"
                    >
                        {data.section}
                    </Typography>
                } />
            </ListItem>
            {data.subSections && (<Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {data.subSections.map((subSection, index) => {
                        return (
                            <ListItem button key={index}>
                                <ListItemText primary={
                                    <Typography
                                        variant="subtitle2"
                                        color="textPrimary"
                                    >
                                        {subSection}
                                    </Typography>
                                } />
                            </ListItem>
                        );
                    })}
                </List>
            </Collapse>)}
        </>
    );
};
