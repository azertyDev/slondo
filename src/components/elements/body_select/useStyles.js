import {makeStyles} from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            width: 'auto'
        },
        '& div.body-types': {
            display: 'flex',
            justifyContent: 'space-between',
            [theme.breakpoints.down('sm')]: {
                flexDirection: 'column'
            },
            '& h6': {
                cursor: 'pointer',
                '&.selected': {
                    border: `2px solid ${theme.palette.primary.main}`
                }
            }
        }
    }
}));