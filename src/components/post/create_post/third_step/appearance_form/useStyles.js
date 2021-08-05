import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& div.color-preview': {
            width: 'min-content',
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
            '& span': {
                width: '50px',
                height: '50px',
                margin: '10px 0px',
                borderRadius: '50%'
            }
        },
        '& span.selected-color': {
            boxShadow: '0px 0px 5px 5px #ccc'
        }
    }
}));
