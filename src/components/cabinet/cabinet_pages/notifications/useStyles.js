import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& .delete-notifications': {
            width: 'fit-content',
            marginBottom: 20
        }
    },
    modal: {
        width: '350px',
        '& button': {
            width: '50%',
            '&:first-child': {
                marginBottom: 20
            }
        }
    }
}))
