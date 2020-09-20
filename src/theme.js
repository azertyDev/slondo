import {createMuiTheme} from '@material-ui/core/styles'
const SERVER_URL = process.env.SERVER_URL
const PORT = process.env.PORT

const calibri = {
    fontFamily: 'Calibri',
    fontStyle: 'normal',
    fontWeight: 400,
    src: `
        local('Calibri'),
        local('Calibri-Regular'),
        url(${SERVER_URL}:${PORT}/fonts/Calibri.eot) format('eot')`,
    unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const colors = {
    blue: '#4285F4',
    red: '#ED1516',
    lightRed: '#FE1516',
    gray: '#C6C6C7',
    white: '#fff',
    black: '#4D4D4D',
    lightGray: '#e0e0e0',
    green: '#00B029'
};

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: colors.red,
            black: colors.black,
            green: colors.green,
            white: colors.white,
            gray: colors.gray,
            lightGray: colors.lightGray,
            lightRed: colors.lightRed,
        },
        secondary: {
            main: colors.blue,
        },
        error: {
            main: colors.red,
        },
        background: {
            default: colors.white,
        },
    },
    typography: {
        fontFamily: ['Calibri'],
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [calibri],
                ':focus': {
                    outline: 0
                },
                '.input-error': {
                    '& > input': {
                        borderColor: '#FF1516'
                    }
                },
                '.menu-error': {
                    border: '1px solid #FF1516'
                },
                '.error-text': {
                    color: '#FF1516'
                }
            },
        },
    }
});

export default theme;