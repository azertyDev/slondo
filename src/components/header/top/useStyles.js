import {makeStyles} from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: 12,
        '& div.social-icons > a': {
            display: 'flex',
            alignItems: 'center',
            marginRight: '12px',
            '& > img': {
                width: '35px'
            }
        },
        '& div.multiple-actions': {
            display: 'flex',
            flexFlow: 'row wrap',
            '& div.MuiGrid-item': {
                '& > a': {
                    display: 'flex',
                    textDecoration: 'none',
                    alignItems: 'center',
                    justifyContent: 'center',
                    '&.selected': {
                        '& > h6.MuiTypography-subtitle1': {
                            backgroundImage:
                                'linear-gradient(49.94deg, #675EAA 19.03%, #AD66D5 72.72%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        },
                        '& svg': {
                            marginLeft: 5,
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
                        marginLeft: '5px',
                        height: '20px',
                        [theme.breakpoints.down('lg')]: {
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
    adaptive: {
        // ------------> adaptive <--------------- //
        '& .MuiPaper-root': {
            backgroundColor: '#F8F7FA'
        },
        '& div.top-header-logo': {
            height: '30px'
        },
        '& div.burger-menu': {
            '& svg': {
                height: '100%',
                '& path': {
                    fill: '#4f4f4f'
                }
            }
        },
        '& button.btn-sign-mobile': {
            background: 'inherit',
            padding: 0,
            '& h6': {
                color: '#4E4E4E',
                fontSize: 'calc(14px + 2 * (100vw / 1280))',
                fontWeight: '400'
            }
        }
    },
    avatarBlock: {
        padding: 0,
        background: 'none',
        borderRadius: '100px',
        '& div.MuiAvatar-root': {
            height: '35px',
            width: '35px'
        },
        '& svg': {
            width: '40px',
            height: '40px',
            [theme.breakpoints.down('xs')]: {
                width: '33px',
                height: '33px'
            }
        }
    }
}));
