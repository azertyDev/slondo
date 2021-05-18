import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: 38,
        [theme.breakpoints.down('md')]: {
            height: 32,
            marginBottom: '10px'
        },
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
                    fill: '#BDBDBD'
                }
            }
        },
        '& > input.search-input': {
            padding: '8px 230px 8px 35px',
            width: '100%',
            borderRadius: '7px',
            border: '1px solid #ccc',
            [theme.breakpoints.down('md')]: {
                border: '1px solid #DFDFDF',
                borderRadius: '100px',
                padding: '8px 8px 8px 35px'
            },
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
