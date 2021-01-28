import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 83,
        '& > h6.MuiTypography-subtitle1': {
            fontSize: 36,
            marginBottom: 22,
        },
    },
}));
