import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        width: '50px',
        height: '50px',
        backgroundColor: '#fafafa',
        boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
        borderRadius: '100px',
        zIndex: 20,
        '& svg.left-arrow': {
            transform: 'rotate(180deg)',
        },
        '&:hover': {
            backgroundColor: '#fafafa'
        }
    }
}));