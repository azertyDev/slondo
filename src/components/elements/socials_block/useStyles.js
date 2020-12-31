import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > h6.MuiTypography-subtitle1': {
            fontWeight: 600,
            marginBottom: '10px',
        },
        '& div': {
            '& > a': {
                marginRight: '20px',
                '&:last-child': {
                    margin: 0,
                },
            },
        },
    },
}));
