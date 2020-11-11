import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
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
            width: '100%',
            '& div.slick-slide img': {
                width: '100%',
            },
            '& a.overlay': {
                /* Display over the entire page */
                position: 'fixed',
                zIndex: '99',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                background: 'rgba(0,0,0,0.9)',
                /* Horizontal and vertical centering of the image */
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                /* We hide all this by default */
                visibility: 'hidden',
                '& img': {
                    /* Maximum image size */
                    maxWidth: '90%',
                    maxHeight: '90%',

                    /* We keep the ratio of the image */
                    width: 'auto',
                    height: 'auto',

                    transform: 'scale(0.95)',
                    transition: 'transform .3s',
                },
                '&:target': {
                    visibility: 'visible',
                    outline: 'none',
                    cursor: 'default',
                    '& image': {
                        transform: 'scale(1)',
                    }
                }
            }
        },
        secondSlider: {
            '& div.slick-track': {
                width: '100% !important',
                margin: 0
            },
            '& div.slick-slide': {
                width: '210px !important',
                marginRight: '5px',
                '& img': {
                    width: '100%',
                    height: '120px',
                },
            },
            '& div.[data-index="1"] img': {
                marginLeft: 0,
            }
        }
    }))
;
