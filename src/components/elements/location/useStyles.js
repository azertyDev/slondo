import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        '& div.location-wrapper': {
            display: 'flex',
            alignItems: 'center',
            '& > h6.MuiTypography-subtitle1': {
                cursor: 'pointer',
                textDecoration: 'underline'
            },
            '& > svg': {
                marginRight: '12px'
            }
        }
    },
    locationModal: {
        width: '960px',
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
                width: '100%',
                borderRadius: '7px',
                border: '1px solid #ccc',
                fontSize: '0.87rem'
            },
            '& > button.search-button': {
                width: 88,
                marginLeft: '-70px',
                color: '#000',
                border: '1px solid #C0C0C0',
                borderBottomRightRadius: '7px',
                borderTopRightRadius: '7px',
                borderBottomLeftRadius: '0',
                borderTopLeftRadius: '0',
                backgroundColor: '#E9E9E9',
                lineHeight: '1.65'
            }
        }
    }
}));
