import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        '& div.payment-delivery': {
            display: 'flex',
            alignItems: 'center',
            flexFlow: 'row',
            '& a': {
                textDecoration: 'none',
            },
            '& span.MuiButtonBase-root': {
                padding: '0',
                borderRadius: '5px',
                '& svg path': {
                    backgroundColor: '#eaeaea',
                    fill: '#ccc',
                },
            },
            '& svg.question-mark': {
                marginLeft: '5px',
            },
            '& h6.MuiTypography-subtitle2': {
                fontSize: '12px',
                marginLeft: '5px',
            },
            '& span.safe-auction-rules': {
                color: '#9a64d0;',
            }
        }
    }
}))