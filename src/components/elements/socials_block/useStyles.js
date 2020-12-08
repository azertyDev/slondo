import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
    root: {
        width: '25%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '30px',
        '& > h6.MuiTypography-subtitle1': {
            fontWeight: 600,
            marginBottom: '10px',
        },
        '& div': {
            '& > a': {
                marginRight: '20px',
                '&:last-child': {
                    margin: 0,
                },
            },
        },
    },
}))
