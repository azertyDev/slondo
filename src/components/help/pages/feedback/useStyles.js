import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& > h6.MuiTypography-h6': {
            marginBottom: 10
        },
        '& > h6.MuiTypography-subtitle1': {
            fontSize: '1.125rem',
            color: 'rgba(49, 49, 49, 0.6)',
            marginBottom: 30,
            [theme.breakpoints.down('xs')]: {
                fontSize: 'initial'
            }
        },
        '& > div.feedback-form': {
            '& input[type="file"]': {
                display: 'none'
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
                    marginTop: 16
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
