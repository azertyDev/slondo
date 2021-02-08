import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        height: 'auto',
        background: '#F7F7F7',
        borderRadius: 10,
        padding: 15,
        '& > img.search-icon': {
            width: 18,
            height: 18,
            left: '10px',
        },
    },
}));
