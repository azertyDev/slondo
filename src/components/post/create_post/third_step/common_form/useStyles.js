import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    serviceItem: {
        padding: '8px 15px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: '100px',
        width: 'max-content',
        margin: '2px 10px 2px 0',
        '& svg': {
            marginRight: 10
        }
    },
    description: {
        margin: 0,
        '& h6.MuiTypography-subtitle1': {
            whiteSpace: 'normal',
            wordBreak: 'break-word'
        }
    }
}));