import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        '& div.content-adv, & div.right-adv, div.m-right-adv, & div.bottom-adv': {
            borderRadius: '7px'
        },
        '& div.right-adv, div.bottom-adv': {
            backgroundImage: ({image}) => image && `url(${image})`
        },
        '& div.content-adv': {
            height: '345px',
            [theme.breakpoints.down('xs')]: {
                height: '233px'
            }
        },
        '& div.m-right-adv': {
            width: '100%',
            aspectRatio: '9/5',
            backgroundSize: 'cover',
            backgroundImage: ({mobile_image}) => mobile_image && `url(${mobile_image})`
        },
        '& div.right-adv': {
            position: ({isScrollBreak}) => isScrollBreak ? 'fixed' : 'unset',
            top: ({isScrollBreak}) => isScrollBreak && '63px',
            width: '25vw',
            height: '40vw',
            maxHeight: '492px',
            maxWidth: '308px',
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
        },
        '& div.bottom-adv': {
            width: '100%',
            height: '90px'
        }
    }
}));