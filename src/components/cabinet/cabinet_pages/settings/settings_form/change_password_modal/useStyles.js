import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(({breakpoints, palette}) => ({
    root: {
        minWidth: '400px',
        backgroundColor: palette.primary.white,
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
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}));