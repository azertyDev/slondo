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
                    maxWidth: '80%'
                },
                '& pre': {
                    padding: '15px',
                    borderRadius: '5px',
                    backgroundColor: '#f1f1f1',
                    wordBreak: 'break-word',
                    whiteSpace: 'pre-wrap'
                },
                '& div.left-side:before, & div.right-side:after': {
                    content: '""',
                    top: 'calc(40% - 10px)',
                    width: '0px',
                    height: '0px',
                    position: 'absolute',
                    borderTop: '5px solid transparent',
                    borderBottom: '5px solid transparent'
                },
                '& div.left-side': {
                    position: 'relative',
                    marginLeft: '10px',
                    '&:before': {
                        left: '-19px',
                        borderLeft: '10px solid transparent',
                        borderRight: '10px solid #f1f1f1'
                    }
                },
                '& div.right-side': {
                    position: 'relative',
                    marginLeft: 'auto',
                    marginRight: '10px',
                    '& pre': {
                        marginLeft: 'auto',
                        backgroundColor: '#E6F3FF'
                    },
                    '&:after': {
                        right: '-19px',
                        borderLeft: '10px solid #E6F3FF',
                        borderRight: '10px solid transparent'
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
