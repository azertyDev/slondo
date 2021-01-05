import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        marginTop: '20px',
        '& > div.price': {
            marginBottom: 10,
            '& > h4': {
                '& span': {
                    fontWeight: '600',
                    fontSize: 36,
                },
                textAlign: 'end',
                fontSize: 25,
            },
        },
        '& div.social-block': {
            width: '100%',
        },
    }
}));
