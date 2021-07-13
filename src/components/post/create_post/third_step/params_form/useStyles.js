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
        margin: '10px 16px 16px',
        [theme.breakpoints.down('xs')]: {
            margin: '16px 8px 8px'
        },
        '& .prev-text': {
            margin: '15px 0',
            '& strong': {
                color: '#838383',
                fontWeight: '500',
                marginRight: '5px'
            }
        }
    }
}));