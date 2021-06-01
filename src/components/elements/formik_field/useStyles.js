import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '72px',
        [theme.breakpoints.down('md')]: {
            height: '100%',
            '& input': {
                padding: '11.5px 14px',
                fontSize: 'calc(14px + 2 * (100vw / 1280))'
            }
        },
        [theme.breakpoints.down('sm')]: {
            '& div.label-wrapper > h6 > strong': {
                fontWeight: '400'
            },
            '& div.label-wrapper': {
                marginBottom: '6px'
            },
            '&:first-child': {
                marginBottom: '30px'
            },
            '&:nth-child(2)': {
                marginBottom: '6px'
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