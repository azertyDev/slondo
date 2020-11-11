import makeStyles from '@material-ui/core/styles/makeStyles'


export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        color: (props) => props.color === 'primary' ? theme.palette.primary.createAdBtnColor : theme.palette.primary.black,
        padding: '12px',
        background: (props) => props.color === 'primary' ? 'linear-gradient(49.94deg, #675EAA 19.03%, #AD66D5 72.72%)' : theme.palette.primary.main,
        boxShadow: (props) => props.color === 'primary' ? 'none' : '0px 0px 8px 0px #845CAB 20%',
        borderRadius: '5px'
    },
}))
