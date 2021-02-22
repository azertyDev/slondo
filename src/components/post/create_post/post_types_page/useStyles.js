import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: '30px',
        '& div.MuiGrid-item': {
            '& > a': {
                height: '613px',
                display: 'flex',
                marginBottom: 30,
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderRadius: '25px',
                boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.2)',
                textDecoration: 'none',
                background: 'linear-gradient(49.94deg, #dcf3fc 19.03%, #a9bdf2 72.72%)',
                '& > div.card-bg': {
                    textAlign: 'center',
                    height: '100%',
                    backgroundPosition: 'bottom',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    '& h6.MuiTypography-subtitle1': {
                        marginTop: '35px',
                        fontSize: '1.875rem',
                        color: '#fff',
                        fontWeight: '600',
                        marginBottom: '10px',
                    },
                    '& p.MuiTypography-body2': {
                        fontSize: '1.125rem',
                        color: 'rgba(255, 255, 255, 0.85)',
                        fontWeight: '600',
                        padding: '0 55px',
                    },
                },
                '& > button': {
                    background: '#fff',
                    borderRadius: '100px',
                    width: '76%',
                    margin: '0 55px 35px',
                    boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.15)',
                    border: 'none',
                },
            },
            '& > div.guide': {
                textAlign: 'center',
                '& a': {
                    textDecoration: 'none',
                },
                '& h6.MuiTypography-subtitle2': {
                    fontSize: '1.125rem',
                    marginBottom: 5,
                    textDecoration: 'underline',
                },
                '& h6': {
                    '&.post': {
                        color: '#2F80ED',
                    },
                    '&.auc': {
                        color: theme.palette.primary.secondary,
                    },
                    '&.exauc': {
                        color: '#F2994A',
                    },
                },
                '& h6.MuiTypography-subtitle1': {
                    color: 'rgba(49, 49, 49, 0.6)',
                },
            },
        },
    },
}))
