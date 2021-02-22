import React, { FC, useState } from 'react'
import { Grid, List, ListItem, ListItemText, Typography } from '@material-ui/core'
import { useRouter } from 'next/router'
import { useStyles } from './useStyles'


export const ThemesMenu: FC<any> = ({ data, onClick, title }) => {
    const [open, setOpen] = useState(false)
    const [isActive, setActive] = useState(false)

    const { pathname } = useRouter()

    const handleToggle = () => {
        setActive(!isActive)
    }

    const classes = useStyles()
    return (
        <Grid item xs={3} className={classes.root}>
            <Typography variant="h6" color="initial">
                {title}
            </Typography>
            <List component="nav" className={classes.helpMenu}>
                {
                    data.map((el) => {
                        return (
                            <ListItem
                                button
                                key={el.id}
                                onClick={() => onClick(el.term)}
                                className={pathname === `/legal/${el.term}` ? classes.active : ''}
                            >
                                <ListItemText primary={el.title} />
                            </ListItem>
                        )
                    })
                }
                {/*<Collapse in={open} timeout="auto" unmountOnExit>*/}
                {/*    <List component="div" disablePadding>*/}
                {/*        <ListItem button onClick={handleChildClick}*/}
                {/*            <ListItemText primary="Я хочу заказать услугу" />*/}
                {/*        </ListItem>*/}
                {/*        <ListItem button/>*/}
                {/*            <ListItemText primary="Я хочу предложить услугу" />*/}
                {/*        </ListItem>*/}
                {/*    </List>*/}
                {/*</Collapse>*/}
            </List>
            {/*<List component="nav" className={classes.helpMenu + ' feedback'}>*/}
            {/*    <Link href='/feedback'>*/}
            {/*        <a>*/}
            {/*            <ListItem button>*/}
            {/*                <ListItemText primary={} />*/}
            {/*            </ListItem>*/}
            {/*        </a>*/}
            {/*    </Link>*/}
            {/*</List>*/}
        </Grid>
    )
}
