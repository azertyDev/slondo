import {makeStyles} from '@material-ui/core/styles';


export const useStyles = makeStyles(() => ({
    root: {
        '& input.MuiOutlinedInput-input': {
            padding: '10px 15px'
        },
        '& > div': {
            marginBottom: '15px'
        }
    }
}))
