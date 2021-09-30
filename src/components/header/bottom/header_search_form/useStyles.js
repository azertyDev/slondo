import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        display: 'flex'
    },
    input: {
        borderRadius: '10px 0 0 10px',
        border: '1px solid #D5D5D5',
        borderRightWidth: 0,
        background: '#fff',
        width: '100%',
        padding: '0px 40px',
        [theme.breakpoints.down('md')]: {
            height: 40,
            borderRadius: '5px',
            borderRightWidth: 1
        },
        '& input': {
            padding: 0,
            fontFamily: 'inherit'
        }
    },
    iconButton: {
        top: 0,
        left: 0,
        zIndex: 1,
        padding: '11px',
        position: 'absolute',
        '& svg path': {
            fill: '#666666'
        },
        '& span > svg > path': {
            [theme.breakpoints.down('md')]: {
                fill: '#BDBDBD'
            }
        }
    },
    searchButton: {
        width: '15%',
        height: '100%',
        backgroundColor: '#F2F2F2',
        border: '1px solid #D5D5D5',
        borderTopLeftRadius: '0',
        borderTopRightRadius: '9px',
        borderBottomLeftRadius: '0',
        borderBottomRightRadius: '9px',
        '&:hover': {
            backgroundColor: '#ccc'
        }
    }
}));
