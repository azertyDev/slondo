import React, {FC} from 'react'
import Drawer from '@material-ui/core/Drawer'
import {categories_list} from '@src/common_data/categories_list'
import {InputAdornment, List, ListItem, TextField, Typography} from '@material-ui/core'
import {useTranslation} from 'i18n'
import {useStyles} from './useStyles'
import {Search_icon} from '@src/components/elements/icons'


export const CustomDrawer: FC<any> = ({toggleDrawer, position}) => {
    const {t} = useTranslation()


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
                            <Search_icon/>
                        </InputAdornment>
                    ),
                }}
                variant="outlined"
                placeholder="Поиск категорий"
            />
            <List disablePadding>
                {
                    categories_list.map((ctgr, i) =>
                        <ListItem
                            key={i}
                            disableGutters
                            button
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
                        </ListItem>)
                }
                <ListItem
                    disableGutters
                    button
                    className='all-ctgrs'
                >
                    <Typography
                        variant="subtitle1"
                        color="initial"
                    >
                        Все категории
                    </Typography>
                </ListItem>
            </List>
            <Typography variant='subtitle1'>
            </Typography>
        </div>
    )

    return (
        <div>
            <Drawer
                anchor='left'
                open={position['left']}
                onClose={toggleDrawer('left', false)}
                BackdropProps={{invisible: true}}
            >
                {list('left')}
            </Drawer>
        </div>
    )
}
