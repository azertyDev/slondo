import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        height: 38,
        position: 'relative',
        display: 'flex',
        background: 'green',
        '& > img.search-icon, & > img.filter-icon': {
            position: 'absolute',
            height: '20px',
            top: 'calc(50% - 10px)',
        },
        '& > img.search-icon': {
            width: 18,
            height: 18,
            left: '10px',
        },
        '& > img.filter-icon': {
            right: '10px',
        },
        '& > input.search-input': {
            padding: '8px 230px 8px 35px',
            width: '100%',
            borderRadius: '7px',
            border: '1px solid #ccc',
            fontSize: '0.87rem',
        }
    },
}));
