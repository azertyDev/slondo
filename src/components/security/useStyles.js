import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: '22px',
        '& div.MuiGrid-grid-xs-9': {
            paddingTop: 60,
            paddingBottom: 60
        },
        '& h5': {
            fontSize: '1.75rem'
        },
        '& h6': {
            color: 'rgba(49, 49, 49, 0.6)',
            fontSize: '1.125rem',
            lineHeight: '22px'
        }
    },
    description: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 50,
        [theme.breakpoints.down('xs')]: {
            marginBottom: '36px'
        }
    },
    hero: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        maxWidth: 645,
        [theme.breakpoints.down('md')]: {
            alignItems: 'center',
            '& img': {
                width: '180px',
                margin: '36px 0'
            }
        },
        '& h5': {
            [theme.breakpoints.down('md')]: {
                marginTop: '44px'
            },
            [theme.breakpoints.down('xs')]: {
                fontSize: '1rem',
                fontWeight: '500'
            }
        },
        '& h6': {
            [theme.breakpoints.down('xs')]: {
                fontSize: '12px',
                lineHeight: '14px'
            }
        }
    },
    warning: {
        background: 'linear-gradient(49.94deg, #675EAA 19.03%, #AD66D5 72.72%)',
        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
        borderRadius: '10px',
        padding: '18px 10px',
        marginBottom: 60,
        [theme.breakpoints.down('xs')]: {
            padding: '7px 30px',
            marginBottom: '36px'
        },
        '& > h6': {
            color: theme.palette.primary.contrastText,
            textAlign: 'center',
            [theme.breakpoints.down('xs')]: {
                lineHeight: '14px',
                fontSize: '12px'
            }
        }
    },
    paper: {
        display: 'flex',
        padding: '25px 20px',
        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
        borderRadius: '20px',
        [theme.breakpoints.down('md')]: {
            alignItems: 'center'
        },
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            padding: '16px 12px'
        },
        '& span > svg': {
            [theme.breakpoints.down('md')]: {
                width: '55px',
                height: '55px'
            },
            [theme.breakpoints.down('xs')]: {
                width: '20px',
                height: '20px',
                marginBottom: '-3px'
            }
        },
        '&:not(:last-child)': {
            marginBottom: 20
        },
        '& div.card-header': {
            display: 'flex',
            alignItems: 'center',
            [theme.breakpoints.down('xs')]: {
                marginBottom: '10px',
                width: '100%',
                '& h5': {
                    fontSize: '14px',
                    fontWeight: '500'
                }
            }
        }
    },
    icon: {
        padding: '53px',
        transform: 'translate(-40px)',
        background: 'linear-gradient(138.63deg, rgba(235, 235, 235, 0.9) 14.21%, rgba(231, 231, 231, 0.15) 84.84%)',
        backdropFilter: 'blur(2px)',
        borderRadius: '100px',
        [theme.breakpoints.down('md')]: {
            transform: 'translate(0)',
            padding: '20px',
            marginRight: '20px'
        },
        [theme.breakpoints.down('xs')]: {
            marginRight: '10px',
            padding: '8px'
        }
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        '& h6': {
            [theme.breakpoints.down('xs')]: {
                fontSize: '12px',
                lineHeight: '14px'
            }
        }
    }
}));
