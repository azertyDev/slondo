const { makeStyles } = require('@material-ui/core')

export const useStyles = makeStyles((theme) => ({
    root: {color: '#4E4E4E'},
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    body: { backgroundColor: 'white', width: '725px' },
    modalBodyInfo: {
        paddingTop: '20px',
        paddingBottom: '110px',
        backgroundImage:
            'linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url("./img/modal-image.jpg")',
        backgroundSize: 'cover',
        '& h6.MuiTypography-root': {
            fontWeight: '500',
            fontSize: '12px',
            lineHeight: '14px',
            color: '#fff'
        },
    },
    infoBlock: {
        marginBottom: '50px',
        '&:last-child': {
            margin: '0'
        },
        '& h6.MuiTypography-subtitle2': { 
            lineHeight: '16px',
        },
    },
    welcome: {
        margin: '10px 0 0 0',
        '& h6.MuiTypography-subtitle1': {
            fontSize: '1.2rem',
        }
    },
    tabsContainer: {
        marginTop: '45px'
    },
    tabs: {
        width: '100%',
        '& button.MuiButtonBase-root': {
            width:'50%',
        }
    },
    signPanel: {
        '& h6.MuiTypography-subtitle2': {
            fontSize: '1rem',
            margin: '10px 0'
        },
        '& a': {
            textDecoration:'none'
        },
        '& p.MuiTypography-body2': {
            margin: '10px 0',
            color: theme.palette.primary.main,
        }
    },
    modalSignButton: {
        '& button.MuiButtonBase-root':{
            color: '#fff',
            background: "linear-gradient(49.94deg, #675EAA 19.03%, #AD66D5 72.72%)",
            borderRadius: '3px',
            padding: '15px 0',
            width: '50%',
        }
    },
    expression: {
        textAlign: 'center',
        fontSize: '12px',
        color: '#000 !important',
        letterSpacing: '0.4px',
    },
    coloredText: {
        color: '#675EAA'
    }

}))
