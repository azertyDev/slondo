import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '24px',
        height: '24px',
        padding: 0,
        zIndex: '1000',
        [theme.breakpoints.down('xs')]: {
            top: '15px',
            right: '15px',
            width: '17px',
            height: '17px'
        },
        '& path': {
            fill: '#494A61'
        },
        '&:hover': {
            backgroundColor: '#EB5757',
            '& path': {
                fill: '#fff'
            }
        }
    }
}));