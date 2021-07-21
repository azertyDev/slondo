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
        '& div.location-wrapper': {
            display: 'flex',
            width: '50%',
            [theme.breakpoints.down('xs')]: {
                width: '100%'
            },
            marginBottom: '20px',
            '& > div': {
                display: 'flex'
            }
        },
        '& div.description-wrapper': {
            marginBottom: '20px',
            '& p': {
                wordBreak: 'break-all'
            }
        },
        '& div.phone-num': {
            marginBottom: '20px'
        },
        '& div.phone-block': {
            marginTop: '12px',
            '& .MuiFormControl-fullWidth': {
                width: '170px'
            }
        }
    }
}));