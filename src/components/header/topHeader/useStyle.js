import {makeStyles} from '@material-ui/core/styles'


export const useStyles = makeStyles((theme) => ({
    root: {
        '& div.location': {
            display: 'flex',
            alignItems: 'center',
            fontSize: '14px',
            '& h6': {
                [theme.breakpoints.down('lg')]: {
                    fontSize: '.85rem',
                },
                [theme.breakpoints.up('lg')]: {
                    fontSize: '1rem',
                }
            }
        },
        '& img.pl-icon': {
            width: '32px',
            height: '23px',
        },
        '& h6.select-region': {
            textDecoration: 'underline'
        },
        '& div.social-icons > a': {
            display: 'flex',
            alignItems: 'center',
            marginRight: '12px',
            '& > img': {
                width: '35px',
            }
        },
        '& div.multiple-content': {
            display: 'flex',
            flexFlow: 'row wrap',
            '& a': {
                display: 'flex',
                textDecoration: 'none',
                alignItems: 'center',
                color: '#000',
            }
        },
        '& div.multiple-content > a > img': {
            textDecoration: 'none',
            height: '15px',
            marginRight: '10px',
        },
        // ------------> adaptive <--------------- //
        '& div.top-header-logo > a > img': {
            height: '50px',
            width: '140px'
        },
        '& div.avatar-icon > img': {
            height: '35px',
            width: '35px'
        }
    }
}))
