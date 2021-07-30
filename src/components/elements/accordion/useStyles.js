import {makeStyles} from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    root: {
        '& div.MuiAccordion-root': {
            backgroundColor: '#F7F7F7',
            '& div.MuiAccordionSummary-root': {
                '& .header-preview': {
                    display: 'flex',
                    alignItems: 'center',
                    marginLeft: '20px',
                    color: theme.palette.primary.createAdBtnColor,
                    textDecoration: 'underline',
                    cursor: 'pointer'
                },
                '&:hover:not(.Mui-disabled)': {
                    cursor: 'default'
                }
            },
            '& div.MuiAccordionSummary-root.Mui-expanded': {
                minHeight: 0
            },
            '& div': {
                '&.MuiAccordionDetails-root, &.MuiAccordionSummary-root': {
                    padding: 15
                }
            }
        },
        '& button.nav-button': {
            width: '250px',
            padding: 7,
            background: theme.palette.primary.createAdBtnColor,
            [theme.breakpoints.down('xs')]: {
                marginTop: '20px',
            },
            '& > p': {
                [theme.breakpoints.down('xs')]: {
                    fontSize: '1rem',
                    marginRight: 10
                },
                marginRight: 15,
                fontSize: '1.125rem',
                color: theme.palette.primary.white
            }
        }
    },
    accordionTitle: {
        background: '#FFFFFF',
        borderRadius: '5px'
    }
}));