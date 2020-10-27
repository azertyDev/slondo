import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'inline-block',
        width: '80%',
        '& > div.MuiPaper-root': {
            position: 'relative',
            padding: '15px',
            '& > div': {
                width: '60%',
            },
            '& > div.notification-bg': {
                width: '200px',
                height: '100%',
                backgroundImage: `url(img/surprise_img.svg)`,
                backgroundPosition: 'center right',
                backgroundSize: 'auto',
                backgroundRepeat: 'no-repeat',
                position: 'absolute',
                top: '10px',
                right: '30px',
            },
        },
    },
}));
