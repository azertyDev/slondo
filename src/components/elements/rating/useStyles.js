import { makeStyles, withStyles } from '@material-ui/core/styles'
import Rating from '@material-ui/lab/Rating'

export const useStyles = makeStyles({
    root: {
        width: 200,
        display: 'flex',
        alignItems: 'center',
        '& div.MuiBox-root-37': {
            marginLeft: '5px'
        }
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