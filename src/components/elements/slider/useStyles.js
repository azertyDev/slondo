import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    root: {
        '& div.slick-list': {
            borderRadius: '7px',
        },
        '& ul.slick-dots': {
            position: 'initial',
            textAlign: 'left',
        },
        '& ul.slick-thumb li': {
            width: 'auto',
            margin: '0',
            marginRight: '10px',
            '&:last-child': {
                margin: '0'
            }
        },
        '& ul.slick-thumb li a img': {
            height: '70px',
            borderRadius: '5px',
        },
    },
}))
