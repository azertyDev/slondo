import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        '& input': {
            display: 'none'
        },
        '& button': {
            position: 'absolute',
            top: '5px',
            right: '5px',
            padding: '5px',
            borderRadius: '50%',
            backgroundColor: '#EB5757',
            '& > svg': {
                width: '10px',
                height: '10px',
                '& path': {
                    fill: '#fff'
                }
            }
        }
    },
    dropWrapper: {
        '& div.prev-img': {
            '& img': {
                width: '100%',
                height: '130px',
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
                height: '130px',
                backgroundColor: '#fff',
                borderRadius: '5px',
                cursor: 'pointer',
                '& > span': {
                    width: '40px',
                    height: '40px',
                    background: '#7DBCF6',
                    borderRadius: '100%',
                    '& svg': {
                        '& path': {
                            fill: '#fff'
                        }
                    }
                }
            }
        }
    }
}));
