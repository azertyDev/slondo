import {makeStyles, withStyles} from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import theme from '@src/theme';

export const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        '& > div:first-child': {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row-reverse',
            '& .MuiRating-root': {
                fontSize: '1rem'
            },
            '& .MuiTypography-subtitle1': {
                marginRight: '5px',
                fontWeight: 600
            }
        },
        '& div.ratingCount': {
            marginLeft: theme.spacing(1)
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