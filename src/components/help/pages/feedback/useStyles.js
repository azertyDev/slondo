import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    root: {
        '& > h6.MuiTypography-h6': {
            marginBottom: 10,
        },
        '& > h6.MuiTypography-subtitle1': {
            fontSize: '1.125rem',
            color: 'rgba(49, 49, 49, 0.6)',
            marginBottom: 30,
            [theme.breakpoints.down('xs')]: {
                fontSize: 'initial'
            }
        },
        '& > div.feedback-form': {
            '& > form > div': {
                '&.upload': {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap'
                },
                '& div.MuiFormControl-root': {
                    marginBottom: 20,
                    [theme.breakpoints.down('xs')]: {
                        marginBottom: 15
                    }
                },
            },
        },
        '& label.file-upload': {
            display: 'flex',
            flexDirection: 'column',
        },
    },
}))
