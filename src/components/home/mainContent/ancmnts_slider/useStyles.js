import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        '& h2.title': {
            marginBottom: '15px',
            fontWeight: '400'
        },
        '& div.slider': {
            margin: '0 -6px',
            '& div.slick-slide': {
                padding: '14px 7px',
                marginTop: '-7px'
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