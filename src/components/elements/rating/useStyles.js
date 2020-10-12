import { makeStyles, withStyles } from '@material-ui/core/styles'
import Rating from '@material-ui/lab/Rating'

export const useStyles = makeStyles({
    root: {
        width: 200,
        display: 'flex',
        alignItems: 'center',
    },
})

export const StyledRating = withStyles({
    iconFilled: {
        color: '#AD66D5',
    },
    iconHover: {
        color: '#675EAA',
    },
})(Rating)