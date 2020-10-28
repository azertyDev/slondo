import {createMuiTheme} from '@material-ui/core/styles'
import {SERVER_URL} from './constants'

const calibri = {
    fontFamily: 'Calibri',
    fontStyle: 'normal',
    fontWeight: 400,
    src: `
        url(${SERVER_URL}/fonts/Calibri.eot) format('eot')`,
    unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const colors = {
    main: '#9773af',
    secondary: '#675EAA',
    white: '#fafafa',
    black: '#4E4E4E',
    gray: '#C0C0C0',
    adBgColor: '#88CAEC',
    lotBgColor: '#AD66D5',
    createAdBtnColor: '#7DBCF6',
    error: '#E9372E',
}

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: colors.main,
            secondary: colors.secondary,
            white: colors.white,
            black: colors.black,
            gray: colors.gray,
            adBgColor: colors.adBgColor,
            lotBgColor: colors.lotBgColor,
            createAdBtnColor: colors.createAdBtnColor,
            error: colors.error,
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
        fontFamily: ['Calibri', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        subtitle1: {
            lineHeight: 1.5,
        },
        allVariants: {
            color: '#4E4E4E',
        },
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [calibri],
                ':focus': {
                    outline: 0,
                },
                body: {
                    backgroundColor: colors.white
                }
            }
        },
        MuiPaper: {
            root: {
                backgroundColor: colors.white,
            },
        },
        MuiOutlinedInput: {
            root: {
                borderRadius: '6px',
                '&:hover > fieldset.MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(0, 0, 0, 0.23)'
                }
            }
        },
        MuiTab: {
            root: {
                textTransform: 'none'
            }
        },
        MuiListItem: {
            button: {
                '&:hover': {
                    backgroundColor: `${colors.white}!important`
                }
            }
        }
    },
})

export default theme;
