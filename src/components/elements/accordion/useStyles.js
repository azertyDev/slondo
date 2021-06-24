import {makeStyles} from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    root: {
        '& div.MuiAccordion-root': {
            backgroundColor: '#F7F7F7',
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
            }
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
}));