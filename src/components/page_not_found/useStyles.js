import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        height: '100vh',
        background: 'url("/img/404-bg.jpg") no-repeat center fixed',
        WebkitBackgroundSize: 'cover',
        MozBackgroundSize: 'cover',
        backgroundSize: 'cover'
    },
    header: {
        '& .MuiContainer-root': {
            marginTop: 35
        },
        '& .localization': {
            display: 'flex',
            padding: '5px 7px',
            borderRadius: '100px',
            background: 'rgba(255, 255, 255, 0.6)'
        }
    },
    main: {
        '& h1.MuiTypography-h1': {
            fontSize: 190,
            fontWeight: 600,
            color: '#fff',
            letterSpacing: '1.29362px'
        },
        '& h5.MuiTypography-h5': {
            color: '#fff'
        }
    }

}));
