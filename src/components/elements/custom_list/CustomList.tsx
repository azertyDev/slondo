import React from "react"
import {IconButton, List, ListItem, ListItemSecondaryAction, Typography} from '@material-ui/core'
import {ArrowForwardIos} from '@material-ui/icons'
import {useStyles} from './useStyles'


export const CustomList = ({list}) => {

    const classes = useStyles();
    return (
        <List className={classes.root}>
            {
                list.map(item => (
                    <ListItem key={item.name} button>
                        <Typography variant='subtitle1'>{item.name}</Typography>
                        <ListItemSecondaryAction>
                            <IconButton>
                                <ArrowForwardIos/>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))
            }
        </List>
    )
};