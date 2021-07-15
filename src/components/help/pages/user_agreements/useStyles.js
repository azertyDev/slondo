import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    root: {
        '& h6': {
            lineHeight: '22px',
        },
        '& .paragraphName': {
            fontSize: '1.125rem',
            marginBottom: 20,
            textTransform: 'uppercase',
        },
        '& .preface': {
            marginBottom: 40,
        },

    },
    title: {
        marginBottom: 10,
    },
    searchInput: {
        boxShadow: '0px 1px 10px rgba(0, 0, 0, 0.1)',
        marginBottom: 20,
        marginTop: 35,
        borderRadius: 10,
        '& div.MuiInputBase-formControl': {
            height: 39,
            borderRadius: 10,
            paddingLeft: 30,
            background: '#fff',
            '& input': {
                padding: 10,
                paddingLeft: 20,
                borderRadius: 10,
            },
            // '& fieldset.MuiOutlinedInput-notchedOutline': {
            //     border: 'none',
            // },
        },
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
