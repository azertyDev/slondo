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
import {useTranslation} from 'next-i18next';

type MenuItemPropsType = {
    data: any,
};

export const MenuItem: FC<MenuItemPropsType> = ({data}) => {
    const {push, query} = useRouter();
    const [term, subTerm] = query.term as string[] || [];
    const isOpen = term === data.term;
    const {t} = useTranslation('help');

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
                            {t(`${data.term}.name`)}
                        </Typography>
                    }
                />
            </ListItem>
            {data.subSections && <Collapse in={isOpen} timeout="auto" unmountOnExit>
                <List component="nav" disablePadding className={classes.subMenu}>
                    {data.subSections.map((subData, index) => {
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
                                        {t(`${data.term}.${subData.term}.name`)}
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
