import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down('md')]: {
            background: '#F5F5F5',
            padding: '7px',
            borderRadius: '100px'
        },
        '& a': {
            textDecoration: 'none'
        },
        '& > h6': {
            lineHeight: 1,
            cursor: 'pointer',
            '&:first-child': {
                paddingRight: '4px',
                borderRight: '1px #000 solid'
            },
            '&:last-child': {
                paddingLeft: '4px'
            }
        }
    },
    selected: {
        color: theme.palette.primary.main
    }
}));
