import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        padding: 25,
        borderRadius: 10,
        [theme.breakpoints.down('xs')]: {
            width: '90%'
        },
        '& .MuiCheckbox-root': {
            padding: 0
        },
        '& .prev-btn': {
            position: 'absolute',
            top: 20,
            left: 20,
            padding: 0
        },
        '& .title': {
            fontWeight: 600,
            textAlign: 'center'
        },
        '& .subtitle': {
            marginBottom: 30,
            textAlign: 'center',
            color: 'rgba(49, 49, 49, 0.7)',
            lineHeight: '22px',
            '& .buy-now-price': {
                color: theme.palette.common.activeTab
            }
        },
        '& .confirm': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            '& button': {
                width: '50%',
                background: theme.palette.primary.red,

                '& .MuiTypography-subtitle1': {
                    color: '#fff'
                },
                '&.submit': {
                    background: theme.palette.primary.createAdBtnColor,
                    marginBottom: 10
                }
            }
        }
    },
    button: {
        position: 'absolute',
        right: 0,
        top: 0,
        padding: 8,
        '& svg': {
            [theme.breakpoints.down('xs')]: {
                width: '20px',
                height: '20px'
            },
            '& path': {
                fill: '#28293D'
            }
        }
    }
}))
