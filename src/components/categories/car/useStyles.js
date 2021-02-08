import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        height: 'auto',
        position: 'relative',
        display: 'flex',
        background: '#F7F7F7',
        borderRadius: 10,
        '& > img.search-icon': {
            width: 18,
            height: 18,
            left: '10px',
        },
    },
}));
