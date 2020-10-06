import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    root: {
        textOverflow: 'ellipsis',
        '& div.row': {
            marginBottom: '10px',
        },
    },
    title: { margin: '30px 0' },
    subTitle: { margin: '20px 0' },
    buttons: {
        marginTop: '50px'
    }
}))
