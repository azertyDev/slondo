import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        '& h6.select-service-title': {
            marginBottom: '10px'
        },
        '& div.pay-icons-wrapper': {
            '& > div > button': {
                width: '100%',
                height: '100px',
                backgroundColor: '#f3f3f3',
                borderRadius: 0
            }
        }
    }
}));
