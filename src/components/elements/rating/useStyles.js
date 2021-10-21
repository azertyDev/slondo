import {makeStyles, withStyles} from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        '& div.rating': {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row-reverse',
            '& .MuiRating-root': {
                paddingLeft: '4px',
                fontSize: '1rem'
            },
            '& .MuiTypography-subtitle1': {
                fontWeight: 600
            }
        },
        '& div.ratingCount': {
            marginLeft: theme.spacing(1)
        }
    }
}));

export const StyledRating = withStyles({
    iconFilled: {
        color: '#AD66D5'
    },
    iconHover: {
        color: '#675EAA'
    }
})(Rating);