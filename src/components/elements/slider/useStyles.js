import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& .react-multiple-carousel__arrow': {
            opacity: '0.7',
            background: '#ffffff',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.15)',
            minWidth: 36,
            minHeight: 36,
            '&:before': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#4E4E4E'
            }
        }
    },
    arrows: {
        display: 'flex',
        justifyContent: 'center',
        width: '36px',
        height: '36px',
        backgroundColor: theme.palette.primary.white,
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.15)',
        zIndex: 20,
        position: 'absolute',
        '& > span.MuiIconButton-label': {
            position: 'relative',
            width: '10px',
            height: '10px',
            marginLeft: '-2.5px',
            transform: 'rotate(-45deg)',
            '&:before': {
                content: '""',
                position: 'absolute',
                bottom: '0px',
                right: '0px',
                background: '#4E4E4E',
                width: 'inherit',
                height: '2.5px'
            },
            '&:after': {
                content: '""',
                position: 'absolute',
                top: '0px',
                right: '0px',
                background: '#4E4E4E',
                height: 'inherit',
                width: '2.5px'
            }
        },
        '&.right': {
            right: '70px'
        },
        '&.left': {
            left: '70px',
            '& > span.MuiIconButton-label': {
                marginRight: '-6.5px',
                transform: 'rotate(135deg)'
            }
        },
        '&:hover': {
            backgroundColor: theme.palette.primary.secondary,
            '& > span:before, & > span:after': {
                background: `${theme.palette.primary.white} !important`
            }
        }
    }
}));
