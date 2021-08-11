import {FC, useState} from 'react';
import Link from 'next/link';
import {useTranslation} from 'next-i18next';
import Drawer from '@material-ui/core/Drawer';
import {getUserLocationName, transformCyrillic} from '@src/helpers';
import {site_categories} from '@src/common_data/site_categories';
import {Hidden, List, ListItem, Typography, useMediaQuery, useTheme} from '@material-ui/core';
import {CloseBtn} from '@src/components/elements/close_button/CloseBtn';
import {CategoryType} from '@root/interfaces/Categories';
import {useStyles} from './useStyles';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

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

        const subctgrName = t(`${subcategory[0]?.parents[0].name}.name`);

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
                                <div className='drawer-header'>
                                    <div></div>
                                    <Typography variant='subtitle1'>
                                        {t('header:categories')}
                                    </Typography>
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
                                            className={`bottom-line ${hovered ? 'hovered' : ''}`}
                                            onMouseEnter={!isXsDown ? handleCategory(ctgr) : null}
                                        >
                                            <div className='list-content'>
                                                <div className='icon'>
                                                    {ctgr.smallIcon}
                                                </div>
                                                <Typography
                                                    variant="subtitle1"
                                                    color="initial"
                                                >
                                                    {t(`${ctgr.name}.name`)}
                                                </Typography>
                                            </div>
                                            <Hidden smUp>
                                                <KeyboardArrowRightIcon/>
                                            </Hidden>
                                        </ListItem>
                                    );
                                }
                            )}
                        </div>
                    )}
                    {hasSubctgr && (
                        <div className={classes.drawerContent}>
                            <Hidden smUp>
                                <div className='drawer-header'>
                                    <ArrowBackIosIcon onClick={handlePrev} fontSize='small'/>
                                    <Typography variant='subtitle1'>
                                        {subctgrName}
                                    </Typography>
                                    <CloseBtn handleClose={handleClose}/>
                                </div>
                            </Hidden>
                            <Hidden xsDown>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'flex-end'
                                }}>
                                    <CloseBtn handleClose={handleClose}/>
                                </div>
                            </Hidden>
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
                            <ListItem className='list-item-title bottom-line'>
                                <Link href={url}>
                                    <a onClick={handleClose}>
                                        <Typography
                                            variant="h6"
                                            className='list-title'
                                            gutterBottom color="secondary"
                                        >
                                            {t(`${hoveredCtgr.name}.${subctgr.name}.name`)}
                                            <Hidden smUp>
                                                <KeyboardArrowRightIcon/>
                                            </Hidden>
                                        </Typography>
                                    </a>
                                </Link>
                            </ListItem>
                            {type.map(type => {
                                const typeName = transformCyrillic(type.ru_name);
                                const typeCtgrTrans = t(`${hoveredCtgr.name}.${subctgr.name}.${type.name}.name`);
                                return (
                                    <ListItem key={type.id} className='list-items-wrapper bottom-line'>
                                        <Link href={url + `/${typeName}`}>
                                            <a onClick={handleClose} className='list-item'>
                                                <Typography variant="subtitle1" key={type.id}>
                                                    {typeCtgrTrans}
                                                </Typography>
                                                <Hidden smUp>
                                                    <KeyboardArrowRightIcon/>
                                                </Hidden>
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
    }
;