import {FC, useState} from 'react';
import Link from 'next/link';
import Drawer from '@material-ui/core/Drawer';
import {Box, List, ListItem, Typography} from '@material-ui/core';
import {site_categories} from '@src/common_data/site_categories';
import {useTranslation} from 'next-i18next';
import {transformCyrillic} from '@src/helpers';
import {CloseBtn} from '@src/components/elements/close_button/CloseBtn';
import {useStyles} from './useStyles';


type CustomDrawerPropsType = {
    position: 'top' | 'right' | 'bottom' | 'left',
    open: boolean,
    onClose: () => void
};

export const CustomDrawer: FC<CustomDrawerPropsType> = (props) => {
    const {
        open,
        onClose,
        position
    } = props;

    const {t} = useTranslation('categories');

    const initHoveredCtgr = {
        subcategory: []
    };

    const [hoveredCtgr, setHoveredCtgr] = useState<any>(initHoveredCtgr);
    const {subcategory} = hoveredCtgr;

    const handleCategory = (ctgr) => () => {
        setHoveredCtgr(ctgr ?? initHoveredCtgr);
    };

    const handleClose = () => {
        onClose();
        setHoveredCtgr(initHoveredCtgr);
    };

    const classes = useStyles();
    return (
        <Drawer
            open={open}
            onClose={handleClose}
            anchor={position}
            classes={{paper: classes.drawerPaper}}
        >
            <div className={classes.drawerList}>
                {site_categories.map((ctgr) =>
                    <ListItem
                        button
                        key={ctgr.id}
                        disableGutters
                        onMouseEnter={handleCategory(ctgr)}
                        className={ctgr.name === hoveredCtgr[0]?.parents[0].name ? 'hovered' : ''}
                    >
                        <div className='icon'>
                            {ctgr.smallIcon}
                        </div>
                        <Typography
                            variant="subtitle1"
                            color="initial"
                        >
                            {t(`${ctgr.name}.name`)}
                        </Typography>
                    </ListItem>
                )}
            </div>
            {!!subcategory.length && (
                <div className={classes.drawerContent}>
                    <div className='close-btn-wrapper'>
                        <CloseBtn handleClose={handleClose} />
                    </div>
                    <Box display='flex' flexWrap='wrap'>
                        {subcategory.map(subctgr => {
                            const location = 'tashkent';
                            const categoryName = transformCyrillic(hoveredCtgr.ru_name);
                            const subcategoryName = transformCyrillic(subctgr.ru_name);
                            const type = subctgr.type || [];
                            const url = `/${location}/${categoryName}/${subcategoryName}`;
                            return (
                                <List key={subctgr.id}>
                                    <Link href={url}>
                                        <a onClick={handleClose}>
                                            <Typography variant="h6" gutterBottom color="secondary">
                                                {t(`${hoveredCtgr.name}.${subctgr.name}.name`)}
                                            </Typography>
                                        </a>
                                    </Link>
                                    {type.map(type => {
                                        const typeName = transformCyrillic(type.ru_name);
                                        const typeCtgrTrans = t(`${hoveredCtgr.name}.${subctgr.name}.${type.name}.name`);
                                        return (
                                            <ListItem key={type.id}>
                                                <Link href={url + `/${typeName}`}>
                                                    <a onClick={handleClose}>
                                                        <Typography variant="subtitle1" key={type.id}>
                                                            {typeCtgrTrans}
                                                        </Typography>
                                                    </a>
                                                </Link>
                                            </ListItem>
                                        );
                                    })}
                                </List>
                            );
                        })}
                    </Box>
                </div>
            )}
        </Drawer>
    );
};