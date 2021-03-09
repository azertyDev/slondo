import {makeStyles} from '@material-ui/core/styles'


export const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        border: '1px solid',
        borderRadius: '5px',
        '& select.MuiNativeSelect-select.MuiNativeSelect-select': {
            padding: '9px'
        }
    }
}));