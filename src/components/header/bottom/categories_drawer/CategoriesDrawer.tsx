import {FC, useState} from 'react';
import Link from 'next/link';
import {useTranslation} from 'next-i18next';
import Drawer from '@material-ui/core/Drawer';
import {getUserLocationName, transformCyrillic} from '@src/helpers';
import {site_categories} from '@src/common_data/site_categories';
import {Hidden, List, ListItem, Typography, useMediaQuery, useTheme} from '@material-ui/core';
import {CloseBtn} from '@src/components/elements/close_button/CloseBtn';
import {PrevArrowIcon} from "@src/components/elements/icons";
import {CategoryType} from "@root/interfaces/Categories";
import {useStyles} from './useStyles';

type CustomDrawerPropsType = {
    open: boolean,
    onClose: () => void,
    position: 'top' | 'right' | 'bottom' | 'left'
};

export const CategoriesDrawer: FC<CustomDrawerPropsType> = (props) => {
    const {
        open,
        onClose,
        position
    } = props;

    const userLocation = getUserLocationName();
    const {t} = useTranslation('categories');
    const isXsDown = useMediaQuery(useTheme().breakpoints.down('xs'));

    const initHoveredCtgr: CategoryType = {
        id: null,
        name: null,
        subcategory: []
    };

    const [hoveredCtgr, setHoveredCtgr] = useState<CategoryType>(initHoveredCtgr);
    const {subcategory} = hoveredCtgr;
    const hasSubctgr = !!subcategory.length;

    const handleCategory = (ctgr) => () => {
        setHoveredCtgr(ctgr ?? initHoveredCtgr);
    };

    const handlePrev = () => {
        setHoveredCtgr(initHoveredCtgr);
    };

    const handleClose = () => {
        onClose();
        setHoveredCtgr(initHoveredCtgr);
    };

    const classes = useStyles();
    return (
        <Drawer
            open={open}
            anchor={position}
            onClose={handleClose}
            classes={{paper: classes.drawerPaper}}
        >
            <>
                {(!(hasSubctgr && isXsDown) || !isXsDown) && (
                    <div className={classes.drawerList}>
                        <Hidden smUp>
                            <div className={classes.topBtns} style={{justifyContent: 'flex-end'}}>
                                <CloseBtn handleClose={handleClose}/>
                            </div>
                        </Hidden>
                        {site_categories.map((ctgr) => {
                                const hovered = ctgr.id === hoveredCtgr.id;
                                return (
                                    <ListItem
                                        button
                                        key={ctgr.id}
                                        disableGutters
                                        onClick={handleCategory(ctgr)}
                                        className={hovered ? 'hovered' : ''}
                                        onMouseEnter={!isXsDown ? handleCategory(ctgr) : null}
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
                                );
                            }
                        )}
                    </div>
                )}
                {hasSubctgr && (
                    <div className={classes.drawerContent}>
                        <div className={classes.topBtns}>
                            {isXsDown && (
                                <PrevArrowIcon onClick={handlePrev}/>
                            )}
                            <CloseBtn handleClose={handleClose}/>
                        </div>
                        <div className='main-box-wrapper'>
                            <div className='box-wrapper'>
                                {getSubctgr(true)}
                            </div>
                            <div className='box-wrapper'>
                                {getSubctgr()}
                            </div>
                        </div>
                    </div>
                )}
            </>
        </Drawer>
    );

    function getSubctgr(hones = false) {
        return subcategory.map((subctgr, i) => {
            const categoryName = transformCyrillic(hoveredCtgr.ru_name);
            const subcategoryName = transformCyrillic(subctgr.ru_name);
            const type = subctgr.type || [];
            const url = `/${userLocation}/${categoryName}/${subcategoryName}`;

            const allow = hones ? (i % 2 === 0) : !hones && (i % 2 !== 0);

            if (allow) {
                return (
                    <List key={subctgr.id} className='list-wrapper'>
                        <Link href={url}>
                            <a onClick={handleClose}>
                                <Typography
                                    variant="h6"
                                    className='list-title'
                                    gutterBottom color="secondary"
                                >
                                    {t(`${hoveredCtgr.name}.${subctgr.name}.name`)}
                                </Typography>
                            </a>
                        </Link>
                        {type.map(type => {
                            const typeName = transformCyrillic(type.ru_name);
                            const typeCtgrTrans = t(`${hoveredCtgr.name}.${subctgr.name}.${type.name}.name`);
                            return (
                                <ListItem key={type.id} className='list-item'>
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
            }
        });
    }
};