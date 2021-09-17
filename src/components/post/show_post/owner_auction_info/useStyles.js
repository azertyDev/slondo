import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '31px',
        [theme.breakpoints.down('md')]: {
            marginTop: 0,
            marginBottom: '90px'
        },
        '& > div.price': {
            marginBottom: '10px',
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
