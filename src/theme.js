import { createMuiTheme } from '@material-ui/core/styles'
import { SERVER_URL } from './constants'

const calibri = {
    fontFamily: 'Calibri',
    fontStyle: 'normal',
    fontWeight: 400,
    src: `
        local('Calibri'),
        local('Calibri-Regular'),
        url(${SERVER_URL}/fonts/Calibri.eot) format('eot')`,
    unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
}

const colors = {
    pantone521: '#9773af',
    pantone663: '#e4e1e6',
    pantoneCoolGray: '#979799',
    pantoneBlack: '#101112',
    pantone7447: '#5a4974',
    pantone2975: '#a3cfe6',
    pantone486: '#cf7e79',
    pantone409: '#817874',
}

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: colors.pantone521,
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 1000,
            lg: 1280,
            xl: 1920,
        },
    },
    typography: {
        fontFamily: ['Calibri'],
        subtitle1: {
            lineHeight: 1.5,
        },
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                backgroundColor: '#fafafa',
                '@font-face': [calibri],
                ':focus': {
                    outline: 0,
                },
            },
        },
        MuiPaper: {
            root: {
                backgroundColor: '#fafafa',
            },
        },
        MuiOutlinedInput: {
            root: {
                borderRadius: '6px',
            },
        },
    },
})

export default theme
