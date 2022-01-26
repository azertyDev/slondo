import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& > div.header-wrapper': {
            paddingTop: '10px',
            [theme.breakpoints.down('md')]: {
                paddingTop: '0'
            },
            '& div.user-location': {
                display: 'flex',
                alignItems: 'center',
                '& > h6.MuiTypography-subtitle1': {
                    cursor: 'pointer',
                    fontWeight: 500,
                    color: '#838383',
                    [theme.breakpoints.down('xs')]: {
                        fontSize: '12px',
                        letterSpacing: '.4px'
                    },
                    [theme.breakpoints.up('md')]: {
                        borderBottom: '1px solid #838383'
                    }
                },
                '& > svg': {
                    marginRight: '12px',
                    [theme.breakpoints.down('md')]: {
                        marginRight: '5px'
                    }
                }
            }
        }
    },
    modalDialog: {
        '& > div:first-child': {
            [theme.breakpoints.down('md')]: {
                backgroundColor: `${theme.palette.primary.white}!important`
            }
        }
    }
}));
