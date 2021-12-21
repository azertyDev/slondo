import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        '& div.success-title': {
            textAlign: 'center'
        },
        '& div.success-info': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '30px',
            '& svg': {
                marginBottom: '20px',
                fontSize: 30,
                '& > path': {
                    fill: '#27AE60'
                }
            }
        },
        '& div.close-btn-wrapper': {
            '& button': {
                width: '195px'
            }
        }
    }
}));
