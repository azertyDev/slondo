import {makeStyles} from '@material-ui/core/styles'


export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '400px',
        height: '300px',
        backgroundColor: theme.palette.primary.white,
        '& button': {
            padding: '15px 0',
            margin: '5px 0'
        },
        '& > div.form-btns': {
            display: 'flex',
        }
    }
}))
