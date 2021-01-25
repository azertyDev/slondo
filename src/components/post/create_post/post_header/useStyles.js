import {makeStyles} from '@material-ui/core';


export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& stepper-wrapper': {
            display: 'flex',
            justifyContent: 'center',
        },
        '& > button.back-btn': {
            width: '250px',
            height: '40px',
            color: theme.palette.primary.white
        }
    }
}))