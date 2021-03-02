import React, {useState} from 'react'
import Drawer from '@material-ui/core/Drawer'
import {categories_list} from '@src/common_data/categories_list'
import {InputAdornment, List, ListItem, TextField, Typography} from '@material-ui/core'
import {useTranslation} from 'i18n'
import {useStyles} from './useStyles'
import {Search_icon} from '@src/components/elements/icons'
import {Link} from '@root/i18n'
import {transformTitle} from '@src/helpers'

export const CustomDrawer = ({ toggleDrawer, position }) => {
    const classes = useStyles()
    const { t } = useTranslation(["categories"])
    const [subList, setSubList] = useState<any>([])
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
            <List>
                {
                    categories_list.map((ctgr, i) =>
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
                                            {t(ctgr.name)}
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
                BackdropProps={{invisible: true}}
            >
                {list('left')}
            </Drawer>
            <div style={{
                display: subList.length === 0 ? 'none' : 'flex',
                flexDirection: 'column',
                flexWrap: 'wrap',
                height: '100vh',
                width: "100%",
                background: "white",
                position: 'absolute',
                zIndex: 99999,
                left: '120px',
                top: -35,
                overflowY: 'auto'
            }}>
                <h1 onClick={() => setSubList([])} style={{cursor: "pointer"}}>X</h1>
                {subList?.subCategory?.map((ParentItem) => {
                    return (
                        <div key={ParentItem.id}>
                            <Typography variant="h6" gutterBottom color="secondary">
                                <Link href={`/categories/${transformTitle(ParentItem.ru_name)}`}>
                                    <a>
                                        {t(ParentItem.name)}
                                    </a>
                                </Link>
                            </Typography>
                            {ParentItem?.type?.map((item) => (
                                <Link href={`/categories/${transformTitle(ParentItem.ru_name)}/${transformTitle(item.ru_name)}`}>
                                    <a>
                                        <Typography variant="body2" key={item.id}>
                                            {t(item.name)}
                                        </Typography>
                                    </a>
                                </Link>
                            ))}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
