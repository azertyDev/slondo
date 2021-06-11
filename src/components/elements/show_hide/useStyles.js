import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
    root: {
        '& div.show-hide-txt': {
            marginBottom: '30px',
            '& > span': {
                color: theme.palette.primary.main,
                cursor: 'pointer',
                textDecoration: 'underline'
            }
        }
    }
}));