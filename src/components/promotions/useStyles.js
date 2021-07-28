import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTypography-root': {
            lineHeight: 'normal'
        },
        '& button.show-more-button': {
            background: 'none',
            padding: '10px 0',
            display: 'inline-block',
            width: 'fit-content',
            [theme.breakpoints.down('md')]: {
                width: 'auto'
            },
            '& > h6.MuiTypography-subtitle1': {
                color: '#675EAA',
                '& > svg': {
                    marginLeft: '9px'
                }
            }
        }
    },
    card: {
        background: '#FFFFFF',
        boxShadow: '0px 2px 25px rgba(0, 0, 0, 0.1)',
        borderRadius: '16px',
        '& #content': {
            '& h2': {
                fontWeight: 600,
                [theme.breakpoints.down('xs')]: {
                    fontSize: '1.2rem',
                    fontWeight: 500
                }
            },
            minHeight: ({resize}) => resize ? 'auto' : 250
        }
    },
    media: {
        height: ({resize}) => resize ? 300 : '100%'
    },
    hidden: {
        display: '-webkit-box',
        WebkitLineClamp: 5,
        overflow: 'hidden',
        WebkitBoxOrient: 'vertical'
    }
}))
