import {makeStyles} from '@material-ui/core/styles'


export const useStyles = makeStyles((theme) => ({
    root: {
        '& div.MuiAccordionSummary-root:hover:not(.Mui-disabled)': {
            cursor: 'default'
        },
        '& div.MuiAccordionDetails-root': {
            display: 'block',
            '& div.acc-content': {
                display: 'flex',
                flexDirection: 'column'
            }
        },
        '& div.next-button-wrapper': {
            display: 'flex',
            justifyContent: 'flex-end',
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
}));