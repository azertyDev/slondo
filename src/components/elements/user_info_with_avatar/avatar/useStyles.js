// import Badge from '@material-ui/core/Badge';
import {makeStyles} from '@material-ui/core/styles';

// export const StyledBadge = withStyles((theme) => ({
//     badge: {
//         backgroundColor: onlineStatus => onlineStatus ? '#27AE60' : '#f44336',
//         boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
//         '&::after': {
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//             borderRadius: '50%',
//             animation: '$ripple 1.2s infinite ease-in-out',
//             border: ({onlineStatus}) => onlineStatus ? '1px solid currentColor' : 0,
//             content: '""'
//         }
//     },
//     '@keyframes ripple': {
//         '0%': {
//             transform: 'scale(.8)',
//             opacity: 1
//         },
//         '100%': {
//             transform: 'scale(2.4)',
//             opacity: 0
//         }
//     }
// }))(Badge);

export const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiAvatar-root': {
            width: ({width}) => width ?? '80px',
            height: ({height}) => height ?? '80px'
        },
        '& div.online': {
            backgroundColor: 'green'
        }
    },
    badge: {
        backgroundColor: ({onlineStatus}) => onlineStatus ? '#27AE60' : '#f44336',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            border: 0,
            content: '""'
        }
    }
}));
