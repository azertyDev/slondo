import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        position: 'relative',
        '& button': {
            '&.slick-prev': {
                left: '25px',
            },
            '&.slick-next': {
                right: '25px',
            },
        }
    },
    firstSlider: {
        width: '100%',
        '& div.slick-slide img': {
            width: `auto !important`,
            height: '518px',
            objectFit: 'contain',
            cursor: 'zoom-in'
        },
        '& > div.slick-slider div.slick-slide': {
            marginRight: 5,
        },
        // '& a.overlay': {
        //     position: 'fixed',
        //     zIndex: '99',
        //     top: '0',
        //     left: '0',
        //     width: '100%',
        //     height: '100%',
        //     background: 'rgba(0,0,0,0.9)',
        //     display: 'flex',
        //     alignItems: 'center',
        //     textAlign: 'center',
        //     visibility: 'hidden',
        //     '& img': {
        //         maxWidth: '90%',
        //         maxHeight: '90%',
        //         width: 'auto',
        //         height: 'auto',
        //         transform: 'scale(0.95)',
        //         transition: 'transform .3s',
        //     },
        //     '&:target': {
        //         visibility: 'visible',
        //         outline: 'none',
        //         cursor: 'default',
        //         '& image': {
        //             transform: 'scale(1)',
        //         }
        //     }
        // }
    },
    secondSlider: {
        '& div.slick-track': {
            margin: 'inherit'
        },
        '& div.slick-slide': {
            width: (props) =>
            props.imgs.length > 4 ? '230px' : '212px !important',
            // width: '212px !important',
            '& > div, & img': {
                height: `120px !important`,
            },
            '& > div': {
                padding: '0 2.5px'
            },
            '& img': {
                objectFit: 'cover',
                '&:hover': {
                    cursor: 'pointer'
                }
            },
        }
    },
}));