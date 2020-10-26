import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    root: {
        '& div.action-menu-wrapper': {
            '& > div': {
                marginBottom: '10px',
                boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
            },
            '& > div:first-child': {
                boxShadow: 'none',
            },
            '& > div.menu-item-subscribe': {
                display: 'flex',
                backgroundColor: '#F2F2F2',
                justifyContent: 'space-around',
                padding: '10px 0',
                borderRadius: '10px',
                '& > div': {
                    textAlign: 'center',
                    '& > div > h6.MuiTypography-subtitle1': {
                        color: '#4E4E4E',
                    },
                    '& > div:first-child > h6.MuiTypography-subtitle1': {
                        textAlign: 'center',
                        fontSize: '20px',
                        fontWeight: '600',
                        backgroundImage:
                            'linear-gradient(49.94deg, #675EAA 19.03%, #AD66D5 72.72%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    },
                },
            },
            '& > div.menu-item': {
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#F2F2F2',
                padding: '15px',
                borderRadius: '10px',
                '& > div': {
                    marginBottom: '5px',
                    '& > button': {
                        padding: '10px 0',
                        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
                        borderRadius: '5px',
                        background: '#fff',
                        '& > h6.MuiTypography-subtitle1': {},
                        '& > svg': {
                            marginRight: '8px',
                        },
                    },

                    '& > button:hover': {
                        '& > h6.MuiTypography-subtitle1': {
                            backgroundImage:
                                'linear-gradient(49.94deg, #675EAA 19.03%, #AD66D5 72.72%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        },
                        '& > svg': {

                        },
                    },
                },
                '& > div:last-child': {
                    display: 'flex',
                    marginBottom: '0',
                    '& > button:first-child': {
                        marginRight: '5px',
                    },
                },
            },
            '& > div.menu-item:last-child': {
                margin: '0',
            },
        },
    },
}))
