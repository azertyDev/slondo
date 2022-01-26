import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
        '& div.card-data': {
            margin: '40px 0 25px'
        },
        '& div.submit-btn-wrapper': {
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '20px',
            '& > button': {
                padding: '12px 40px',
                background: '#2F80ED'
            }
        },
        '& div.payme-term-wrapper': {
            '& > p': {
                fontSize: '.75rem',
                textAlign: 'center',
                '& > a': {
                    color: '#AD66D5',
                    textDecoration: 'none'
                }
            }
        }
    },
    paymentCard: {
        width: '70%',
        minHeight: '280px',
        padding: '20px 20px 5px',
        margin: 'auto',
        marginBottom: '20px',
        borderRadius: '20px',
        boxShadow: '0px 0px 15px rgba(103, 94, 170, 0.15)',
        background:
            '#EEEDF2 url(/img/services/payme.png) no-repeat 96% 5% !important',
        '& > div': {
            height: '100%'
        },
        '& button': {
            width: '100%',
            '&:disabled': {
                backgroundColor: '#E0E0E0',
                borderRadius: '5px'
            }
        },
        '& div.MuiTextField-root': {
            '& input': {
                padding: '12px 14px !important',
                borderRadius: '6px'
            }
        },
        '& div.card-number': {
            marginBottom: '20px'
        },
        '& div.card-data-term': {
            '& > p': {
                fontSize: '.75rem',
                lineHeight: '1rem',
                textAlign: 'center'
            }
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            padding: '11px 16px'
        }
    }
}));
