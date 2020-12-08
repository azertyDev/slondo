import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& div.ad-block': {
            marginTop: '20px',
            '& > div:first-child': {
                maxWidth: '80%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '10px',
                '& > h6.MuiTypography-subtitle1': {
                    fontSize: '12px',
                    '& > span': {
                        color: '#7DBCF6',
                    },
                },
            },
            '& > div': {
                '& > div:first-child': {
                    display: 'flex',
                    flexDirection: 'row',
                    '& > div:first-child': {
                        zIndex: 1,
                        width: '80%',
                        maxWidth: '80%',
                        '& > div.MuiPaper-root': {
                            display: 'flex',
                            flexDirection: 'column',
                            border: 0,
                            boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
                            borderRadius: '0 10px 0 0',
                            '& > div': {
                                display: 'flex',
                                height: 160,
                                '& > div.img': {
                                    borderRadius: '10px 0px 0px 0px',
                                    width: '28.11%',
                                    height: 'auto',
                                    backgroundImage:
                                        'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgtRf_ypExsaR6LsfyIdgSA-VW_MTKz8zo-g&usqp=CAU)',
                                    backgroundPosition: 'center top',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    position: 'relative',
                                    '& > span.MuiTypography-caption': {
                                        position: 'absolute',
                                        top: '3px',
                                        left: '3px',
                                        backgroundColor:
                                            'rgba(136, 202, 236, 0.65)',
                                        borderRadius: '5px',
                                        padding: '2px 10px',
                                        letterSpacing: '0.4px',
                                        color: '#fff',
                                    },
                                    '& > span:last-child': {
                                        position: 'absolute',
                                        bottom: '4px',
                                        left: '4px',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        padding: '3px',
                                        backgroundColor:
                                            'rgba(255, 255, 255, 0.7)',
                                        borderRadius: '5px',
                                        '& > svg': {
                                            marginRight: '8px',
                                        },
                                    },
                                },
                                '& > div:last-child': {
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
                                        '& > div': {
                                            display: 'flex',
                                            alignItems: 'center',
                                            '& > h6.MuiTypography-subtitle1': {
                                                fontSize: '18px',
                                                borderBottom:
                                                    '1px solid #4E4E4E',
                                                lineHeight: '20px',
                                            },
                                            '& > h6.MuiTypography-subtitle2': {
                                                borderBottom:
                                                    '1px solid #838383',
                                                lineHeight: '20px',
                                                color: '#838383',
                                            },
                                            '& > a': {
                                                marginLeft: '5px',
                                                '& > svg': {
                                                    '& path': {
                                                        fill: '#838383',
                                                    },
                                                },
                                                '&:last-child': {
                                                    marginLeft: '15px',
                                                },
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
                                },
                                '& > div > div.description': {
                                    width: '370px',
                                    height: '70px',
                                    display: 'flex',
                                    flexFlow: 'row wrap',
                                    '& > span': {
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexDirection: 'row',
                                        padding: '0 15px',
                                        margin: '2px',
                                        borderRadius: '100px',
                                        boxShadow:
                                            '0px 0px 15px rgba(0, 0, 0, 0.1)',
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
                                        '&.delivery': {
                                            '& svg': {
                                                '& path': {
                                                    fill: '#695EAE',
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
                        '& > div.status-buttons': {
                            display: 'flex',
                            '& button': {
                                padding: '10px 0',
                                borderRadius: '0px 0px 10px 10px',
                                width: '100%',
                                // zIndex: -1,
                                // transition: '.1s ease-in-out',
                                // transform: 'perspective(1px) translateZ(0)',
                                // transitionProperty: 'transform',
                                // top: '-10px',
                                '&:hover': {
                                    // transform: 'translateY(10px)',
                                },
                                '& svg': {
                                    marginRight: 10,
                                },
                                '&.expecting': {
                                    background: 'rgba(125, 188, 246, 0.8)',
                                },
                                '&.accepted': {
                                    background: 'rgba(144, 190, 39, 0.8)',
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
                },
                '& > div > div.card-buttons': {
                    display: 'flex',
                    flexDirection: 'column',
                    zIndex: 0,
                    '& > button': {
                        marginTop: 10,
                        padding: 10,
                        transition: '.1s ease-in-out',
                        boxShadow: '2px 0px 4px rgba(0, 0, 0, 0.15)',
                        borderRadius: '0px 5px 5px 0px',
                        // display: 'flex',
                        transform: 'perspective(1px) translateZ(0)',
                        position: 'relative',
                        transitionDuration: '0.3s',
                        transitionProperty: 'transform',
                        left: '-120px',
                        '& > span > svg': {
                            marginLeft: '10px',
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
            },
        },
    },
}));
