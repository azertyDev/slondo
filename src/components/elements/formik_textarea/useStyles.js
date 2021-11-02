import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        '& .MuiFormHelperText-contained': {
            textAlign: 'end'
        }
    },
    textArea: {
        '& .MuiOutlinedInput-root': {
            background: '#FDFCFF'
        }
    }
}));