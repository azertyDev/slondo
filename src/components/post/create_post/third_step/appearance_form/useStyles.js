import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& div.color-preview': {
            width: 'min-content',
            display: 'flex',
            alignItems: 'center',
            padding: '7px 10px',
            background: '#FFFF',
            borderRadius: '100px',
            '& p': {
                marginLeft: 10
            },
            '& div.color': {
                width: '38px',
                height: '38px',
                borderRadius: '100%',
                boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
                [theme.breakpoints.down('sm')]: {
                    width: '32px',
                    height: '32px'
                }
            }
        },
        '& .photos-preview': {
            margin: 0,
            '& img': {
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: 5
            }
        },
        '& ul.color-select': {
            display: 'flex',
            flexWrap: 'wrap',
            cursor: 'pointer',
            [theme.breakpoints.down('sm')]: {
                display: 'block'
            },
            '& li.color-wrapper': {
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                textAlign: 'center',
                [theme.breakpoints.down('sm')]: {
                    flexDirection: 'row',
                    padding: '10px 0',
                    borderBottom: '1px solid #F2F2F2',
                    '&:last-child': {
                        borderBottom: 'none'
                    }
                },
                '& div': {
                    width: '50px',
                    height: '50px',
                    marginBottom: '10px',
                    borderRadius: '50%',
                    [theme.breakpoints.down('sm')]: {
                        marginRight: '20px',
                        marginBottom: 0
                    },
                    [theme.breakpoints.down('xs')]: {
                        width: '32px',
                        height: '32px'
                    }
                }
            }
        },
        '& div.selected-color': {
            boxShadow: '0px 0px 5px 5px #ccc'
        }
    }
}));
