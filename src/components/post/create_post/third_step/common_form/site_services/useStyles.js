import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
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
                marginLeft: '5px',
                '& path': {
                    fill: '#9a64d0'
                }
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
        margin: 0,
        height: 40,
        padding: '7px 10px',
        userSelect: 'none',
        background: '#FFFFFF',
        borderRadius: '5px',
        border: '1px solid #F2F2F2',
        borderColor: props => props.checked && '#AD66D5',
        '& .MuiButtonBase-root': {
            padding: 0,
            '& svg path': {
                fill: props => props.checked && '#AD66D5'
            }
        },
        '& .MuiTypography-root': {
            display: 'flex',
            alignItems: 'center',
            color:
                props => props.checked && '#AD66D5',
            '& svg': {
                margin: '0 10px 0 10px',
                width: 25,
                '& path': {
                    fill: props => props.checked && '#AD66D5'
                }
            }
        }
    }
}))