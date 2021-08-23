import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        flexFlow: 'column nowrap',
        '& main': {
            flex: '1 1 0'
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
                        color: '#fff'
                    },
                    '& svg': {
                        marginLeft: 10
                    }
                },
                '&.geo-btn': {
                    padding: '9px 10px',
                    background: '#f7f7f7',
                    border: '1px solid rgba(0, 0, 0, 0.23)',
                    '& p': {
                        color: '#838383'
                    }
                }
            }
        },
        '& div.layout-container': {
            position: 'relative',
            paddingTop: '48px',
            [theme.breakpoints.down('xs')]: {
                padding: '10px'
            }
        }
    },
    select: {
        background: '#f8f8f8',
        height: 'auto',
        padding: '6.5px 30px 6.5px 10px',
        fontSize: '12px',
        color: '#838383',
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#f8f8f8'
        }
    }
}))
