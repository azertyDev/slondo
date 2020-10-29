import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '30px',
        display: 'inline-block',
        width: '80%',
        filter: 'drop-shadow(0px 0px 8px rgba(132, 92, 171, 0.2))',
        '& > div.MuiPaper-root': {
            position: 'relative',
            padding: '15px',
            borderRadius: '10px',
            '& > div': {
                display: 'inline-block',
                width: '55%',
                '& > h5.MuiTypography-h5': {
                    fontWeight: '600',
                },
                '& > h6.MuiTypography-subtitle1': {
                    margin: '15px 0',
                    lineHeight: '15px',
                    color: '#838383',
                },
                '& > a': {
                    textDecoration: 'none',
                    display: 'inline-block',
                    '& > h6.more-details': {
                        color: '#7DBCF6',
                        fontWeight: '600',
                    },
                },
            },
            '& > div.notification-bg': {
                width: '200px',
                height: '100%',
                backgroundImage: `url(img/surprise_img.svg)`,
                backgroundPosition: 'center right',
                backgroundSize: 'auto',
                backgroundRepeat: 'no-repeat',
                position: 'absolute',
                top: '0px',
                right: '30px',
            },

            '& > button': {
                width: '30px',
                height: '30px',
                position: 'absolute',
                top: '10px',
                right: '10px',
            },
        },
    },
}));
