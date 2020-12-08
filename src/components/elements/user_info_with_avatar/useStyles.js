import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        marginBottom: '30px',
        '& div.user-info': {
            display: 'flex',
            width: '100%',
            '& > div:first-child': {
                display: 'flex',
                alignItems: 'center',
                marginRight: '10px',
            },
            '& > div:last-child': {
                display: 'flex',
                flexFlow: 'column wrap',
                justifyContent: 'center',
                '& > div': {
                    marginBottom: '8px',
                }
            },
            '& button': {
                padding: '5px 0',
                border: '1px solid #2F80ED',
                background: 'none',
                borderRadius: '5px',
                '& > h6.MuiTypography-subtitle2': {
                    color: '#2F80ED'
                }
            }
        },
    },
}))
