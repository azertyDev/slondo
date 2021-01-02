import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 40,
        '& > h4.MuiTypography-h4': {
            marginBottom: 18,
        },
    },
    faqComponent: {
        paddingLeft: 20,
    },
}));
