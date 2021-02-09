import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        height: 38,
        position: 'relative',
        display: 'flex',
        '& > img.search-icon, & > img.filter-icon': {
            position: 'absolute',
            height: '20px',
            top: 'calc(50% - 10px)',
        },
        '& > img.search-icon': {
            width: 18,
            height: 18,
            left: '10px',
        },
        '& > img.filter-icon': {
            right: '10px',
        },
        '& > input.search-input': {
            padding: '10px',
            width: '100%',
            borderRadius: '7px',
            border: '1px solid #ccc',
            fontSize: '0.87rem',
        },
        '& > div.select-type': {
            width: 150,
            height: 38,
            position: 'absolute',
            right: '90px',
            top: 0,
            zIndex: 1,
            '& > div': {
                padding: 0,
                height: 'inherit',
                display: 'flex',
                alignItems: 'center',
            },
            '& div.MuiSelect-select:focus': {
                background: 'none',
            },
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
            lineHeight: '1.65',
        },
    },
}));
