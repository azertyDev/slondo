import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        '& label': {

        },
        '& div.from-to-wrapper': {
            display: 'flex',
            justifyContent: 'flex-end',
            '& div.MuiTextField-root': {
                '&:first-child': {
                    marginRight: '8px'
                }
            }
        }
    }
}));