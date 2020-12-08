import { makeStyles, withStyles } from '@material-ui/core/styles'
import Rating from '@material-ui/lab/Rating'
import theme from '@src/theme'

export const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        '& > div:first-child': {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row-reverse',
            '& > span.MuiRating-root': {
                fontSize: '1rem',
            },
            '& div.MuiBox-root': {
                '& > h6.MuiTypography-subtitle1': {
                    marginRight: '5px',
                    fontWeight: 600,
                },
            },
        },
        '& > div:last-child': {
            marginLeft: theme.spacing(1),
        },
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