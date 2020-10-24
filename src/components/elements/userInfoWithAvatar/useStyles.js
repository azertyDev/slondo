import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& div.user-info': {
            display: 'flex',
            margin: '20px 0 20px 0',
            '& > div:first-child': {
                marginRight: '20px',
                '& > img': {
                    height: '60px',
                },
            },
            '& > div': {
                '& > div:nth-child(2) > h6.MuiTypography-subtitle1': {
                    fontSize: '0.75rem',
                },
            },
        },
    },
}));
