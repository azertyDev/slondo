import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& div.categories-menu, & div.subcategories-menu': {
            '& > ul': {
                background: '#F2F2F2',
                borderRadius: '10px',
                padding: '15px',
                [theme.breakpoints.down('xs')]: {
                    padding: 0,
                    background: 'inherit',
                    borderRadius: 0
                },
                '& > li': {
                    height: '38px',
                    cursor: 'pointer',
                    backgroundColor: '#fff',
                    marginBottom: '5px',
                    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
                    boxSizing: 'border-box',
                    borderRadius: '5px',
                    [theme.breakpoints.down('xs')]: {
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        height: '62px',
                        marginBottom: 0,
                        backgroundColor: 'inherit',
                        boxShadow: 'none',
                        borderRadius: 0,
                        paddingTop: '13px',
                        paddingBottom: '13px',
                        '&:not(:last-child)': {
                            '&:after': {
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                content: '""',
                                width: '100%',
                                height: '0.8px',
                                background: 'linear-gradient(90deg, rgba(243, 243, 243, 0) -4.72%, rgba(204, 204, 204, 0.35) 47.81%, rgba(248, 248, 248, 0) 104.92%)'
                            }
                        },
                        '& > svg > path': {
                            fill: '#838383'
                        }
                    },
                    '& h6': {
                        display: 'flex',
                        alignItems: 'center',
                        '& > svg': {
                            margin: '0 15px'
                        }
                    },
                    '&.selected-category': {
                        border: '1px solid #845CAB',
                        '& > h6.MuiTypography-subtitle1': {
                            color: theme.palette.primary.secondary
                        },
                        '& > svg': {
                            '& > path': {
                                fill: '#845CAB'
                            }
                        }
                    }
                }
            }
        },
        '& div.search-block': {
            boxShadow: '0px 1px 10px rgba(0, 0, 0, 0.1)',
            borderRadius: 10,
            marginBottom: 10,
            [theme.breakpoints.down('xs')]: {
                marginBottom: 0
            },
            '& > div.MuiInputBase-root': {
                border: 0,
                '& > svg': {
                    margin: '0 20px 0 30px'
                },
                '& > input.MuiInputBase-input': {
                    padding: '10px 0'
                }
            }
        },
        '& div.categories-menu': {
            paddingRight: 20,
            [theme.breakpoints.down('sm')]: {
                paddingRight: 0,
                '& span.ctgr-icon': {
                    margin: '0 15px',
                    background: 'rgba(236, 235, 240, 0.8)',
                    borderRadius: '100px',
                    width: 36,
                    height: 36,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }
            }

        },
        '& div.subcategories-menu': {
            '& h6.subcategories-list-item': {
                [theme.breakpoints.down('xs')]: {
                    maxWidth: '260px',
                    wordBreak: 'break-word',
                    whiteSpace: 'pre-wrap'
                }
            },
            '& button.back-btn': {
                color: theme.palette.primary.white,
                background: 'none',
                padding: 0,
                '& svg': {
                    marginRight: '15px'
                },
                '& h6.MuiTypography-subtitle1': {
                    fontWeight: 600
                }
            },
            '& ul': {
                '& > li:hover': {
                    backgroundColor: theme.palette.primary.gray
                }
            },
            '& > div.subcategory-bg': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                minHeight: '452px',
                background: '#F2F2F2',
                borderRadius: '10px',
                backgroundImage: `url('/img/category-bg.png')`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom left',
                opacity: 0.8,
                [theme.breakpoints.down('md')]: {
                    height: '454px'
                },
                '& > h2.MuiTypography-h2': {
                    width: '50%',
                    fontSize: '4vw',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    color: theme.palette.common.tab
                }
            }
        }
    }
}));
