import {makeStyles} from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        width: '50px',
        height: '50px',
        backgroundColor: theme.palette.primary.white,
        boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.15)',
        zIndex: 20,
        '& > span.MuiIconButton-label': {
            position: 'relative',
            width: '13px',
            height: '13px',
            marginLeft: '-4.5px',
            transform: 'rotate(-45deg)',
            '&:before': {
                content: '""',
                position: 'absolute',
                bottom: '0px',
                right: '0px',
                background: 'linear-gradient(49.94deg, #675EAA 19.03%, #AD66D5 72.72%)',
                width: 'inherit',
                height: '3.2px',
            },
            '&:after': {
                content: '""',
                position: 'absolute',
                top: '0px',
                right: '0px',
                background: 'linear-gradient(49.94deg, #AD66D5 19.03%, #675EAA 72.72%)',
                height: 'inherit',
                width: '3.2px',
            }
        },
        '&.slick-prev > span.MuiIconButton-label': {
            marginRight: '-8.5px',
            transform: 'rotate(135deg)'
        },
        '&:hover': {
            backgroundColor: theme.palette.primary.secondary,
            '& > span:before, & > span:after': {
                background: `${theme.palette.primary.white} !important`
            }
        }
    }
}));
