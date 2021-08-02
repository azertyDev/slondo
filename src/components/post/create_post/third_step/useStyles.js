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
            '& > button > h6': {
                color: theme.palette.primary.white
            }
        }
    }
}));
