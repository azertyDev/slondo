import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: '#f7f7f7',
        '& form': {
            width: '100%'
        },
        '& div.main-params': {
            marginBottom: '20px'
        },
        '& div.add-params': {
            width: 'calc(100% + 8px)'
        }
    }
}));