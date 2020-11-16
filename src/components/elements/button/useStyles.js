import makeStyles from '@material-ui/core/styles/makeStyles'


export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        color: (props) => props.color === 'primary' ? theme.palette.primary.createAdBtnColor : theme.palette.primary.black,
        padding: '12px',
        background: (props) => props.color === 'primary' ? 'linear-gradient(49.94deg, #675EAA 19.03%, #AD66D5 72.72%)' : props.color === 'secondary' ? 'none' : theme.palette.primary.secondary,
        boxShadow: (props) => props.color === 'primary' ? 'none' : '0px 0px 8px 0px #845CAB 20%',
        borderRadius: '3px',
        border: '1px solid',
        borderColor: (props) => props.color === 'primary' ? 'transparent' : props.color === 'secondary' ? '#845CAB' : 'transparent',
        '& > h6.MuiTypography-subtitle1': {
            color: (props) => props.color === 'primary' ? theme.palette.primary.white : props.color === 'secondary' ? theme.palette.primary.secondary : theme.palette.primary.black,
        }
    },
}))
