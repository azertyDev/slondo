import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: 100,
        '& header.MuiAppBar-root': {
            background: '#fafafa',
            padding: '10px 0'
        },
        '& div.preview': {
            padding: '18px',
            [theme.breakpoints.down('sm')]: {
                background: 'none'
            }
        },
        '& div.paper': {
            background: '#fff',
            marginBottom: 30,
            borderRadius: 10,
            padding: '18px 18px 0 18px',
            [theme.breakpoints.down('sm')]: {
                '& h3': {
                    fontSize: '1.125rem'
                },
                '& h5': {
                    fontSize: '0.875rem'
                },
                '& img': {
                    width: 'inherit'
                }
            }
        },
        '& .tabs': {
            '& .MuiTypography-subtitle1': {
                borderBottom: '1px solid currentColor'
            },
            '& .Mui-selected': {
                background: '#FFFFFF',
                borderRadius: '100px',
                '& .MuiTypography-subtitle1': {
                    borderBottom: 'none',
                    color: '#845CAB'
                }
            }
        },
        '& .fw600': {
            fontWeight: '600'
        }
    },
    link: {
        textDecoration: 'none',
        color: theme.palette.common.activeTab,
        display: 'inline-block',
        '&:hover': {
            textDecoration: 'underline'
        },
        '& p': {
            color: theme.palette.common.activeTab
        }
    }
}))
