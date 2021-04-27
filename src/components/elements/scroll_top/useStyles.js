import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2)
    },
    scrollTop: {
        width: 50,
        height: 50,
        backgroundSize: '200% auto',
        color: '#fff',
        borderRadius: '50%',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
        transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: 'linear-gradient(49.94deg, #675EAA 19.03%, #AD66D5 72.72%)',
        '& div.MuiFab': {
            backgroundColor: theme.palette.primary.white,
            width: 48,
            height: 48,
            position: 'relative',
            borderRadius: '50%',
            '& span.icon': {
                position: 'absolute',
                top: '44%',
                left: '38%',
                width: '13px',
                height: '13px',
                transform: 'rotate(-135deg)',
                '&:before': {
                    content: '""',
                    position: 'absolute',
                    bottom: '0px',
                    right: '0px',
                    background:
                        'linear-gradient(49.94deg, #675EAA 19.03%, #AD66D5 72.72%)',
                    width: 'inherit',
                    height: '3.2px'
                },
                '&:after': {
                    content: '""',
                    position: 'absolute',
                    top: '0px',
                    right: '0px',
                    background: 'linear-gradient(49.94deg, #AD66D5 19.03%, #675EAA 72.72%)',
                    height: 'inherit',
                    width: '3.2px'
                }
            }
        },
        '&:hover': {
            backgroundImage: theme.palette.primary.secondary,
            '& span.MuiFab': {
                backgroundColor: theme.palette.primary.secondary,
                '& > span:before, & > span:after': {
                    background: `${theme.palette.primary.white} !important`
                }
            }
        }
    }
}));