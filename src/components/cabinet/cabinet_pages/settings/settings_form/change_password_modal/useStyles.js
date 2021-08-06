import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(({breakpoints, spacing}) => ({
    root: {
        width: '100%',
        '& div.formik-num-pass': {
            '& > div:first-child': {
                marginBottom: '10px'
            },
            '& > div:nth-child(2)': {
                marginBottom: '5px'
            },
            [breakpoints.down('sm')]: {
                '& div.forget-password': {
                    marginTop: '6px'
                }
            }
        }
    },
    modalBody: {
        '& button': {
            width: '100%',
            borderRadius: 5
        }
    }
}));