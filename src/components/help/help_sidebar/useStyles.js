import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    root: {
        '& > h6.MuiTypography-h6': {
            fontWeight: '600',
            marginLeft: 15,
            marginBottom: 15
        },
        '& nav.feedback': {
            marginTop: 15,
            '& a': {
                textDecoration: 'none'
            }
        }

    },
    searchInput: {
        boxShadow: '0px 1px 10px rgba(0, 0, 0, 0.1)',
        marginBottom: 20,
        borderRadius: 10,
        '& div.MuiInputBase-formControl': {
            height: 39,
            borderRadius: 10,
            paddingLeft: 20,
            background: '#fff',
            '& input': {
                padding: 10,
                borderRadius: 10
            }
            // '& fieldset.MuiOutlinedInput-notchedOutline': {
            //     border: 'none',
            // },
        },
        '& fieldset': {
            border: 'none'
        }
    },
    helpMenu: {
        width: '100%',
        background: '#F2F2F2',
        borderRadius: '10px',
        padding: '15px',
        '& .Mui-selected': {
            border: '1px solid #AD66D5',
            '& .MuiTypography-subtitle1': {
                color: theme.palette.primary.secondary
            }
        },
        '&:not(:last-child)': {
            marginBottom: 20
        },
        '& div.MuiListItem-button': {
            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
            borderRadius: '5px',
            height: '38px',
            marginBottom: 5,
            backgroundColor: '#fff',
            '&:target': {
                background: 'red'
            },
            '&:last-child': {
                margin: 0,
            },
        },
        '& div.MuiCollapse-container': {
            '& div.MuiList-root': {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                marginBottom: '15px',
                '& div.MuiListItem-button': {
                    width: '90%',
                    height: 'auto',
                    padding: '5px 16px'
                }
            }
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
