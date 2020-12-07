import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& > div > div > div': {
            height: '613px',
            '& > div.advCard': {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: 'inherit',
                borderRadius: '25px',
                boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.2)',
                '& > div': {
                    textAlign: 'center',
                    marginTop: '35px',
                    '& h6.MuiTypography-subtitle1': {
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
                '& button': {
                    backgroundColor: '#fff',
                    borderRadius: '100px',
                    width: '76%',
                    margin: '0 55px 35px',
                    boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.15)',
                    border: 'none',
                },
            },
            '&:first-child': {
                '& > div.advCard': {
                    backgroundImage: (props) => `url(${props.urls[0]})`,
                },
            },
            '&:nth-child(2)': {
                '& > div.advCard': {
                    backgroundImage: (props) => `url(${props.urls[1]})`,
                },
            },
            '&:last-child': {
                '& > div.advCard': {
                    backgroundImage: (props) => `url(${props.urls[2]})`,
                },
            },
        },
    },
}));