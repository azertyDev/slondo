import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        border: 'none',
        height: 44,
        boxShadow: ' 0px 1px 2px rgb(0 0 0 / 25%)'
    },
    phoneWrapper: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        marginTop: '10px',
        textDecoration: 'none',
        background: '#f0f0f0',
        borderRadius: 5,
        cursor: 'pointer',
        '& h6.MuiTypography-subtitle1': {
            flex: 1,
            textAlign: 'center'
        },
        '& button.MuiButtonBase-root': {
            padding: '10px 25px',
            borderRadius: '0px 5px 5px 0px',
            background: '#43B51F',
            '& svg path': {
                fill: '#fff'
            }
        }
    }
}));