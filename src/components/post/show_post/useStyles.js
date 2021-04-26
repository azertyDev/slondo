import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& a': {
            textDecoration: 'none'
        },
        [theme.breakpoints.down('md')]: {
            '& div.fixed-bet-safe-deal': {
                borderRadius: 0,
                position: 'fixed',
                zIndex: '100',
                bottom: 0,
                left: 0,
                width: '100%',
                background: '#494A61',
                '& button': {
                    width: '50%',
                    color: '#FFFFFF',
                    background: 'linear-gradient(49.94deg, #675EAA 19.03%, #AD66D5 72.72%)',
                    borderRadius: '3px'
                }
            }
        }
    },
    shareIcon: {
        height: '25px'
    },
    adBanner: {
        marginTop: '55px'
    }
}));
