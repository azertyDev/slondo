import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {},
    userData: {
        padding: '5px 8px',
        height: 'max-content',
        '& .MuiAvatar-root': {
            marginRight: 10
        },
        background: '#F2F2F2',
        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.15)',
        borderRadius: '3px',
        width: '40%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    userPhoneAndData: {
        '& .MuiOutlinedInput-input': {
            padding: '15px 10px'
        },
        '& .MuiFormHelperText-contained': {
            marginLeft: 0,
            marginRight: 0
        }
    },
    toArchive: {
        '& > button': {
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            background:
                'linear-gradient(49.94deg, rgb(103, 94, 170) 19.03%, rgb(173, 102, 213) 72.72%)',
            fontSize: '0.75rem',

            padding: '0',
            '& > h6.MuiTypography-subtitle1': {
                fontSize: '0.875rem',
                color: '#fff'
            }
        }
    },
    submitBtn: {
        width: '100%',
        '& > h6.MuiTypography-subtitle1': {
            color: '#fff !important'
        }
    },
    settingsList: {
        marginTop: 50,
        width: '100%',
        '& .MuiListItem-button': {
            height: 48,
            background: '#F2F2F2',
            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.15)',
            marginBottom: 5,
            borderRadius: '3px',
            textAlign: 'center'
        }
    },
    paper: {
        background: '#F9F9F9',
        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.15)',
        borderRadius: 5
    },
    childTabs: {
        marginBottom: 25,
        boxShadow: 'inset 0px -2px 0px 0px rgb(0 0 0 / 5%)',
        '& .MuiTab-root': {
            minHeight: '36px !important',
            borderBottom: 'none !important',
            background: '#F2F2F2',
            borderRadius: '5px 5px 0px 0px',
            '&:first-child': {
                marginRight: 10
            },
            '&.Mui-selected': {
                background: '#FAFAFA',
                boxShadow: '0px -1px 8px rgba(0, 0, 0, 0.05)'
            }
        },
        '& .MuiTabs-flexContainer': {
            padding: '5px 0 0 5px'
        }
    }
}))
