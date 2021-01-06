import {makeStyles} from '@material-ui/core/styles';


export const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        width: '50px',
        height: '50px',
        backgroundColor: '#fafafa',
        boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.15)',
        borderRadius: '100px',
        zIndex: 20,
        '& span.MuiIconButton-label': {
            // width: 'auto',
            position: 'relative'
        },
        '& svg.prev': {
            transform: 'rotate(180deg)',
            position: 'absolute',
            left: 5
        },
        '& svg.next': {
            position: 'absolute',
            right: 5
        },
        '&:hover': {
            backgroundColor: '#fafafa'
        }
    }
}));
