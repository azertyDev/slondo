import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles({
    root: {
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
    }
});
