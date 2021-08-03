import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& div.auction-params': {
            display: 'flex',
            alignItems: 'center'
        },
        '& div.post-options': {
            '& svg.MuiSvgIcon-root': {
                fill: '#9a64d0'
            },
            '& > div': {
                display: 'flex',
                alignItems: 'center'
            },
            margin: '11px 0'
        }
    },
    link: {
        marginTop: 5,
        float: 'right',
        textDecoration: 'none',
        display: 'inline-block',
        '& p': {
            textAlign: 'end',
            color: '#675EAA'
        },
        '&:hover': {
            textDecoration: 'underline'
        }
    },
    serviceItem: {
        padding: '8px 15px',
        display: 'flex',
        backgroundColor: '#fff',
        borderRadius: '100px',
        width: 'max-content',
        margin: '2px 10px 2px 0',
        '& svg': {
            marginRight: 10
        }
    }
}));