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
            [theme.breakpoints.down('xs')]: {
                justifyContent: 'center',
                marginBottom: '40px',
                '& > button': {
                    position: 'fixed',
                    bottom: 0,
                    width: '100%'
                }
            }
        }
    }
}));
