import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        backgroundColor: '#fafafa',
        border: '1px solid',
        borderRadius: '20px',
        zIndex: 20,
        '& img.left-arrow': {
            transform: 'rotate(180deg)',
        },
        '&:hover':{
            backgroundColor: '#fafafa'
        }
    }
}));