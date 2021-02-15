import React, { useState } from 'react'
import Drawer from '@material-ui/core/Drawer'
import { categoriesList } from '@src/common_data/categoriesList'
import { InputAdornment, List, ListItem, TextField, Typography } from '@material-ui/core'
import { useTranslation } from 'i18n'
import { useStyles } from './useStyles'
import { Search_icon } from '@src/components/elements/icons'
import Tooltip from '@material-ui/core/Tooltip';


export const CustomDrawer = ({ toggleDrawer, position }) => {
    const { t } = useTranslation()
    console.warn(position.left)
    console.warn("categoriesList", categoriesList)
    const [subList, setSubList] = useState([])

    const classes = useStyles()
    const list = (anchor) => (
        <div
            className={classes.drawerList}
            role="presentation"
        >
            <TextField
                className={classes.searchInput}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Search_icon />
                        </InputAdornment>
                    ),
                }}
                variant="outlined"
                placeholder="Поиск категорий"
            />
            <List>
                {
                    categoriesList.map((ctgr, i) =>
                        <ListItem
                            key={ctgr.id}
                            disableGutters
                            button
                            onMouseEnter={() => setSubList(ctgr)}
                        >
                            <div className='icon'>
                                {ctgr.smallIcon}
                            </div>
                            <Typography
                                variant="subtitle1"
                                color="initial"
                            >
                                {t(`categories:${ctgr.name}`)}
                            </Typography>
                        </ListItem>
                    )
                }
            </List>
        </div>
    )

    return (
        <div style={{position: 'relative'}}>
            <Drawer
                anchor='left'
                open={position['left']}
                onClose={toggleDrawer('left', false)}
                BackdropProps={{ invisible: true }}
            >
                {list('left')}
            </Drawer>
            <div style={{
                display: subList.length === 0 ? 'none' : '',
                height: '100vh',
                width: "100%",
                background: "white",
                position: 'absolute',
                zIndex: 99999,
                left: '120px',
                top: -35
            }}>
                {subList?.model?.map((ParentItem) => {
                    return (
                        <div key={ParentItem.id}>
                            <Typography variant="h6" gutterBottom color="secondary">{ParentItem.name}</Typography>
                            {ParentItem?.type?.map((item) => (
                                <Typography variant="body2" key={item.id}>
                                    {item.name}
                                </Typography>
                            ))}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
