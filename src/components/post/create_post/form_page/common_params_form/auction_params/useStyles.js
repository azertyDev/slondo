import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        marginBottom: '20px',
        '& div.price-wrapper': {
            marginBottom: '20px'
        },
        '& div.auction-duration': {
            width: '175px',
            '& div.MuiInputBase-root': {
                width: '100px'
            }
        },
        '& div.adv-auction': {
            '& div.buy-now-wrapper': {
                '& div.MuiTextField-root': {
                    width: '288px'
                }
            }
        }
    }
}));