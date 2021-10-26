import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        position: ({isScrollBreak}) => isScrollBreak ? 'fixed' : 'unset',
        top: ({isScrollBreak}) => isScrollBreak && '63px',
        width: '25vw',
        height: '40vw',
        maxHeight: '492px',
        maxWidth: '308px',
        backgroundImage: ({image}) => `url(${image})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        borderRadius: '10px',
        filter: 'drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.08))',
        [theme.breakpoints.down('md')]: {
            width: '100%',
            maxWidth: '100%',
            height: '52vw',
            maxHeight: '100%'
        }
    }
}));