import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    root: {
        '& > h6.MuiTypography-h6': {
            fontWeight: '600',
            marginLeft: 15,
            marginBottom: 15,
        },
        '& nav.feedback': {
            marginTop: 15,
            '& a': {
                textDecoration: 'none',
            },
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
        '& div.selected': {
            border: '1px solid #AD66D5',
            borderRadius: '5px',
            '& > h6.MuiTypography-subtitle1': {
                backgroundImage:
                    'linear-gradient(49.94deg, #675EAA 19.03%, #AD66D5 72.72%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
            },
        },
    },
    active: {
        border: '1px solid #AD66D5',
        '& .MuiTypography-subtitle1': {
            color: theme.palette.primary.secondary,
        },
    },

}))
