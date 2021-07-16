import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        minHeight: '216px',
        '& input': {
            display: 'none'
        },
        '& button': {
            position: 'absolute',
            top: '6px',
            right: '6px',
            padding: '7px',
            borderRadius: '50%',
            backgroundColor: '#EB5757',
            '& > svg': {
                width: '17px',
                height: '17px'
            }
        }
    },
    dropWrapper: {
        '& div.prev-img': {
            '& img': {
                width: '100%',
                height: '100px',
                objectFit: 'cover',
                borderRadius: '5px'
            }
        },
        '& div.upload': {
            width: '100%',
            '& > label': {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100px',
                backgroundColor: '#fff',
                borderRadius: '5px',
                cursor: 'pointer',
                '& svg': {
                    width: '60px',
                    height: '60px',
                    color: '#7DBCF6'
                }
            }
        }
    }
}));
