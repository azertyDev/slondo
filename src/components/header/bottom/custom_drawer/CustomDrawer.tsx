import React, {FC, useState} from 'react';
import Link from 'next/link';
import Drawer from '@material-ui/core/Drawer';
import {InputAdornment, List, ListItem, TextField, Typography} from '@material-ui/core';
import {categories_list} from '@src/common_data/categories_list';
import {useTranslation} from 'next-i18next';
import {Search_icon} from '@src/components/elements/icons';
import {addParentsToCtgrs, transformToCyrillic} from '@src/helpers';
import {useStyles} from './useStyles';


export const CustomDrawer: FC<any> = ({toggleDrawer, position}) => {
    const {t} = useTranslation('categories');

    const initHoverCtgr = {
        subCategory: []
    };
    const [hoverCtgr, setHoverCategory] = useState<any>(initHoverCtgr);

    const handleCategory = (ctgr) => () => {
        setHoverCategory(ctgr ?? initHoverCtgr);
    };

    const list = () => (
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
                    )
                }}
                variant="outlined"
                placeholder="Поиск категорий"
            />
            <List>
                {addParentsToCtgrs(categories_list).map((ctgr) =>
                    <ListItem
                        button
                        key={ctgr.id}
                        disableGutters
                        onMouseEnter={handleCategory(ctgr)}
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
                )}
            </List>
        </div>
    );

    const classes = useStyles();
    return (
        <div style={{position: 'relative'}}>
            <Drawer
                anchor='left'
                open={position['left']}
                onClose={toggleDrawer('left', false)}
                BackdropProps={{invisible: true}}
            >
                {list()}
            </Drawer>
            <div
                style={{
                    display: hoverCtgr.subCategory.length === 0 ? 'none' : '',
                    height: '100vh',
                    width: '100%',
                    background: 'white',
                    position: 'absolute',
                    zIndex: 99999,
                    left: '120px',
                    top: -35,
                    overflowY: 'auto'
                }}
            >
                <h1 onClick={() => setHoverCategory(initHoverCtgr)} style={{cursor: 'pointer'}}>X</h1>
                {hoverCtgr.subCategory.map(subCategory => {
                    const location = 'tashkent';
                    const categoryName = transformToCyrillic(hoverCtgr.ru_name);
                    const subCategoryName = transformToCyrillic(subCategory.ru_name);
                    const type = subCategory.type;
                    const url = `/${location}/${categoryName}/${subCategoryName}`;

                    return (
                        <div key={subCategory.id}>
                            {type
                             ? <div>
                                 <Link key={type.id} href={url}>
                                     <a>
                                         <Typography variant="h6" gutterBottom color="secondary">
                                             {subCategory.name}
                                         </Typography>
                                     </a>
                                 </Link>
                                 {type.map(type => {
                                     const typeName = transformToCyrillic(type.ru_name);
                                     return (
                                         <Link key={type.id} href={url + `/${typeName}`}>
                                             <a>
                                                 <Typography variant="body2" key={type.id}>
                                                     {type.name}
                                                 </Typography>
                                             </a>
                                         </Link>
                                     );
                                 })}
                             </div>
                             : <Link href={url}>
                                 <a>
                                     <Typography variant="h6" gutterBottom color="secondary">
                                         {subCategory.name}
                                     </Typography>
                                 </a>
                             </Link>}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};