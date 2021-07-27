import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    root: {
        '& h6': {
            lineHeight: '22px'
        },
        '& .paragraphName': {
            fontSize: '1.125rem',
            marginBottom: 20,
            textTransform: 'uppercase'
        },
        '& .preface': {
            marginBottom: 20
        },
        '& .title': {
            marginBottom: 10,
            fontWeight: 600
        }
    },
    preface: {
        marginBottom: 40,
    },
    list: {
        padding: 0,
        margin: 0,
        listStyle: 'none',
        '& li': {
            marginBottom: 20,
        },
        '& ul.subList': {
            marginTop: 10,
            '& li': {
                listStyleImage: 'url(/img/list-item-img.png)',
            },
        },
        '& .mb': {
            marginBottom: 20,
        },
    },
}))
