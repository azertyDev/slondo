import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        background: '#FFFFFF',
        padding: 8,
        height: 'fit-content',
        borderRadius: '100px',
        boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
        '& .MuiFormControlLabel-root': {
            margin: 0,
            userSelect: 'none',
            '& .MuiButtonBase-root': {
                padding: 0,
                marginRight: 5
            }
        }
    }
}));