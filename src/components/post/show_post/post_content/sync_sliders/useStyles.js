import { makeStyles } from '@material-ui/core/styles';

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
        },
    },
    firstSlider: {
        width: '100%',
        position: 'relative',
        '& > button': {
            width: 50,
            height: 50,
            top: 25,
            position: 'absolute',
            zIndex: 1,
            background: '#fff',
            borderRadius: '100%',
            '&.favorite-btn': {
                left: 25,
            },
            '&.share-btn': {
                right: 25,
            },
            '& svg': {
                width: 30,
                height: 'auto',
                '& path': {
                    fill: '#8E62C2',
                },
            },
            '&:hover': {
                background:
                    'linear-gradient(49.94deg, #675EAA 19.03%, #AD66D5 72.72%)',
                '& svg': {
                    transform: 'scale(1.1)',
                    transition: 'transform .3s cubic-bezier(.5,0,.5,3)',
                    '& path': {
                        fill: '#fff',
                    },
                },
            },
        },
        '& div.slick-slide img': {
            width: `auto !important`,
            height: '518px',
            objectFit: 'contain',
            cursor: 'zoom-in',
        },
        '& > div.slick-slider div.slick-slide': {
            marginRight: 5,
        },
    },
    secondSlider: {
        '& div.slick-track': {
            margin: 'inherit',
        },
        '& div.slick-slide': {
            width: (props) =>
                props.imgs.length > 4 ? '230px' : '212px !important',
            // width: '212px !important',
            '& > div, & img': {
                height: `120px !important`,
            },
            '& > div': {
                padding: '0 2.5px',
            },
            '& img': {
                objectFit: 'cover',
                '&:hover': {
                    cursor: 'pointer',
                },
            },
        },
    },
}));
