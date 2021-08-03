import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        '& .MuiFormHelperText-contained': {
            textAlign: 'end'
        }
    },
    textArea: {
        '& .MuiOutlinedInput-root': {
            background: '#fff'
        }
    }
}));