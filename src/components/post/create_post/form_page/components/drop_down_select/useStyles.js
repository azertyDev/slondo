import {makeStyles} from '@material-ui/core/styles'


export const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        height: '72px',
        '& div.select-wrapper': {
            width: '100%',
            '& > select.MuiNativeSelect-select.MuiNativeSelect-select': {
                padding: '9px',
                border: '1px solid',
                borderRadius: '5px'
            }
        }
    }
}));