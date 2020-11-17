import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
    root: {
        width: '25%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > h6.MuiTypography-subtitle1': {
            fontWeight: '600',
            marginBottom: '10px',
        },
        '& > div.MuiPaper-rounded': {
            background: '#FFF',
            boxShadow: '0px 0px 8px rgba(132, 92, 171, 0.2)',
            borderRadius: '10px',
            padding: '40px',
            display: 'flex',
            flexWrap: 'wrap',
            alignContent: 'space-between',
            '& > a': {
                display: 'flex',
                alignItems: 'center',
                marginBottom: '20px',
                textDecoration: 'none',
                '& > svg': {
                    marginRight: '10px',
                },
                '&:last-child': {
                    margin: '0',
                },
            },


        },
    },
}))
