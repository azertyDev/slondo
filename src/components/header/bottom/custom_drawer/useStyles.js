import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    drawerList: {
        width: 305,
        padding: '20px 10px',
        '& > ul': {
            '& > div.MuiListItem-button': {
                height: 38,
                cursor: 'pointer',
                marginBottom: 5,
                padding: '0 25px',
                '& > h6.MuiTypography-subtitle1': {
                    fontSize: '1.125rem',
                },
                '& > div.icon': {
                    width: '15%',
                    '& > svg': {
                        marginRight: '15px',
                        width: '24px',
                        height: '24px',
                    },
                },
                '&:hover': {
                    background: 'linear-gradient(49.94deg, #675EAA 19.03%, #AD66D5 72.72%)',
                    borderRadius: 100,
                    '& > h6.MuiTypography-subtitle1': {
                        color: '#fff',
                    },
                    '& svg': {
                        '& > path': {
                            fill: '#fff',
                        },
                    },
                },
                '&.all-ctgrs': {
                    '& > h6.MuiTypography-subtitle1': {
                        fontWeight: 600,
                    },
                },
            },
        },
    },
    searchInput: {
        boxShadow: '0px 1px 10px rgba(0, 0, 0, 0.1)',
        marginBottom: 10,
        borderRadius: 100,
        width: '100%',
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
}))
