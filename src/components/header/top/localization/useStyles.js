import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'inline-flex',
        justifyContent: 'center',
        height: '100%',
        alignItems: 'center',
        '& a': {
            textDecoration: 'none'
        },
        '& > p': {
            lineHeight: 1,
            fontWeight: 500,
            cursor: 'pointer',
            color: '#D5D5D5',
            '&:first-child': {
                paddingRight: '4px',
                borderRight: `1px ${theme.palette.primary.main} solid`
            },
            '&:last-child': {
                paddingLeft: '4px'
            },
            [theme.breakpoints.down('xs')]: {
                fontSize: '.85rem'
            }
        }
    },
    selected: {
        color: `${theme.palette.primary.main}!important`
    }
}));
