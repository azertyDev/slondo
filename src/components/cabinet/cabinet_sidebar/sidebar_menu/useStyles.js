import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& .menu-item': {
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#F2F2F2',
            padding: 15,
            borderRadius: 10,
            marginBottom: 10,
            '&:last-child': {
                marginBottom: 0
            },
            '& .MuiBadge-root': {
                width: '100%'
            },
            '& .MuiListItem-root': {
                borderRadius: 5,
                background: '#fff',
                justifyContent: 'center',
                boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
                '& .MuiTypography-body1': {
                    fontSize: '1rem',
                    [theme.breakpoints.down('md')]: {
                        fontSize: 'calc(14px + (100vw - 992px) / 1280)'
                    },
                    [theme.breakpoints.down('sm')]: {
                        fontSize: 'calc(12px + (100vw - 576px) / 1280)'
                    }
                },
                '& .MuiListItemText-root': {
                    flex: 'none'
                },
                '& svg': {
                    marginRight: 10,
                    [theme.breakpoints.between('sm','md')]: {
                        display: 'none'
                    }
                }
            }
        },
    },
    selected: {
        border: '1px solid #AD66D5',
        '& .MuiTypography-body1': {
            color: 'red',
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
