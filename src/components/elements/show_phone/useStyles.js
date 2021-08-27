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
        background: '#f0f0f0',
        borderRadius: 5,
        marginTop: 10,
        width: '100%',
        '& h6.MuiTypography-subtitle1': {
            flex: 1,
            textAlign: 'center'
        },
        '& a': {
            textDecoration: 'none',
            color: '#4e4e4e',
            '&.MuiButtonBase-root': {
                padding: '10px 25px',
                borderRadius: '0px 5px 5px 0px',
                background: '#43B51F',
                '& svg path': {
                    fill: '#fff'
                }
            }
        }
    }
}));