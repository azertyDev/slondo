import {alpha, makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        padding: '20px',
        paddingLeft: 0,
        '& div': {
            '&.chat-header': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 20px 20px 20px',
                '& .MuiTypography-subtitle1': {
                    fontWeight: 600
                },
                '& .MuiButtonBase-root': {
                    padding: 0
                }
            },
            '&.message-list': {
                height: '300px',
                overflowY: 'scroll',
                overflowX: 'hidden',
                padding: '25px 0',
                borderTop: '1px solid #D5D5D5',
                borderBottom: '1px solid #D5D5D5',
                backgroundColor: '#fff',
                '& div.message': {
                    width: 'fit-content',
                    maxWidth: '80%',
                    padding: '5px',
                    backgroundColor: '#f1f1f1',
                    borderRadius: '5px',
                    marginBottom: '10px',
                    '& h6': {
                        position: 'relative',
                        '& > pre': {
                            margin: '0 0 5px',
                            wordBreak: 'break-word',
                            whiteSpace: 'pre-wrap'
                        }
                    },
                    '& img': {
                        width: '100%',
                        marginBottom: '5px',
                        borderRadius: '5px'
                    },
                    '& p.time': {
                        display: 'block',
                        fontSize: '.55rem',
                        textAlign: 'end'
                    },
                    '&.left-side > h6:before, &.right-side > h6:after': {
                        content: '""',
                        top: 'calc(40% - 5px)',
                        width: '0px',
                        height: '0px',
                        position: 'absolute',
                        borderTop: '5px solid transparent',
                        borderBottom: '5px solid transparent'
                    },
                    '&.left-side': {
                        marginLeft: '10px',
                        '& > h6:before': {
                            left: '-24px',
                            borderLeft: '10px solid transparent',
                            borderRight: '10px solid #f1f1f1'
                        }
                    },
                    '&.right-side': {
                        marginLeft: 'auto',
                        marginRight: '10px',
                        backgroundColor: '#E6F3FF',
                        '& > h6:after': {
                            right: '-24px',
                            borderLeft: '10px solid #E6F3FF',
                            borderRight: '10px solid transparent'
                        }
                    }
                }
            },
            '&.compose': {
                display: 'flex',
                justifyContent: 'space-between',
                paddingTop: 20,
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
                },
                '& div.textField': {
                    position: 'relative',
                    width: '90%',
                    '& div.MuiInputBase-root': {
                        '& input': {
                            borderRadius: 100,
                            position: 'relative',
                            backgroundColor: theme.palette.common.white,
                            border: '1px solid #E0E0E0',
                            fontSize: 16,
                            padding: '10px 12px',
                            transition: theme.transitions.create(['border-color', 'box-shadow']),
                            '&:focus': {
                                boxShadow: `${alpha(theme.palette.secondary.main, 0.25)} 0 0 0 0.2rem`,
                                borderColor: theme.palette.secondary.main
                            }
                        }
                    },
                    '& .send-btn': {
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        padding: '8px'
                    }
                }
            }
        }
    }
}));
