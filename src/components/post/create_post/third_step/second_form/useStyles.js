import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& button.react-multiple-carousel__arrow--left': {
            left: 'calc(1% + 10px)'
        },
        '& button.react-multiple-carousel__arrow--right': {
            right: 'calc(1% + 10px)'
        },
        '& div.color-preview': {
            width: 'max-content',
            display: 'flex',
            alignItems: 'center',
            padding: '7px 10px',
            background: '#FFFF',
            borderRadius: '100px',
            '& p': {
                marginLeft: 10
            },
            '& div.color': {
                width: '38px',
                height: '38px',
                borderRadius: '100%',
                boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
                [theme.breakpoints.down('sm')]: {
                    width: '32px',
                    height: '32px'
                }
            }
        },
        '& .photos-preview': {
            margin: 0,
            '& img': {
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: 5
            }
        },
        '& div.color-wrapper': {
            display: 'flex!important',
            alignItems: 'center',
            flexDirection: 'column',
            textAlign: 'center',
            cursor: 'pointer',
            '& span, & img.color-img': {
                [theme.breakpoints.down('sm')]: {
                    width: '40px',
                    height: '40px'
                },
                width: '50px',
                height: '50px',
                margin: '10px 0px',
                borderRadius: '50%'
            },
            '& p.MuiTypography-subtitle2': {
                [theme.breakpoints.down('sm')]: {
                    fontSize: '0.75rem'
                }
            }
        },
        '& .selected-color': {
            boxShadow: '0px 0px 5px 5px #ccc'
        }
    }
}));
