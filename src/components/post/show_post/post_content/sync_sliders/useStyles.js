import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        position: 'relative',
        '& button': {
            '&.slick-prev': {
                left: '25px',
            },
            '&.slick-next': {
                right: '25px'
            }
        }
    },
    firstSlider: {
        '& div.slick-track': {
            display: 'flex',
            justifyContent: 'center',
            '& div.slick-slide': {
                margin: '0 1px',
                '& img': {
                    width: 'auto !important',
                    height: '518px',
                    objectFit: 'contain',
                    cursor: 'zoom-in'
                }
            }
        },
    },
    secondSlider: {
        '& div.slick-slide': {
            maxWidth: '230px !important',
            padding: '0 2.5px',
            '& > div, & img': {
                height: `120px !important`,
                objectFit: 'cover',
                '&:hover': {
                    cursor: 'pointer'
                }
            }
        }
    }
}));