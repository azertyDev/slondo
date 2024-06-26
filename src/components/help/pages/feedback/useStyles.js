import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTypography-root': {
            [theme.breakpoints.down('xs')]: {
                fontFamily: 'Roboto'
            }
        },
        '& > h6.MuiTypography-h6': {
            marginBottom: 10,
            [theme.breakpoints.down('xs')]: {
                fontSize: '1rem'
            }
        },
        '& > h6.MuiTypography-subtitle1': {
            fontSize: '1.125rem',
            color: 'rgba(49, 49, 49, 0.6)',
            marginBottom: 30,
            [theme.breakpoints.down('xs')]: {
                color: 'inherit',
                lineHeight: '14px',
                fontSize: '0.75rem'
            }
        },
        '& > div.feedback-form': {
            '& input[type="file"]': {
                display: 'none'
            },
            '& .file-limit': {
                color: '#838383',
                fontSize: '0.75rem',
                marginTop: 5
            },
            '& label': {
                '& .MuiTypography-subtitle1': {
                    [theme.breakpoints.down('xs')]: {
                        fontSize: '0.875rem'
                    }
                }
            },
            '& button': {
                width: '100%'
            },
            '& div.img-wrapper': {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '& > button': {
                    width: '120px',
                    alignSelf: 'flex-end',
                    marginTop: 16,
                    [theme.breakpoints.down('xs')]: {
                        width: '100%'
                    }
                },
                '& img.file': {
                    height: 250,
                    objectFit: 'contain',
                    [theme.breakpoints.down('md')]: {
                        height: 200
                    },
                    [theme.breakpoints.down('xs')]: {
                        height: 160
                    }
                }
            },
            '& > form > div': {
                marginBottom: '20px'
            }
        },
    },
    icon: {
        fontSize: '1.5rem!important'
    },
    button: {
        display: 'flex',
        borderRadius: '5px',
        background: '#F2F2F2',
        boxShadow: 'none',
        padding: '7.5px 8px'
    }
}));
