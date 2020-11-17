const { makeStyles } = require('@material-ui/core')

export const useStyles = makeStyles((theme) => ({
    root: {
        // width: '250px',
        '& div.MuiOutlinedInput-input': {
            padding: '10px 25px 10px 10px',
            '& h6.MuiTypography-subtitle2': {
                textOverflow: 'ellipsis',
            },
        },
    },
}))
