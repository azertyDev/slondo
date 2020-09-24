import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
    root: {
        background: '#ccc',
        marginTop: '15px',
        borderRadius: '7px',
        marginLeft: '15px',
        '&:firstChild': {
            marginTop: 0
        }
    }
}))