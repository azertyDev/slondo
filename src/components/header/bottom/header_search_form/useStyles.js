import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.down('md')]: {
            marginBottom: '10px'
        },
        '& form': {
            display: 'flex',
            position: 'relative',
            width: '100%',
            height: 38,
            '& > div': {
                height: '100%'
            },
            '& > svg, & > img.filter-icon': {
                position: 'absolute',
                top: 'calc(50% - 10px)',
                height: '20px'
            },
            '& > svg': {
                left: '10px',
                zIndex: 100,
                [theme.breakpoints.down('md')]: {
                    '& path': {
                        fill: '#BDBDBD'
                    }
                }
            },
            '& img.filter-icon': {
                right: '10px'
            },
            '& input': {
                padding: '12px 70px 10px 35px',
                width: '100%',
                borderRadius: '7px',
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
