import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        marginBottom: '55px',
        '& div.error-wrapper': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '366px'
        },
        '& h2.title': {
            marginBottom: '15px'
        },
        '& div.react-multi-carousel-list': {
            margin: '0 -6px',
            '& li.slide-item': {
                padding: '14px 7px',
                marginTop: '-7px'
            },
            '& button.react-multiple-carousel__arrow--left': {
                left: 0
            },
            '& button.react-multiple-carousel__arrow--right': {
                right: 0
            }
        }
    }
}));
