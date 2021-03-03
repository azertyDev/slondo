import {makeStyles} from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    root: {
        '& input.MuiOutlinedInput-input': {
            padding: '10px 15px'
        },
        '& > div': {
            marginBottom: '15px'
        },
        '& div.publish-button-wrapper': {
            display: 'flex',
            justifyContent: 'flex-end',
            '& > button > h6': {
                color: theme.palette.primary.white
            }
        }
    }
}))
