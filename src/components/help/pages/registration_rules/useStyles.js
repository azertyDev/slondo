import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& .image': {
            width: '100%'
        },
        '& .image-wrapper': {
            border: '1px solid #F2F2F2',
            borderRadius: '10px',
            padding: '10px 0'
        }
    }
}));
