import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        '& h2.title': {
            fontWeight: '400'
        },
        '& div.slider': {
            margin: '15px -6px 0',
            '& div.slick-slide': {
                padding: '14px 7px',
                marginTop: '-14px'
            },
            '& button.slick-prev': {
                left: '-5px'
            },
            '& button.slick-next': {
                right: '-5px'
            },
            '& button.slick-disabled': {
                display: 'none'
            }
        }
    }
}));