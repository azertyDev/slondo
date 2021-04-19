import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        background: '#F2F2F2',
        borderRadius: '10px',
        '& button .MuiTypography-subtitle1': {
            color: '#fff'
        }
    },
    editButton: {
        '& svg': {
            color: '#fff'
        }
    }
}))
