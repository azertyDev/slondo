import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        '& .floating-auc': {
            position: 'fixed',
            zIndex: '100',
            bottom: 0,
            left: 0,
            width: '100%',
            padding: '13px 7px 14px 17px',
            background: '#494A61',
            '& button': {
                width: '50%',
                color: '#FFFFFF',
                background: 'linear-gradient(49.94deg, #675EAA 19.03%, #AD66D5 72.72%)',
                borderRadius: '3px'
            }
        },
        '& .floating': {
            position: 'fixed',
            zIndex: '100',
            bottom: 0,
            left: 0,
            width: '100%',
            padding: '13px 7px 14px 17px',
            display: 'flex',
            background: '#494A61',
            '& div.floating-text': {
                display: 'flex',
                alignItems: 'center',
                width: '50%',
                fontSize: 'calc(14px + 2 * (100vw / 1280))',
                '& svg': {
                    marginRight: '18px'
                }
            },
            '& h6': {
                color: '#FFFFFF',
                fontSize: 'calc(10px + 6 * (100vw / 1280))'
            },
            '& button': {
                width: '50%',
                color: '#FFFFFF',
                background: 'linear-gradient(49.94deg, #675EAA 19.03%, #AD66D5 72.72%)',
                borderRadius: '3px'
            }
        }
    }
}));
