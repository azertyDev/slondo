import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
    root: {
        background: '#FFFFFF',
        border: '1px solid #F2F2F2',
        borderRadius: '5px',
        padding: 8,
        '& .MuiFormControlLabel-root': {
            margin: 0,
            '& .MuiButtonBase-root': {
                padding: 0,
                marginRight: 5
            }
        }
    }
}));