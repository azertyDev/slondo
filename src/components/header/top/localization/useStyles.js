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
