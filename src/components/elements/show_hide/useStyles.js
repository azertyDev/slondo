import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    root: {
        '& span.show-hide-txt': {
            color: theme.palette.primary.main,
            cursor: 'pointer',
            textDecoration: 'underline'
        }
    }
}));