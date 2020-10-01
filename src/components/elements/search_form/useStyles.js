import makeStyles from '@material-ui/core/styles/makeStyles'

export const useStyles = makeStyles(() => ({
    root: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        '& > img.search-icon, & > img.filter-icon': {
            position: 'absolute',
            height: '20px',
            top: 'calc(50% - 10px)',
        },
        '& > img.search-icon': {
            left: '10px'
        },
        '& > img.filter-icon': {
            right: '10px'
        },
        '& > input.search-input': {
            padding: '8px 68px 8px 40px',
            width: '100%',
            borderRadius: '7px',
            border: '1px solid #ccc',
            fontSize: '0.87rem',
        },
        '& > button.search-button': {
            width: '70px',
            marginLeft: '-70px',
            color: '#000',
            border: '1px solid #C0C0C0',
            borderBottomRightRadius: '7px',
            borderTopRightRadius: '7px',
            borderBottomLeftRadius: '0',
            borderTopLeftRadius: '0',
            backgroundColor: '#E9E9E9',
            lineHeight: '1.65',
        }
    }
}))