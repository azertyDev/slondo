import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        marginBottom: '20px',
        '& svg.MuiSvgIcon-root': {
            fill: '#9a64d0'
        },
        '& div.payment-delivery': {
            display: 'flex',
            alignItems: 'center',
            flexFlow: 'row',
            '& a': {
                textDecoration: 'none'
            },
            '& span.MuiButtonBase-root': {
                padding: '0',
                borderRadius: '5px'
            },
            '& svg.question-mark': {
                marginLeft: '5px'
            },
            '& h6.MuiTypography-subtitle2': {
                fontSize: '12px',
                marginLeft: '5px'
            },
            '& span.safe-auction-rules': {
                color: '#9a64d0'
            }
        },
        '& div.icon-wrapper': {
            display: 'flex',
            alignItems: 'center'
        }
    }
}))