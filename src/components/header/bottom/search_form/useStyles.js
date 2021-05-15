import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme) => ({
    root: {
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
            left: '10px',
            [theme.breakpoints.down('md')]: {
                '& path': {
                    fill: '#838383'
                }
            }
        },
        '& > input.search-input': {
            padding: '8px 230px 8px 35px',
            width: '100%',
            [theme.breakpoints.down('md')]: {
                width: '60%',
                padding: '8px 0px 8px 35px'
            },
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
}));
