import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '20px',
        [theme.breakpoints.down('md')]: {
            marginTop: 0
        },
        '& > div.price': {
            marginBottom: 10,
            '& > h4': {
                '& span': {
                    fontWeight: '600',
                    fontSize: 36,
                    [theme.breakpoints.down('lg')]: {
                        fontSize: '30px'
                    }
                },
                textAlign: 'end',
                fontSize: 25
            }
        },
        '& div.social-block': {
            width: '100%'
        }
    }
}));