import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        '& div.contacts-btns': {
            display: 'flex',
            justifyContent: 'space-between'
        },
        '& .MuiAvatar-root': {
            width: 50,
            height: 50
        }
    }
}));
