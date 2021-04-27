import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        display: 'flex',
        marginBottom: '30px',
        [theme.breakpoints.down('md')]: {
            '&:before': {
                position: 'absolute',
                left: 0,
                top: '-17px',
                content: '""',
                width: '100%',
                height: '0.8px',
                background: 'linear-gradient(90deg, rgba(243, 243, 243, 0.15) -4.72%, rgba(204, 204, 204, 0.8) 47.81%, rgba(248, 248, 248, 0.15) 104.92%)'
            },
            '&:after': {
                position: 'absolute',
                left: 0,
                bottom: '-17px',
                content: '""',
                width: '100%',
                height: '0.8px',
                background: 'linear-gradient(90deg, rgba(243, 243, 243, 0.15) -4.72%, rgba(204, 204, 204, 0.8) 47.81%, rgba(248, 248, 248, 0.15) 104.92%)'
            }
        },
        '& div.user-info': {
            display: 'flex',
            width: '100%',
            '& > div:first-child': {
                display: 'flex',
                alignItems: 'center',
                marginRight: '10px'
            },
            '& > div:last-child': {
                display: 'flex',
                flexFlow: 'column wrap',
                justifyContent: 'center',
                [theme.breakpoints.down('md')]: {
                    width: '201px'
                },
                '& > h6:first-child': {
                    [theme.breakpoints.down('md')]: {
                        fontSize: 'calc(16px + 4 * (100vw / 1280))',
                        lineHeight: '1.125rem'
                    }
                },
                '& > h6:nth-child(2)': {
                    [theme.breakpoints.down('md')]: {
                        fontSize: 'calc(12px + 4 * (100vw / 1280))',
                        lineHeight: '0.875rem'
                    }
                },
                '& > div > div': {
                    // '&:last-child > h6': {},
                    [theme.breakpoints.down('md')]: {
                        margin: 0
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
    }
}));
