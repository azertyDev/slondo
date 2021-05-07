import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '72px',
        [theme.breakpoints.down('md')]: {
            height: '100%',
            width: '97%',
            '& input': {
                padding: '11.5px 14px',
                fontSize: 'calc(14px + 2 * (100vw / 1280))'
            }
        },
        '& div.helpers-content': {
            display: 'flex',
            '& div.limit-txt > h6': {
                textAlign: 'end'
            }
        }
    }
}));