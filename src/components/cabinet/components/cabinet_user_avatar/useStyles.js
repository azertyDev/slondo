import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#F2F2F2',
        padding: '15px',
        borderRadius: '10px',
        marginBottom: '10px',
        [theme.breakpoints.down('xs')]: {
            borderRadius: 0
        },
        '& div.user-info-wrapper': {
            marginBottom: '15px'
        },
        '&:last-child': {
            marginBottom: 0
        },
        '& .MuiBadge-root': {
            width: '100%'
        },
        '& .MuiListItem-root': {
            justifyContent: 'center!important',
            borderRadius: '5px!important',
            background: '#fff!important',
            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)!important',
            paddingTop: '7px',
            paddingBottom: '7px',
            '& span': {
                textAlign: 'center'
            }
        }
    }
}));
