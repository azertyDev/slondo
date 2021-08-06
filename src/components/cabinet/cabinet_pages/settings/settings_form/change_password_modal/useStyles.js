import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(({breakpoints}) => ({
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
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& button': {
            width: '100%'
        }
    }
}));