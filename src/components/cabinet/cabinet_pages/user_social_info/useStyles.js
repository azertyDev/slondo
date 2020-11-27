import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& > div.menu-item-subscribe': {
            display: 'flex',
            backgroundColor: '#F2F2F2',
            justifyContent: 'space-around',
            padding: '19px 0 14px 0',
            borderRadius: '10px',
            '& > div': {
                textAlign: 'center',
                '& > div > h6.MuiTypography-subtitle1': {
                    color: '#4E4E4E',
                    cursor: 'pointer'
                },
                '& > div:first-child > h6.MuiTypography-h6': {
                    textAlign: 'center',
                    fontWeight: '600',
                    backgroundImage:
                        'linear-gradient(49.94deg, #675EAA 19.03%, #AD66D5 72.72%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                },
                '&.selected > div:last-child > h6.MuiTypography-subtitle1': {
                    borderBottom: '1px solid #9864C9',
                    backgroundImage:
                        'linear-gradient(49.94deg, #675EAA 19.03%, #AD66D5 72.72%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                },
                '&:hover': {
                    cursor: 'pointer'
                },
            },
        },
    },
}));
