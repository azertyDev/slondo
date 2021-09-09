import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        position: ({isScrollBreak}) => isScrollBreak ? 'fixed' : 'unset',
        top: ({isScrollBreak}) => isScrollBreak && '63px',
        width: ({isScrollBreak, isXlUp}) => isScrollBreak ? isXlUp ? '308px' : '244px' : '100%',
        '& > div.MuiPaper-rounded': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#F2F2F2',
            backgroundRepeat: 'no-repeat',
            borderRadius: '10px',
            '& > h5.MuiTypography-h5': {
                color: '#7DBCF6',
                fontWeight: '700'
            }
        }
    }
}));
