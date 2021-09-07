import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    description: {
        '& > pre': {
            margin: 0,
            padding: '0 10px',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word'
        }
    },
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
    }
}));