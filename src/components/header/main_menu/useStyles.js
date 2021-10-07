import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& .menu-nav': {
            backgroundColor: '#F2F2F2',
            padding: '15px',
            borderRadius: '10px',
            '& .MuiBadge-root': {
                width: '100%'
            },
            '& div.MuiListItem-root': {
                borderRadius: 5,
                background: '#fff',
                justifyContent: 'center',
                boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
                '& .MuiTypography-body1': {
                    fontSize: '1rem'
                },
                '& .MuiListItemText-root': {
                    flex: 'none'
                }
            }
        },
        '& .menu-item': {
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#F2F2F2',
            borderRadius: '10px',
            margin: '8px 0',
            marginBottom: 0,
            '& div.ban-color > span > div': {
                background: 'rgba(242, 153, 74, 0.15)'
            },
            '&:last-child': {
                marginBottom: 0
            },
            '& .MuiBadge-root': {
                width: '100%'
            },
            '& div.MuiListItem-root': {
                borderRadius: 5,
                padding: '10px 15px',
                '& .MuiTypography-body1': {
                    fontSize: '1rem'
                },
                '& .MuiListItemText-root': {
                    flex: 'none'
                },
                '& svg': {
                    marginRight: 25
                }
            }
        }
    },
    selected: {
        border: '1px solid #AD66D5',
        // backgroundColor: '#F3F3F3 !important',
        '& .MuiTypography-body1': {
            backgroundImage:
                'linear-gradient(49.94deg, #675EAA 19.03%, #AD66D5 72.72%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
        },
        '& svg': {
            '& stop': {
                '&:first-child': {
                    stopColor: '#675EAA'
                },
                '&:last-child': {
                    stopColor: '#AD66D5'
                }
            }
        }
    }
}));
