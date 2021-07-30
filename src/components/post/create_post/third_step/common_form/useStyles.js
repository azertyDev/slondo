import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& div.auction-params': {
            display: 'flex',
            alignItems: 'center'
        },
        '& div.post-options': {
            '& svg.MuiSvgIcon-root': {
                fill: '#9a64d0'
            },
            '& > div': {
                display: 'flex',
                alignItems: 'center'
            },
            margin: '11px 0'
        },
        '& div.phone-wrapper': {
            marginTop: '12px',
            '& .MuiFormControl-fullWidth': {
                width: '196px'
            }
        },
        '& div.avail-days-wrapper': {
            maxWidth: '304px',
            marginLeft: 'auto',
            '& > a.settings': {
                textDecoration: 'none',
                color: '#9b66d2'
            }
        }
    }
}));