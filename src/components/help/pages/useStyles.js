import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& ol': {
            listStyle: 'none',
            counterReset: 'li',
            [theme.breakpoints.down('xs')]: {
                padding: 0
            },
            '& p': {
                display: 'inline'
            }
        },
        '& li:before': {
            counterIncrement: 'li',
            content: 'counters(li, ".") ". "',
            [theme.breakpoints.down('xs')]: {
                fontSize: '0.75rem'
            },
            fontSize: '1rem',
            color: '#838383'
        },
        '& .title': {
            [theme.breakpoints.down('xs')]: {
                fontSize: '0.875rem'
            },
            fontWeight: 600
        },
        '& .MuiTypography-root': {
            lineHeight: 'normal',
            [theme.breakpoints.down('xs')]: {
                fontFamily: 'Roboto'
            }
        },
        '& .image': {
            width: '100%'
        },
        '& .image-wrapper': {
            border: '1px solid #E0E0E0',
            borderRadius: '10px'
        },
        '& .term': {
            '&:before': {
                content: '"•"',
                marginRight: 5
            }
        },
        '& .color-silver': {
            color: '#838383',
            [theme.breakpoints.down('xs')]: {
                fontSize: '0.75rem'
            }
        },
        '& a.link': {
            textDecoration: 'none',
            color: theme.palette.common.activeTab
        },
        '& .mb-18': {
            marginBottom: '18px'
        },
        '& .bg-color': {
            backgroundColor: '#F7F7F7'
        },
        '& .color-orange': {
            color: '#F2994A'
        },
        '& .fs-18': {
            fontSize: '18px'
        }
    }
}));
