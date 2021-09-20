import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        width: '100%',
        '& > div:first-child': {
            marginRight: '10px'
        },
        '& > div.user-info': {
            display: 'flex',
            flexFlow: 'column wrap',
            justifyContent: 'space-around',
            '& > h6:first-child': {
                wordBreak: 'break-word',
                [theme.breakpoints.down('md')]: {
                    fontSize: 'calc(16px + 4 * (100vw / 1280))',
                    lineHeight: '1.125rem'
                }
            },
            '& > div > div': {
                [theme.breakpoints.down('md')]: {
                    margin: 0
                }
            },
            '& a': {
                display: 'inline-block',
                textDecoration: 'none',
                '&:hover': {
                    textDecoration: 'underline',
                    textDecorationColor: '#000'
                }
            }
        },
        '& button': {
            padding: '5px 0',
            border: '1px solid #2F80ED',
            background: 'none',
            borderRadius: '5px',
            [theme.breakpoints.down('md')]: {
                border: '1px solid #D5D5D5;'
            },
            '& > h6.MuiTypography-subtitle2': {
                color: '#2F80ED',
                [theme.breakpoints.down('md')]: {
                    color: '#4E4E4E'
                }
            }
        }
    }
}));
