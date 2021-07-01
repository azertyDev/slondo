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
        margin: 0,
        height: 40,
        padding: '7px 20px',
        userSelect: 'none',
        background: '#FFFFFF',
        borderRadius: '100px',
        boxShadow: '0px 0px 15px rgb(0 0 0 / 10%)',
        border: '1px solid #4e4e4e',
        borderColor: props => props.checked && '#AD66D5',
        '& span.MuiCheckbox-root, & svg': {
            marginRight: '5px'
        },
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
                width: 20,
                height: 20,
                '& path': {
                    fill: props => props.checked && '#AD66D5'
                }
            }
        }
    }
}))