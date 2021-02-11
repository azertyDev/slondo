import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& > h6.MuiTypography-h6': {
            fontWeight: '600',
            marginLeft: 15,
            marginBottom: 15,
        },
        '& nav.feedback': {
            marginTop: 15,
        },
    },
    helpMenu: {
        width: '100%',
        background: '#F2F2F2',
        borderRadius: '10px',
        padding: '15px',
        '& div.MuiListItem-button': {
            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
            borderRadius: '5px',
            height: '38px',
            marginBottom: 5,
            backgroundColor: '#fff',
            '&:target': {
                background: 'red',
            },
            '&:last-child': {
                margin: 0,
            },
        },
        '& div.MuiCollapse-wrapperInner': {
            '& div.MuiList-root': {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                '& div.MuiListItem-button': {
                    width: '90%',
                    height: '28px',
                },
            },
        },
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    active: {
        border: '1px solid #AD66D5',
    },
    searchInput: {
        width: 268,
        boxShadow: '0px 1px 10px rgba(0, 0, 0, 0.1)',
        marginBottom: 10,
        borderRadius: 10,
        '& div.MuiInputBase-formControl': {
            height: 39,
            borderRadius: 10,
            paddingLeft: 30,
            '& input': {
                padding: 10,
                paddingLeft: 20,
            },
            '& fieldset.MuiOutlinedInput-notchedOutline': {
                border: 'none',
            },
        },
    },
}));
