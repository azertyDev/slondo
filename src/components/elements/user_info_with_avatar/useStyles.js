import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        margin: '20px 0 20px 0 !important',
        '& div.user-info': {
            display: 'flex',
            width: '100%',
            '& > div': {
                '& > div:nth-child(1) > h6.MuiTypography-subtitle1': {
                    // marginBottom: '10px',
                }, '& > div:nth-child(2) > h6.MuiTypography-subtitle1': {
                    // fontSize: '0.75rem',
                },
            },
            '& > div:first-child': {
                display: 'flex',
                alignItems: 'center',
                marginRight: '10px',
            },
            '& > div:last-child': {
                width: '100%',
            },
        },
    },
}))
