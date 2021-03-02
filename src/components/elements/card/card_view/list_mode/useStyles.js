import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& div.MuiGrid-container': {
            marginBottom: '20px',
        },
        '& div.left-content': {
            zIndex: 10,
            '& div.breadcrumbs': {
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: 10,
                '& > h6.MuiTypography-subtitle1': {
                    fontSize: '12px',
                    // '& > span.post': {
                    //     color: theme.palette.primary.adBgColor,
                    // },
                    // '& > span.auc': {
                    //     color: theme.palette.primary.lotBgColor,
                    // },
                    // '& > span.exauc': {
                    //     color: theme.palette.primary.lotBgColor,
                    // },
                },
            },
            '& div.MuiPaper-root': {
                border: 0,
                boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
                borderRadius: '10px 10px 0 0',
                zIndex: 20,
                '& div.card-data': {
                    display: 'flex',
                    height: 160,
                    position: 'relative',
                    '& > div.img': {
                        borderRadius: '10px 0px 0px 0px',
                        width: '28.11%',
                        height: 'auto',
                        backgroundPosition: 'center top',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        position: 'relative',
                        '& > img': {
                            borderRadius: '10px 0px 0px 0px',
                            height: '100%',
                            width: '100%',
                            objectFit: 'cover',
                        },
                        '& > span.MuiTypography-caption': {
                            position: 'absolute',
                            top: '3px',
                            left: '3px',
                            borderRadius: '5px',
                            padding: '2px 10px',
                            letterSpacing: '0.4px',
                            color: '#fff',
                            '&.post': {
                                backgroundColor: theme.palette.primary.postBgColor,
                            },
                            '&.auc': {
                                backgroundColor: theme.palette.primary.aucBgColor,
                            },
                            '&.exauc': {
                                backgroundColor: theme.palette.primary.exAucBgColor,
                            },
                        },
                        '& > span:last-child': {
                            position: 'absolute',
                            bottom: '4px',
                            left: '4px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '3px',
                            backgroundColor: 'rgba(255, 255, 255, 0.7)',
                            borderRadius: '5px',
                            '& > svg': {
                                marginRight: '8px',
                            },
                        },
                    },
                    '& > div.content': {
                        width: '100%',
                        padding: '10px 10px 10px 20px',
                        borderLeft: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        '& > div.header': {
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '100%',
                            paddingRight: '86px',
                            '& > div': {
                                display: 'flex',
                                alignItems: 'center',
                                '&.ancmnt-title': {
                                    width: '350px',
                                },
                                '& > h6.MuiTypography-subtitle1': {
                                    fontSize: '18px',
                                    borderBottom: '1px solid #4E4E4E',
                                    lineHeight: '20px',
                                },
                                '& > h6.MuiTypography-subtitle2': {
                                    borderBottom: '1px solid #838383',
                                    lineHeight: '20px',
                                    color: '#838383',
                                },
                                '&.favorite': {
                                    background: '#F5F5F5',
                                    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.15)',
                                    borderRadius: '10px 0px 10px 10px',
                                    padding: 10,
                                    '& > a': {
                                        marginLeft: '7px',
                                        '&.favorite-icon': {
                                            '& svg': {
                                                '& defs': {
                                                    '& linearGradient': {
                                                        '& > stop': {
                                                            '&:first-child': {
                                                                stopColor:
                                                                    '#675EAA !important',
                                                            },
                                                            '&:last-child': {
                                                                stopColor:
                                                                    '#AD66D5',
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                            '& > a.settings-button': {
                                background: '#BDBDBD',
                                borderRadius: '0px 0px 5px 5px',
                                padding: '11px 11px 10px',
                                position: 'absolute',
                                top: 0,
                                right: '20px',
                                '& > svg': {
                                    height: '18px',
                                    '& path': {
                                        fill: '#fff',
                                    },
                                },
                            },
                        },
                    },
                    '& > div > div.description': {
                        width: '370px',
                        display: 'flex',
                        flexFlow: 'row wrap',
                        '& > span': {
                            height: '26px',
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'row',
                            padding: '0 15px',
                            margin: '2px 10px 2px 0',
                            borderRadius: '100px',
                            boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
                            cursor: 'default',
                            userSelect: 'none',
                            '& p.MuiTypography-body1': {
                                fontSize: '12px',
                                color: '#838383',
                                lineHeight: '15px',
                            },
                            '& svg': {
                                width: '15px',
                                height: '15px',
                                marginRight: '15px',
                            },
                            '&.available': {
                                '& > svg': {
                                    '& > defs > linearGradient': {
                                        '& > stop': {
                                            '&:first-child': {
                                                stopColor: '#30AB7C !important',
                                            },
                                            '&:last-child': {
                                                stopColor: '#75BE55',
                                            },
                                        },
                                    },
                                },
                            },
                            '&.delivery': {
                                '& svg': {
                                    '& path': {
                                        fill: '#695EAE',
                                    },
                                },
                            },
                            '&.exchange': {
                                '& svg': {
                                    '& path': {
                                        fill: '#4e4e4e',
                                    },
                                },
                            },
                        },
                    },
                    '& > div > div.location': {
                        display: 'flex',
                        justifyContent: 'space-between',
                        '& > div:first-child': {
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            width: '60%',
                            '& > a': {
                                display: 'flex',
                                marginRight: '10px',
                            },
                        },
                        '& > div': {
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            width: '40%',
                        },
                    },
                },
            },
            '& div.status-buttons': {
                display: 'flex',
                '& button': {
                    padding: '10px 0',
                    borderRadius: '0px 0px 10px 10px',
                    width: '100%',
                    height: '38px',
                    border: 'none',
                    boxShadow: 'inset 0px 4px 10px -5px rgba(0, 0, 0, 0.25)',
                    '& svg': {
                        marginRight: 10,
                    },
                    '&.expecting': {
                        background: 'rgba(125, 188, 246, 0.8)',
                    },
                    '&.follow': {
                        background: 'rgba(242, 201, 76, 1)',
                        '& > svg > path': {
                            fill: '#fff',
                        },
                    },
                    '&.accepted': {
                        background: 'rgba(144, 190, 39, 0.8)',
                    },
                    '&.accept': {
                        background: '#675EAA',
                    },
                    '&.denied': {
                        background: '#F08F8F',
                    },
                    '&.complete': {
                        width: '46%',
                        marginLeft: '20px',
                        background: '#BDBDBD',
                    },
                    '& h6.MuiTypography-subtitle1': {
                        color: '#fff',
                    },
                },
            },
        },
        '& div.right-content': {
            '& div.card-buttons': {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                marginTop: '25px',
                height: '160px',
                '& > button': {
                    padding: 10,
                    height: '38px',
                    width: '160px',
                    border: 'none',
                    transition: '.1s ease-in-out',
                    boxShadow: '2px 0px 4px rgba(0, 0, 0, 0.15)',
                    borderRadius: '0px 5px 5px 0px',
                    transform: 'perspective(1px) translateZ(0)',
                    position: 'relative',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                    left: '-120px',
                    '& > span > svg': {
                        marginLeft: '10px',
                        width: '16px',
                        height: '16px',
                    },
                    '&:disabled': {
                        backgroundColor: '#ccc !important',
                    },
                    '&:hover': {
                        transform: 'translateX(120px)',
                    },
                    '& h6.MuiTypography-subtitle1': {
                        color: '#fff',
                    },
                    '& > span.MuiButton-label': {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    },
                    '&.promoteButton': {
                        backgroundColor: '#77B1FF',
                    },
                    '&.raiseTopButton': {
                        backgroundColor: '#57BD82',
                    },
                    '&.doubleUpButton': {
                        backgroundColor: '#F6AC6A',
                    },
                },
            },
            '& div.profile-form': {
                marginLeft: 20,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                '& > div.extreme-rate': {
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '5px',
                    padding: '0 10px',
                    '& > h6.MuiTypography-subtitle1': {
                        fontSize: '0.75rem',
                    },
                    '& > button': {
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        background:
                            'linear-gradient(49.94deg, rgb(103, 94, 170) 19.03%, rgb(173, 102, 213) 72.72%)',
                        fontSize: '0.75rem',
                        color: '#fff',
                        padding: '0',
                        '& > h6.MuiTypography-subtitle1': {
                            fontSize: '0.875rem',
                        },
                    },
                },
                '& > div.profile-data': {
                    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.15)',
                    background: '#F2F2F2',
                    padding: '15px 10px',
                    borderRadius: '10px 10px 0 0',
                    height: '160px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    '& > h6.MuiTypography-subtitle1': {
                        fontSize: '1.125rem',
                        textAlign: 'center',
                    },
                    '& span > div.MuiAvatar-root': {
                        width: 40,
                        height: 40,
                    },
                    '& > button.show-phone-btn': {
                        height: '33px',
                        background: '#FFFFFF',
                        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.15)',
                        borderRadius: '5px',
                        border: 0,
                    },
                },
                '& button': {
                    backgroundColor: '#675EAA',
                    borderRadius: 5,
                    border: 'none',
                    height: '38px',
                    width: '100%',
                    '& > h6.MuiTypography-subtitle1': {
                        color: '#fff',
                    },
                    '& > svg': {
                        marginRight: 10,
                        '& > path': {
                            fill: '#fff',
                        },
                    },
                },
                '& div:last-child': {
                    '& > h6.MuiTypography-subtitle2': {
                        fontSize: '0.75rem',
                        padding: '5px 10px',
                        '& span': {
                            color: theme.palette.primary.error,
                        },
                    },
                },
            },
        },
    },
}));
