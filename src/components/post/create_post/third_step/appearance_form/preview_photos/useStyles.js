import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        // display: 'flex',
        // '& .MuiGrid-root': {
        //     position: 'relative'
        // },
        '& button': {
            width: 20,
            height: 20,
            position: 'absolute',
            top: '-10px',
            right: '-10px',
            borderRadius: '100%',
            backgroundColor: '#EB5757'
        }
    }
    // fileUpload: {
    //     '&[type=file]': {
    //         cursor: 'pointer',
    //         width: '0',
    //         height: '0',
    //         overflow: 'hidden'
    //     },
    //     '&[type=file]:before': {
    //         width: '158px',
    //         height: '32px',
    //         fontSize: '16px',
    //         lineHeight: '32px',
    //         display: 'inline-block',
    //         background: 'white',
    //         border: '1px solid #000',
    //         padding: '0 10px'
    //     },
    //     '&[type=file]::-webkit-file-upload-button': {
    //         visibility: 'hidden'
    //     }
    // }
}));
