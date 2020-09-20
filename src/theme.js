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


// Create a theme instance.
const theme = createMuiTheme({
    typography: {
        fontFamily: ['Calibri'],
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [calibri],
                ':focus': {
                    outline: 0
                }
            },
        },
    }
});

export default theme;