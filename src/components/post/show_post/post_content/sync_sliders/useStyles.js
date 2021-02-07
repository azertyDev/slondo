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
        },
    },
    firstSlider: {
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
        '& div.slick-track': {
            display: 'flex',
            justifyContent: 'center',
            '& div.slick-slide': {
                margin: '0 1px',
                '& img': {
                    width: 'auto !important',
                    height: '518px',
                    objectFit: 'contain',
                    cursor: 'pointer',
                }
            }
        }
    },
    secondSlider: {
        '& div.slick-slide': {
            maxWidth: '230px !important',
            padding: '0 2.5px',
            '& > div, & img': {
                height: `120px !important`,
                objectFit: 'cover',
                '&:hover': {
                    cursor: 'pointer',
                },
            },
        },
    },
}));
