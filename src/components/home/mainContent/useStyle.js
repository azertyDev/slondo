import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '20px',
        '& div.all-ads': {
            marginBottom: '30px',
        },
        '& div.cards': {
            position: 'relative',
        },

        '& div.all-ads div.MuiGrid-justify-xs-flex-end': {
            display: 'flex',
        },
        '& div.all-ads h4': {
            [theme.breakpoints.between('sm', 'md')]: {
                fontSize: '1.9rem',
            },
            [theme.breakpoints.up('md')]: {
                fontSize: '2rem',
            },
        },

        '& div.default-form': {
            width: '65%',
            border: 'none',
        },

        '& div.MuiInput-underline:before': {
            borderBottom: 'none',
        },
        '& div.MuiInput-underline:after': {
            borderBottom: 'none',
        },
        '& div.MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottom: 'none',
        },

        '& form.default-form': {
            width: '65%',
        },
        '& form.default-form div.MuiTextField-root': {
            width: '100%',
        },

        '& div.bottom-line': {
            display: 'flex',
        },
        '& div.bottom-line div': {
            marginTop: '50px',
            borderBottom: '1px solid #ccc',
            width: '100%',
        },

        '& div.main-content div.line': {
            paddingBottom: '50px',
            borderBottom: '1px solid #ccc',
        },

        '& div.cards-container div.line': {
            position: 'relative',
            borderBottom: '1px solid #ccc',
            paddingBottom: '50px',
        },

        '& div.cards-container': {
            marginTop: '20px',
        },

        '& .MuiTab-root': {
            fontSize: '1rem',
            fontWeight: '600',
        },

        '& div.tabs div.MuiTabs-flexContainer': {
            justifyContent: 'space-around',
        },
        '& div.show-more-button': {
            display: 'flex',
            justifyContent: 'center'
        }
    },
}))
