import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    root: {
        '& > div.feedback-form': {
            maxWidth: 500,
            '& label': {
                marginBottom: 5,
            },
            '& input.MuiOutlinedInput-input': {
                padding: 10,
            },
        },
    },
}))
