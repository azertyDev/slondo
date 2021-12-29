import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#EEEDF2',
        padding: '15px',
        borderRadius: '10px',
        marginBottom: '10px',
        '& div.user-info-wrapper': {
            marginBottom: '15px'
        },
        '& div.user-balance': {
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            marginBottom: '8px',
            '& > svg': {
                margin: '0 10px 0 4px'
            },
            '& > div': {
                '& > h6': {
                    marginRight: '5px'
                },
                '& > p': {
                    fontWeight: 600
                }
            }
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
});
