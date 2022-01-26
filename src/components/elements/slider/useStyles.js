import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        '& button.react-multiple-carousel__arrow': {
            opacity: '0.7',
            background: '#fff',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.15)',
            minWidth: '36px',
            minHeight: '36px',
            transition: 'all .2s',
            '&:before': {
                color: '#4E4E4E',
                fontWeight: 600
            }
        },
        '& button.react-multiple-carousel__arrow:hover': {
            backgroundColor: '#845CAB',
            opacity: 1,
            '&:before': {
                color: '#fff'
            }
        }
    }
}));
