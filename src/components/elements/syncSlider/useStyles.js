import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        '& button.slick-prev': {
            left: '10px',
        },
        '& button.slick-next': {
            right: '10px',
        },
    },
    firstSlider: {
        '& div.slick-list': {
            borderRadius: '5px',
        },
        '& div.slick-slide img': {
            width: '100%',
        },
    },
    secondSlider: {
        '& div.slick-slide img': {
            height: '85px',
            borderRadius: '5px',
        },
        '& div.[data-index="1"] img': {
            marginLeft: 0,
        },
    },
    fullscreenIcon: {
        position: 'absolute',
        zIndex: '100',
        top: '0',
        right: '0',
        '& img ': {
            height: '40px',
        },
    },
}));
