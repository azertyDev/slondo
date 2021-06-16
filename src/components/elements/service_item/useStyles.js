import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        marginBottom: '5px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '25px'
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: '15px'
        },
        '&:last-child': {
            marginBottom: 0
        },
        alignItems: 'center',
        '& .MuiTypography-subtitle2': {
            [theme.breakpoints.down('xs')]: {
                fontSize: '10px'
            },
            color: (props) =>
                props.value ? '#828282' : '#E0E0E0'
        },
        '& svg': {
            marginRight: '9px',
            '& path': {
                fill: (props) =>
                    props.value ? '#7DBCF6' : '#E0E0E0'
            }
        }
    }
}));