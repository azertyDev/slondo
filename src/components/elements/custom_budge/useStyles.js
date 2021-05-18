import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles(() => ({
    root: {
        '& .MuiBadge-badge': {
            top: '5px',
            color: '#fff',
            right: '5px',
            height: '16px',
            padding: '0',
            minWidth: '16px',
        }
    }
}));
