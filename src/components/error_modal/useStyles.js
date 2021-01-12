import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '360px',
        height: '220px',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%,-50%)',
        backgroundColor: theme.palette.primary.white,
        padding: '26px 16px',
        borderRadius: 8,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
        '& > div.close-btn-wrapper': {
            position: 'absolute',
            right: '4px',
            top: '4px',
            background: '#EBEBF0',
            borderRadius: '100%',
            width: '24px',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '& > button.MuiIconButton-root': {
                padding: '5px',
                '& svg': {
                    height: 10,
                    '& > path': {
                        fill: '#28293D',
                    },
                },
            },
            '&:hover': {
                cursor: 'pointer',
                // background: '#fff'
            },
        },
        '& > div.welcome-block > h6.MuiTypography-subtitle1': {
            color: 'rgba(49, 49, 49, 0.6)',
            paddingRight: '100px',
            marginTop: '8px',
        },
        '& h6.error-text': {
            fontWeight: 600,
        },
        '& h6.MuiTypography-subtitle1': {
            textAlign: 'center',
            color: 'rgba(49, 49, 49, 0.6)',
            '& > span': {
                color: theme.palette.primary.secondary,
            },
        },
        '& > button': {
            backgroundColor: '#7DBCF6',
            width: 197,
            height: 38,
            border: 'none',
            '& h6.MuiTypography-subtitle1': {
                color: theme.palette.primary.white,
            },
        },
    },
}));
