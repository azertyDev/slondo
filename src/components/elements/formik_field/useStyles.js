import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '72px',
        '& div.label-wrapper > h6': {
            marginBottom: '5px'
        },
        [theme.breakpoints.down('md')]: {
            '& input': {
                padding: '11.5px 14px',
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
        }
    }
}));