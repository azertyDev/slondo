import {makeStyles} from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    root: {
        '& input.MuiOutlinedInput-input': {
            padding: '10px 15px'
        },
        '& svg.MuiSvgIcon-root': {
            fill: '#9a64d0'
        },
        '& div.header-wrapper': {
            margin: '20px 0 50px'
        },
        '& div.post-params-wrapper': {
            marginTop: '10px'
        },
        '& div.location-wrapper': {
            maxWidth: '500px'
        },
        '& div.next-button-wrapper': {
            display: 'flex',
            justifyContent: 'center',
            margin: '50px 0',
            [theme.breakpoints.down('md')]: {
                marginTop: '30px',
            },
            [theme.breakpoints.down('sm')]: {
                marginTop: '25px',
            },
            '& button.nav-button': {
                width: '250px',
                margin: '0 5px',
                [theme.breakpoints.down('sm')]: {
                    padding: '10px 50px'
                },
                '& > p': {
                    color: theme.palette.primary.white
                }
            }
        }
    }
}))
