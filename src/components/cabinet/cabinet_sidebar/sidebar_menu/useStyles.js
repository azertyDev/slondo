import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& > div.layout-container': {
            padding: 0
        },
        '& .menu-item': {
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#F2F2F2',
            padding: '15px',
            borderRadius: '10px',
            marginBottom: '10px',
            [theme.breakpoints.down('xs')]: {
                padding: 0,
                paddingLeft: '14px',
                borderRadius: 0,
                marginBottom: 0,
                margin: '8px 0'
            },
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
                [theme.breakpoints.down('xs')]: {
                    background: '#F2F2F2',
                    boxShadow: 'none',
                    borderRadius: 0,
                    justifyContent: 'flex-start'
                },
                '& .MuiTypography-body1': {
                    fontSize: '1rem',
                    [theme.breakpoints.down('md')]: {
                        fontSize: 'calc(14px + (100vw - 992px) / 1280)'
                    },
                    [theme.breakpoints.down('sm')]: {
                        fontSize: 'calc(12px + (100vw - 576px) / 1280)'
                    },
                    [theme.breakpoints.down('xs')]: {
                        fontSize: '1rem'
                    }
                },
                '& .MuiListItemText-root': {
                    flex: 'none'
                },
                '& svg': {
                    marginRight: '10px',
                    [theme.breakpoints.down('xs')]: {
                        marginRight: '27px',
                        '& path': {
                            fill: '#838383'
                        }
                    },
                    [theme.breakpoints.between('sm', 'md')]: {
                        display: 'none'
                    }
                }
            }
        }
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
