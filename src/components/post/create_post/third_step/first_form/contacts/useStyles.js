import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        '& div.display-phone': {
            display: 'flex',
            alignItems: 'center'
        },
        '& h6.your-num': {
            marginBottom: '20px'
        },
        '& h6.add-num': {
            marginBottom: '5px'
        }
    }
}));