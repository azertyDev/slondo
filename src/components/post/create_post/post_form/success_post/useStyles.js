import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    root: {
        '& a': {
            textDecoration: 'none',
        },
    },
    title: {margin: '45px 0'},
    paper: {
        display: 'flex',
        alignItems: 'center',
        minHeight: '200px',
        marginBottom: '30px',
        '& h6.MuiTypography-subtitle2': {
            fontSize: '1rem',
        },
    },
    successIcon: {
        marginRight: '20px',
        fontSize: '40px',
    },
    buttonBlock: {
        marginBottom: '50px',
    },
    successInfo: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: '50px',
        
    },
}))
