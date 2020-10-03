const { makeStyles } = require('@material-ui/core')

export const useStyle = makeStyles((theme) => ({
    root: {
        textOverflow: 'ellipsis',
        // width: '250px',
        '& div.MuiSelect-select': {
            padding: '10px 25px 10px 10px',
        },
    },
}))
