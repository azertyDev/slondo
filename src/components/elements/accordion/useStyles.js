import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#F3F2F7',
        borderRadius: '10px!important',
        '& .MuiAccordionSummary-content': {
            display: 'flex',
            alignItems: 'center',
            margin: 0,
            '& svg': {
                marginRight: '10px'
            }
        },
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
        },
        '& .nav-button': {
            width: '262px',
            padding: 7,
            background: theme.palette.primary.createAdBtnColor,
            [theme.breakpoints.down('xs')]: {
                marginTop: '20px',
                width: '100%'
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
        background: '#FDFCFF',
        borderRadius: '5px'
    }
}));