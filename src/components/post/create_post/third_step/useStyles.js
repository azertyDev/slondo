import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& div.title-wrapper': {
            marginBottom: '15px'
        },
        '& > div': {
            '&:not(:last-child)': {
                marginBottom: '15px'
            }
        },
        '& div.publish-button-wrapper': {
            display: 'flex',
            justifyContent: 'flex-end',
            '& > button': {
                width: '120px',
                '&:disabled': {
                    opacity: 1
                }
            },
            [theme.breakpoints.down('xs')]: {
                justifyContent: 'center',
                marginBottom: '40px',
                '& > button': {
                    bottom: 0,
                    width: '100%',
                    position: 'fixed',
                }
            }
        }
    }
}));
