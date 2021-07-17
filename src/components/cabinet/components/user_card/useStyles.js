import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
        '& div.contacts-btns': {
            display: 'flex',
            flexDirection: 'column',
            '& svg': {
                color: '#000'
            }
        },
        '& .MuiAvatar-root': {
            width: 50,
            height: 50
        }
    }
}));
