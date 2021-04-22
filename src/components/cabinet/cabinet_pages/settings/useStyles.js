import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        background: '#F2F2F2',
        borderRadius: '10px',
        padding: 30
    },
    editButton: {
        backgroundColor: '#fff',
        boxShadow: '0px 1px 2px 0px #00000014',
        borderRadius: '100px',
        padding: '9px 25px',
        '& .MuiTypography-subtitle1': {
            color: '#838383'
        },
        '& svg': {
            color: theme.palette.secondary
        }
    }
}))
