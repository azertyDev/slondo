import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        marginBottom: '20px',
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
    },
    serviceItem: {
        padding: '8px',
        userSelect: 'none',
        height: 'fit-content',
        background: '#FFFFFF',
        boxShadow: '0px 0px 15px rgb(0 0 0 / 10%)',
        borderRadius: '100px',
        margin: 0,
        border: `1px solid ${props => props.checked ? '#AD66D5' : 'none'}`,
        borderStyle: 'inset',
        '& .MuiButtonBase-root': {
            padding: 0
        },
        '& .MuiTypography-root': {
            display: 'flex',
            alignItems: 'center',
            '& svg': {
                margin: '0 5px'
            }
        }
    }
}))