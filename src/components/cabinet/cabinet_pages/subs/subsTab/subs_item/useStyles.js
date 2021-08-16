import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        marginBottom: 20,
        padding: 25,
        [theme.breakpoints.down('sm')]: {
            padding: 0
        },
        position: 'relative',
        '&:after': {
            content: '""',
            width: '90%',
            height: 1,
            background: 'linear-gradient(100deg, #D5D5D5 0%, #fff 100%)',
            position: 'absolute',
            bottom: 0,
            right: 0
        },
        '& > div.makeStyles-root-13': {
            margin: 0,
            '& > div > div:last-child ': {
                display: 'flex',
                flexFlow: 'column wrap',
                justifyContent: 'center',
                '& > div': {
                    marginBottom: 8,
                    '&:last-child': {
                        margin: 0
                    }
                }
            }
        },
        '& button': {
            border: '1px solid #2F80ED',
            background: 'none',
            borderRadius: '5px',
            height: '26px',
            alignSelf: 'flex-end',
            '& > h6.MuiTypography-subtitle2': {
                color: '#2F80ED'
            }
        }
    },
}));
