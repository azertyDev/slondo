import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& div.conversation-list': {
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'scroll',
            height: 604,
            '&::-webkit-scrollbar': {
                display: 'none'
            },
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
                '& div.contact-info': {
                    '& > div': {
                        display: 'flex',
                        flexDirection: 'column',
                        '& > h6:first-child': {
                            marginBottom: '5px'
                        }
                    },
                    '& div.user-name': {
                        '& .MuiTypography-subtitle1': {
                            fontWeight: 600
                        },
                        '& .MuiTypography-subtitle2': {
                            color: '#838383'
                        }
                    },
                    '& div.time-counter': {
                        alignItems: 'center',
                        '& h6.msg-counter': {
                            padding: '2px',
                            borderRadius: '45%',
                            color: '#fff',
                            backgroundColor: theme.palette.primary.adBgColor
                        }
                    }
                }
            }
        }
    }
}));
