import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: '#f7f7f7',
        '& div.actions-btns': {
            display: 'flex',
            justifyContent: 'flex-end'
        }
    }
}));