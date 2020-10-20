import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& div.action-menu-wrapper': {
            '& > div.menu-item-1': {
                display: 'flex',
                backgroundColor: '#F2F2F2',
                justifyContent: 'space-around',
                padding: '10px 0',
                borderRadius: '10px',
                '& > div': {
                    textAlign: 'center',
                    '& > div > h6.MuiTypography-subtitle1': {
                        color: '#4E4E4E',
                    },
                    '& > div:first-child > h6.MuiTypography-subtitle1': {
                        textAlign: 'center',
                        fontSize: '20px',
                        fontWeight: '600',
                        backgroundImage:
                            'linear-gradient(49.94deg, #675EAA 19.03%, #AD66D5 72.72%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    },
                },
            },
        },
    },
}));
