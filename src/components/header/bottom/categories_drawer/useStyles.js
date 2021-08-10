import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    drawerPaper: {
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        },
        '& .bottom-line': {
            [theme.breakpoints.down('xs')]: {
                '&:after': {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    content: '""',
                    width: '100%',
                    height: '0.8px',
                    background: 'linear-gradient(90deg, rgba(243, 243, 243, 0) -4.72%, rgba(204, 204, 204, 0.35) 47.81%, rgba(248, 248, 248, 0) 104.92%)'
                }
            }
        }
    },
    topBtns: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    drawerList: {
        padding: '20px 10px',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            padding: 0
        },
        '& > div.MuiListItem-button': {
            height: 38,
            cursor: 'pointer',
            marginBottom: 5,
            padding: '0 25px',
            [theme.breakpoints.down('xs')]: {
                height: 'auto',
                padding: '13px 22px 13px 14px',
                marginBottom: 0
            },
            '& > h6.MuiTypography-subtitle1': {
                fontSize: '1.125rem'
            },
            '& div.list-content': {
                display: 'flex',
                width: '100%',
                alignItems: 'center'
            },
            '& div.list-content > div.icon': {
                width: '15%',
                [theme.breakpoints.down('xs')]: {
                    display: 'flex',
                    width: 'auto',
                    marginRight: '12px',
                    padding: '8px',
                    background: 'rgba(242, 242, 242, 0.8)',
                    borderRadius: '50%'
                },
                '& > svg': {
                    width: '24px',
                    height: '24px',
                    [theme.breakpoints.down('xs')]: {
                        width: '20px',
                        height: '20px'
                    }
                }
            },
            '&.hovered': {
                background: 'linear-gradient(49.94deg, #675EAA 19.03%, #AD66D5 72.72%)',
                borderRadius: 100,
                '& > h6.MuiTypography-subtitle1': {
                    color: '#fff'
                },
                '& svg': {
                    '& > path': {
                        fill: '#fff'
                    }
                }
            },
            '&.all-ctgrs': {
                '& > h6.MuiTypography-subtitle1': {
                    fontWeight: 600
                }
            },
            '& svg > path': {
                [theme.breakpoints.down('xs')]: {
                    fill: '#838383'
                }
            }
        }
    },
    drawerContent: {
        padding: '10px',
        overflow: 'scroll',
        scrollbarWidth: 'thin',
        borderLeft: '.5px solid',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            borderLeft: 0,
            overflow: 'auto',
            padding: 0
        },
        '& div.main-box-wrapper': {
            display: 'flex',
            [theme.breakpoints.down('xs')]: {
                display: 'block'
            },
            '& div.box-wrapper': {
                display: 'flex',
                flexDirection: 'column',
                width: '50%',
                paddingLeft: '10px',
                [theme.breakpoints.down('xs')]: {
                    width: '100%',
                    paddingLeft: 0
                }
            },
            '& ul': {
                [theme.breakpoints.down('xs')]: {
                    paddingTop: 0,
                    paddingBottom: 0
                }
            }
        },
        '& a': {
            textDecoration: 'none',
            '&:hover': {
                textDecoration: 'underline',
                color: '#AD66D5'
            }
        },
        '& .MuiTypography-h6': {
            color: 'rgb(51, 51, 51)',
            '&:hover': {
                color: '#AD66D5'
            }
        },
        '& .MuiTypography-subtitle1': {
            color: 'rgba(49, 49, 49, 0,6)',
            '&:hover': {
                color: '#AD66D5',
                opacity: '72.72%'
            }
        },
        '& ul.list-wrapper': {
            '& h6.list-title, li.list-items-wrapper': {
                [theme.breakpoints.down('xs')]: {
                    padding: '22px'
                }
            },
            '& h6.list-title': {
                fontWeight: '600',
                [theme.breakpoints.down('xs')]: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 0,
                    fontSize: '1rem',
                    '& svg > path': {
                        fill: '#838383'
                    }
                }
            },
            '& li.list-items-wrapper': {
                padding: '10px 0',
                '& a.list-item': {
                    [theme.breakpoints.down('xs')]: {
                        display: 'flex',
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        '& svg > path': {
                            fill: '#838383'
                        }
                    }
                }
            }
        }
    }
}));
