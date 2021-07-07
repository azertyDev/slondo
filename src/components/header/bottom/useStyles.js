import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        height: '50px',
        [theme.breakpoints.down('md')]: {
            height: '100%',
            marginBottom: '10px'
        },
        '& header.MuiAppBar-root': {
            background: '#fafafa',
            '& > div.MuiContainer-root': {
                padding: ({isScrollBreak}) => !isScrollBreak && 0,
                transition: 'padding .3s',
                '& > div': {
                    width: '100%',
                    margin: 0,
                    '& > div:first-child': {
                        paddingLeft: 0
                    }
                }
            },
            '& div.bottom-logo': {
                '& a': {
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center'
                }
            }
        },
        '& div.MuiFormControl-root': {
            width: '100%',
            borderRadius: '7px'
        },
        '& div.select-menu > div': {
            width: '100%',
            '& div.MuiSelect-selectMenu': {
                padding: '7px 0',
                '& > h6': {
                    textAlign: 'center',
                    paddingRight: '8px'
                }
            },
            '& svg': {
                right: 0
            }
        },
        '& button.header-button': {
            borderRadius: '10px',
            borderStyle: 'initial',
            height: '38px',
            '& > svg': {
                marginLeft: '8px',
                [theme.breakpoints.down(1200)]: {
                    display: 'none'
                }
            }
        },
        '& span.avatar': {
            cursor: 'pointer'
        },
        '& button.bottom-sign-button': {
            color: '#000',
            backgroundColor: '#F2F2F2',
            boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.15)',
            width: '100%'
        },
        '& a.create-post-link': {
            textDecoration: 'none',
            '& button': {
                width: '100%',
                '& h6.MuiTypography-subtitle2': {
                    lineHeight: '15px',
                    letterSpacing: '0.5px',
                    color: '#fff'
                }
            }
        },
        '& button.bottom-category-button': {
            width: '100%',
            '& > h6.MuiTypography-subtitle2': {
                lineHeight: '15px',
                letterSpacing: '0.5px',
                fontSize: '1.125rem',
                color: '#fff'
            }
        },
        // Adaptive
        '& div.bottom-logo > a': {
            '& img': {
                [theme.breakpoints.down('lg')]: {
                    width: '125px',
                    height: '42px'
                },
                [theme.breakpoints.up('lg')]: {
                    width: '140px',
                    height: '47px'
                }
            }
        },
        '& div.category-menu > button, & div.select-menu, & div.create-ad, button.bottom-sign-button': {
            '& h6': {
                [theme.breakpoints.down('lg')]: {
                    fontSize: '.69rem'
                },
                [theme.breakpoints.up('lg')]: {
                    fontSize: '.875rem'
                }
            }
        },

        '& div.translate-local': {
            [theme.breakpoints.down('md')]: {
                margin: '112px 0 10px'
            },
            [theme.breakpoints.down('xs')]: {
                margin: '104px 0 10px'
            },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            '& div': {
                borderRadius: '100px',
                background: '#F5F5F5',
                padding: '6px'
            }
        },
        '& div.multi-actions': {
            [theme.breakpoints.up('md')]: {
                justifyContent: 'left'
            },
            '& div.MuiGrid-item': {
                '& > a': {
                    display: 'flex',
                    textDecoration: 'none',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '6px 12px',
                    borderRadius: '100px',
                    background: '#F5F5F5',
                    [theme.breakpoints.up('md')]: {
                        padding: 0,
                        borderRadius: 0,
                        background: 'none'
                    },
                    '&.selected': {
                        '& > h6.MuiTypography-subtitle1': {
                            backgroundImage:
                                'linear-gradient(49.94deg, #675EAA 19.03%, #AD66D5 72.72%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        },
                        '& svg': {
                            marginLeft: '5px',
                            '& > defs > linearGradient > stop': {
                                '&:first-child': {
                                    stopColor: '#675EAA'
                                },
                                '&:last-child': {
                                    stopColor: '#AD66D5'
                                }
                            }
                        }
                    },
                    '& > h6.MuiTypography-subtitle1': {
                        color: 'rgba(49, 49, 49, 0.7)',
                        letterSpacing: '0.4px'
                    },
                    '& > svg': {
                        marginRight: '5px',
                        height: '20px',
                        [theme.breakpoints.down('lg')]: {
                            width: '16px'
                        },
                        [theme.breakpoints.up('lg')]: {
                            width: '16px'
                        }
                    },
                    '&:hover': {
                        '& > h6.MuiTypography-subtitle1': {
                            color: '#AD66D5'
                        },
                        '& > svg > path': {
                            fill: '#AD66D5'
                        }
                    }
                }
            },
            '& h6': {
                [theme.breakpoints.down('lg')]: {
                    fontSize: '.85rem'
                },
                [theme.breakpoints.up('lg')]: {
                    fontSize: '1rem'
                }
            }
        }
    },
    menu: {
        '& .MuiPaper-root': {
            width: '290px',
            padding: '10px',
            backgroundColor: theme.palette.primary.white
            // left: "1250px !important"
        },
        '& .menu-item': {
            padding: '5px',
            marginBottom: '0px',
            borderRadius: '0px',
            backgroundColor: '#fff',
            '& .MuiListItem-root': {
                background: '#f2f2f2'
            }
        }
    }
}));
