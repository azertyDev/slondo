import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        padding: '15px',
        borderRadius: '10px',
        backgroundColor: '#F3F2F7',
        [theme.breakpoints.down('sm')]: {
            padding: 0,
            borderRadius: 0,
            marginBottom: 10,
            backgroundColor: 'inherit'
        },
        '& form': {
            width: '100%'
        },
        '& div.main-params': {
            marginBottom: '20px'
        },
        '& div.add-params': {
            width: 'calc(100% + 8px)'
        },
        '& div.filter-btns': {
            whiteSpace: 'nowrap',
            overflowX: 'scroll',
            MsOverflowStyle: 'none',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
                display: 'none'
            },
            '& div.MuiFormControl-root, button': {
                marginRight: 10
            },
            '& div.MuiFormControl-root': {
                minWidth: 'auto',
                '& div.MuiInputBase-root': {
                    width: 'max-content'
                }
            },
            '& button': {
                borderRadius: 5,
                '&.filter-btn': {
                    padding: 10,
                    '& p': {
                        fontSize: '1rem',
                        color: '#fff'
                    },
                    '& svg': {
                        marginLeft: 10
                    }
                }
            }
        }
    },
    actionButtons: {
        width: '100%',
        display: 'flex',
        justifyContent: props => props.isXs ? 'center' : 'flex-end',
        marginTop: '20px',
        '& button': {
            width: props => props.isXs ? '100px' : '140px',
            '&:not(:last-child)': {
                marginRight: 20
            }
        }
    },
    select: {
        width: '100%',
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(0, 0, 0, 0.23)',
            borderWidth: 1
        },
        '& div.MuiSelect-select': {
            display: 'flex',
            alignItems: 'center',
            height: '23px',
            fontSize: '1rem',
            padding: '7.5px 30px 7.5px 10px',
            background: '#FDFCFF',
            color: '#4e4e4e',
            [theme.breakpoints.down('sm')]: {
                padding: '6.5px 30px 6.5px 10px'
            }
        }
    },
    paramsBtn: {
        width: '100%',
        height: '38px',
        display: 'flex',
        padding: '9px 10px',
        background: '#FDFCFF',
        justifyContent: 'flex-start',
        border: '1px solid rgba(0, 0, 0, 0.23)',
        '& p': {
            fontSize: '1rem'
        },
        [theme.breakpoints.down('sm')]: {
            width: 'auto',
            height: 'auto'
        }
    },
    drawer: {
        '& .MuiDrawer-paper': {
            overflowX: 'hidden',
            backgroundColor: '#F8F7FA',
        }
    }
}));