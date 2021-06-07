import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    location: {
        display: 'flex',
        alignItems: 'center',
        '& > h6.MuiTypography-subtitle1': {
            cursor: 'pointer',
            textDecoration: 'underline'
        },
        '& > svg': {
            marginRight: '12px',
            [theme.breakpoints.down('md')]: {
                marginRight: '5px'
            }
        }
    },
    locationModal: {
        padding: '40px 25px',
        '& > div.locations-input': {
            width: '100%',
            height: 38,
            position: 'relative',
            display: 'flex',
            '& > svg, & > img.filter-icon': {
                position: 'absolute',
                height: '20px',
                top: 'calc(50% - 10px)'
            },
            '& > svg': {
                left: '10px'
            },
            '& > img.filter-icon': {
                right: '10px'
            },
            '& > input.search-input': {
                padding: '8px 230px 8px 35px',
                [theme.breakpoints.down('xs')]: {
                    padding: '8px 0 8px 12px'
                },
                width: '100%',
                borderRadius: '7px',
                border: '1px solid #ccc',
                fontSize: '0.87rem'
            },
            '& > button.search-button': {
                width: 88,
                marginLeft: '-70px',
                borderBottomRightRadius: '7px',
                borderTopRightRadius: '7px',
                borderBottomLeftRadius: '0',
                borderTopLeftRadius: '0',
                backgroundColor: 'rgba(125, 188, 246, 1)',
                lineHeight: '1.65',
                '& h6': {
                    color: '#fff'
                }
            }
        },
        '& div.locations-table': {
            '& > div:first-child': {
                '& p': {
                    fontWeight: '600'
                },
                padding: '32px 0 16px '
            },
            '& div > div': {
                padding: '16px 0'
            }
        }
    }

}));
