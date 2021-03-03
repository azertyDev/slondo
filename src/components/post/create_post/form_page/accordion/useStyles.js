import {makeStyles} from '@material-ui/core/styles'


export const useStyles = makeStyles((theme) => ({
    root: {
        '& div.MuiAccordionSummary-root': {
            '& div.header-preview': {
                display: 'flex',
                alignItems: 'center',
                marginLeft: '20px',
                '& > span': {
                    color: theme.palette.primary.createAdBtnColor,
                    textDecoration: 'underline',
                    cursor: 'pointer'
                }
            },
            '&:hover:not(.Mui-disabled)': {
                cursor: 'default'
            }
        },
        '& div.MuiAccordionDetails-root': {
            display: 'block',
            '& div.acc-content': {
                display: 'flex',
                flexDirection: 'column',
                marginBottom: '30px'
            }
        },
        '& div.next-button-wrapper': {
            display: 'flex',
            justifyContent: 'flex-end',
            marginBottom: '15px',
            [theme.breakpoints.down('md')]: {
                marginTop: '30px',
            },
            [theme.breakpoints.down('sm')]: {
                marginTop: '25px',
            },
            '& button.nav-button': {
                width: '250px',
                [theme.breakpoints.down('sm')]: {
                    padding: '10px 50px'
                },
                '& > p': {
                    color: theme.palette.primary.white
                }
            }
        }
    }
}));