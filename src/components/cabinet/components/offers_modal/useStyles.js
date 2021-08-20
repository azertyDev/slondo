import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles({
    root: {},
    offerCard: {
        borderRadius: 5,
        backgroundColor: '#F5F5F5',
        boxShadow: '0px 1px 2px 0px #00000026',
        '& button': {
            height: '38px',
            '& svg': {
                marginRight: 10
            }
        }
    }
});