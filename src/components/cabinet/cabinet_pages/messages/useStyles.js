import {makeStyles, fade} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    messengerWrapper: {
        boxShadow: '0px 0px 8px rgba(132, 92, 171, 0.15)',
        borderRadius: '0px 10px 10px 0px'
    },
    sidebar: {
        overflowY: 'overlay',
        height: '760px',
        '& div.conversation-list': {
            display: 'flex',
            flexDirection: 'column',
            '& div.conversation-item': {
                display: 'flex',
                alignItems: 'center',
                padding: '13px 10px',
                background: '#F8F8F8',
                boxShadow: '0px 0px 8px rgba(132, 92, 171, 0.15)',
                borderRadius: '5px 0px 0px 0px',
                '&:hover': {
                    cursor: 'pointer',
                    backgroundColor: '#eeeef1'
                },
                '& > div.avatar': {
                    marginRight: 25,
                    '& .MuiAvatar-root': {
                        width: 50,
                        height: 50
                    }
                },
                '& div.user-info': {
                    width: '100%',
                    '& div.user-name': {
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: 20,
                        '& .MuiTypography-subtitle1': {
                            fontWeight: 600
                        },
                        '& .MuiTypography-subtitle2': {
                            color: '#838383'
                        }
                    },
                    '& .message-fragment': {
                        maxWidth: '211px'
                    }
                }
            }
        }
    },
    chatBlock: {
        padding: 20,
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
                padding: '25px 0',
                borderTop: '1px solid #D5D5D5',
                borderBottom: '1px solid #D5D5D5'
            },
            '&.compose': {
                display: 'flex',
                justifyContent: 'space-between',
                paddingTop: 20,
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
                                boxShadow: `${fade(theme.palette.secondary.main, 0.25)} 0 0 0 0.2rem`,
                                borderColor: theme.palette.secondary.main
                            }
                        }
                    },
                    '& .send-btn': {
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        padding: 8
                    }
                }
            }
        }
    }
}))
