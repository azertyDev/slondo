import {FC} from 'react';
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
};

export const MenuItem: FC<MenuItemPropsType> = ({data}) => {
    const {push, query} = useRouter();
    const [term, subTerm] = query.term as string[] || [];
    const isOpen = term === data.term;

    const handleClick = (subTerm?) => async () => {
        await push(`/help/${data.term}/${subTerm ?? ''}`, undefined, {shallow: true});
    };    

    const classes = useStyles();
    return (
        <>
            <ListItem
                button
                onClick={handleClick()}
                selected={term === data.term}
            >
                <ListItemText
                    primary={
                        <Typography
                            variant="subtitle1"
                            color="textPrimary"
                        >
                            {data.section}
                        </Typography>
                    }
                />
            </ListItem>
            {data.subSections && <Collapse in={isOpen} timeout="auto" unmountOnExit>
                <List component="nav" disablePadding className={classes.subMenu}>
                    {data.subSections.map((subData, index) => {
                        console.log(subData.term);
                        return (
                            <ListItem
                                button
                                key={index}
                                selected={subTerm === subData.term}
                                onClick={handleClick(subData.term)}>
                                <ListItemText primary={
                                    <Typography
                                        variant="subtitle2"
                                        color="textPrimary"
                                    >
                                        {subData.section}
                                    </Typography>
                                }/>
                            </ListItem>
                        );
                    })}
                </List>
            </Collapse>}
        </>
    );
};
