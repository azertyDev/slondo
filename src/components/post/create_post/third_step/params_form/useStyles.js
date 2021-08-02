import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& div.title-wrapper': {
            marginBottom: '20px'
        },
        '& div.acc-wrapper': {
            marginBottom: '15px'
        }
    },
    prevWrapper: {
        '& .key': {
            color: '#838383',
            fontWeight: 500
        }
    }
}));