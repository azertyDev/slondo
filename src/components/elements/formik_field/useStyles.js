import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& input': {
            background: '#FDFCFF',
            boxShadow: 'none'
        },
        [theme.breakpoints.down('md')]: {
            '& input': {
                padding: '11.5px 7px',
                fontSize: 'calc(14px + 2 * (100vw / 1280))'
            }
        },
        [theme.breakpoints.down('sm')]: {
            height: '100%'
        },
        '& div.helpers-content': {
            display: 'flex',
            '& div.limit-txt > h6': {
                textAlign: 'end'
            }
        },
        '& h6.error-text': {
            [theme.breakpoints.down('xs')]: {
                fontSize: '13px',
                textAlign: 'start'
            }
        }
    }
}));