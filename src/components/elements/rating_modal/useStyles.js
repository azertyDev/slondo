import {makeStyles} from '@material-ui/core/styles';
import theme from '@src/theme';

export const useStyles = makeStyles({
    divider: {
        width: '100%',
        margin: '20px 0',
        background: 'linear-gradient(90deg, rgba(243, 243, 243, 0.15) -4.72%, rgba(204, 204, 204, 0.8) 47.81%, rgba(248, 248, 248, 0.15) 104.92%)'
    },
    ratingComponent: {
        '&, div.rating > p, .MuiRating-root': {
            fontSize: '2.5rem !important'
        },
        '& .MuiBox-root': {
            '& .MuiTypography-subtitle1': {
                marginRight: '5px',
                fontSize: theme.typography.h3.fontSize
            }
        }
    }
});