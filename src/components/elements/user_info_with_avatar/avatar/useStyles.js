import Badge from '@material-ui/core/Badge';
import {makeStyles, withStyles} from '@material-ui/core/styles';

export const StyledBadge = withStyles((theme) => ({
    badge: {
        backgroundColor: '#27AE60',
        color: '#27AE60',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            display: 'default',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: '$ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}))(Badge);

export const useStyles = makeStyles(() => ({
    root: {
        '& .MuiAvatar-root': {
            width: props => props.width ?? '80px',
            height: props => props.height ?? '80px'
        }
    },
}));
