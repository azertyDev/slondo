import {makeStyles} from '@material-ui/core/styles'


export const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        '& h6': {
            height: '16px'
        },
        '& label': {
            fontWeight: '600',
        },
        '& div.select-wrapper': {
            width: '100%',
            '& > .MuiInputBase-input': {
                padding: '9px',
                paddingRight: '30px',
                border: '1px solid',
                borderRadius: '5px'
            },
            '& fieldset.MuiOutlinedInput-notchedOutline': {
                borderColor: 'inherit',
                borderWidth: 0
            },
            '& svg.MuiSvgIcon-root': {
                right: '7px'
            }
        }
    }
}));