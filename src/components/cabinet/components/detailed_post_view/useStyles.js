import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {},
    advertise: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF7E0',
        height: '100%',
        width: '100%',
        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.15)',
        borderRadius: 5,
        '& .MuiTypography-subtitle1': {
            color: '#FFB800'
        }
    },
    paper: {
        background: '#F9F9F9',
        padding: '15px 20px',
        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.15)',
        borderRadius: 5,
        '& .bonus_item': {
            display: 'flex',
            '& .icon-bg': {
                width: 32,
                height: 32,
                display: 'flex',
                flexFlow: 'center',
                background: '#F2F2F2',
                borderRadius: 100
            }
        }
    }
}));

