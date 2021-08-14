import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        position: 'relative',
        paddingBottom: 10,
        marginBottom: 20,
        '&:after': {
            content: '""',
            width: '87%',
            height: 1,
            background: 'linear-gradient(100deg, #D5D5D5 0%, #fff 100%)',
            position: 'absolute',
            bottom: 0,
            right: 0,
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
            // padding: '5px 0',
            border: '1px solid #2F80ED',
            background: 'none',
            borderRadius: '5px',
            width: '196px',
            height: '26px',
            '& > h6.MuiTypography-subtitle2': {
                color: '#2F80ED'
            }
        }
    },
}));
