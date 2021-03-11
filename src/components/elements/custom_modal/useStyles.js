import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    paper: {
        width: 430,
        // height: 300,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        padding: 25,
        borderRadius: 10,
        '& h6.title': {
            fontWeight: 600,
            marginBottom: 10,
            textAlign: 'center'
        },
        '& .confirm': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            '& button': {
                width: '50%',
                '& .MuiTypography-subtitle1': {
                    color: '#fff'
                },
                '&:first-child': {
                    background: theme.palette.primary.createAdBtnColor,
                    marginBottom: 10
                },
                '&:last-child': {
                    background: theme.palette.primary.red
                }
            }
        }
    },
    closeBtn: {
        width: 24,
        height: 24,
        padding: 7,
        backgroundColor: '#EBEBF0',
        position: 'absolute',
        top: '-5px',
        right: '-5px',
        '& path': {
            fill: '#28293D'
        },
        '&:hover': {
            backgroundColor: '#EB5757',
            '& path': {
                fill: '#fff'
            }
        }
    },
    settingsList: {
        marginTop: 50,
        width: '100%',
        '& .MuiListItem-button': {
            height: 48,
            background: '#F2F2F2',
            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.15)',
            marginBottom: 5,
            borderRadius: '3px',
            textAlign: 'center'
        }
    }
}))
