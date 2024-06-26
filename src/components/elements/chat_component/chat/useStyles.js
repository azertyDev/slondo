import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        padding: '20px',
        borderRadius: '0px 10px 10px 0px',
        boxShadow: ({hideContacts}) => hideContacts ? 'none' : '0px 0px 8px rgba(132, 92, 171, 0.15)',
        [theme.breakpoints.down('xs')]: {
            padding: 0
        },
        '& div': {
            '&.chat-header': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 20px 20px 20px',
                [theme.breakpoints.down('xs')]: {
                    padding: 10
                },
                '& .MuiTypography-subtitle1': {
                    flex: 1,
                    fontWeight: 600,
                    textAlign: 'center'
                },
                '& button': {
                    background: 'none',
                    position: 'absolute',
                    '&.back-btn': {
                        left: '15px'
                    },
                    '&.close-btn': {
                        right: '15px',
                        [theme.breakpoints.down('xs')]: {
                            right: '10px'
                        }
                    }
                }
            },
            '&.message-list': {
                height: 470,
                display: 'flex',
                padding: '25px 0',
                overflowX: 'hidden',
                overflowY: 'scroll',
                backgroundColor: '#fff',
                flexDirection: 'column-reverse',
                borderTop: '1px solid #D5D5D5',
                borderBottom: '1px solid #D5D5D5',
                '& div.message-item': {
                    '&.left-side div.message > h6:before, &.right-side div.message > h6:after': {
                        content: '""',
                        top: 'calc(40% - 5px)',
                        width: '0px',
                        height: '0px',
                        position: 'absolute',
                        borderTop: '5px solid transparent',
                        borderBottom: '5px solid transparent'
                    },
                    '&.left-side > div.message:last-child': {
                        marginLeft: '10px',
                        '& > h6:before': {
                            left: '-24px',
                            borderLeft: '10px solid transparent',
                            borderRight: '10px solid #f1f1f1'
                        }
                    },
                    '&.right-side > div.message:last-child': {
                        marginLeft: 'auto',
                        marginRight: '10px',
                        backgroundColor: '#E6F3FF',
                        '& > h6:after': {
                            right: '-24px',
                            borderLeft: '10px solid #E6F3FF',
                            borderRight: '10px solid transparent'
                        }
                    },
                    '& div.message:last-child': {
                        '& > h6:after': {
                            right: '-24px',
                            borderLeft: '10px solid #E6F3FF',
                            borderRight: '10px solid transparent'
                        }
                    },
                    '& div.message': {
                        width: 'fit-content',
                        maxWidth: '80%',
                        padding: '5px',
                        backgroundColor: '#f1f1f1',
                        borderRadius: '5px',
                        marginBottom: '10px',
                        '& h6.text': {
                            position: 'relative',
                            '& > pre': {
                                margin: '0 0 5px',
                                fontFamily: 'Calibri, Roboto, Helvetica, Arial, sans-serif',
                                wordBreak: 'break-word',
                                whiteSpace: 'pre-wrap'
                            }
                        },
                        '& img': {
                            width: '100%',
                            marginBottom: '10px',
                            borderRadius: '5px'
                        },
                        '& p.time': {
                            display: 'block',
                            fontSize: '.55rem',
                            textAlign: 'end'
                        }
                        // '&.left-side > h6:before, &.right-side > h6:after': {
                        //     content: '""',
                        //     top: 'calc(40% - 5px)',
                        //     width: '0px',
                        //     height: '0px',
                        //     position: 'absolute',
                        //     borderTop: '5px solid transparent',
                        //     borderBottom: '5px solid transparent'
                        // }
                        // '&.left-side': {
                        //     marginLeft: '10px',
                        //     '& > h6:before': {
                        //         left: '-24px',
                        //         borderLeft: '10px solid transparent',
                        //         borderRight: '10px solid #f1f1f1'
                        //     }
                        // },
                        // '&.right-side': {
                        //     marginLeft: 'auto',
                        //     marginRight: '10px',
                        //     backgroundColor: '#E6F3FF',
                        //     '& > h6:after': {
                        //         right: '-24px',
                        //         borderLeft: '10px solid #E6F3FF',
                        //         borderRight: '10px solid transparent'
                        //     }
                        // }
                    }
                }
            },
            '&.compose': {
                paddingTop: 20,
                [theme.breakpoints.down('xs')]: {
                    padding: '10px 0'
                },
                '& div.messaging-input': {
                    position: 'relative',
                    '& div.MuiTextField-root': {
                        '& .MuiOutlinedInput-root': {
                            fontSize: 16,
                            borderRadius: 100,
                            backgroundColor: theme.palette.common.white,
                            padding: '10px 20px 10px',
                            [theme.breakpoints.down('xs')]: {
                                background: 'none',
                                padding: '10px 50px 10px 10px'
                            },
                            '& fieldset': {
                                [theme.breakpoints.down('xs')]: {
                                    border: 0
                                }
                            }
                        }
                    },
                    '& button': {
                        '&.send-btn': {
                            top: '50%',
                            right: '-15px',
                            padding: '8px',
                            position: 'absolute',
                            transform: 'translate(-50%, -50%)',
                            '& svg path': {
                                fill: theme.palette.primary.adBgColor
                            }
                        },
                        '&.Mui-disabled': {
                            '& svg path': {
                                fill: '#838383!important',
                                opacity: .5
                            }
                        }
                    }
                },
                '& label.img-wrapper': {
                    '& > svg': {
                        fontSize: '2.8rem',
                        cursor: 'pointer'
                    }
                },
                '& input#message': {
                    display: 'none'
                },
                '& .sendFileBtn': {
                    '& svg': {
                        transform: 'rotate(50deg)'
                    }
                }
            }
        }
    },

}));
