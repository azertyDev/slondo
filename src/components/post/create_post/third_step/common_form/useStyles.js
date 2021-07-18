import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
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
            }
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
            '& p': {
                wordBreak: 'break-all'
            }
        }
    }
}));