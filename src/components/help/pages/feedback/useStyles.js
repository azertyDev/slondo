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
            '& div.upload-submit': {
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'column',
                '& div.img-wrapper': {
                    display: 'flex',
                    flexDirection: 'column',
                    '& > button': {
                        width: '90px'
                    },
                    '& img.file': {
                        width: '290px',
                        height: '130px',
                        objectFit: 'cover'
                    }
                }
            },
            '& > form > div': {
                marginBottom: '20px'
            }
        },
        '& label.file-upload': {
            display: 'flex',
            flexDirection: 'column'
        },
        '& div.submit-wrapper': {
            display: 'flex',
            justifyContent: 'flex-end'
        }
    }
}));
