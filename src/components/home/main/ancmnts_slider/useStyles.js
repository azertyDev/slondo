import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        '& div.error-wrapper': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '366px',
        },
        '& h2.title': {
            marginBottom: '15px',
        },
        '& div.slider': {
            margin: '0 -6px',
            '& div.slick-slide': {
                padding: '14px 7px',
                marginTop: '-7px',
            },
            '& button.slick-prev': {
                left: '-5px',
            },
            '& button.slick-next': {
                right: '-5px',
            },
            '& button.slick-disabled': {
                display: 'none',
            },
        },
    },
}));
