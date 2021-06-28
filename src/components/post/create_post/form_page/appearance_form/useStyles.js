import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& div.preview': {
            '& div.color-preview': {
                display: 'flex',
                alignItems: 'center',
                '& div.color': {
                    width: '50px',
                    height: '50px'
                }
            },
            '& div.photos-preview': {
                '& img': {
                    width: '140px',
                    height: '100px',
                    objectFit: 'cover',
                    marginRight: '5px'
                }
            }
        },
        '& div.color-select': {
            display: 'flex',
            flexWrap: 'wrap',
            [theme.breakpoints.down('xs')]: {
                display: 'block'
            },
            '& div.color-wrapper': {
                display: 'flex',
                padding: '10px 0',
                alignItems: 'center',
                [theme.breakpoints.down('xs')]: {
                    borderBottom: '1px solid #F2F2F2',
                    '&:last-child': {
                        borderBottom: 'none'
                    }
                },
                '& div': {
                    width: '50px',
                    height: '50px',
                    [theme.breakpoints.down('xs')]: {
                        marginRight: '20px',
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%'
                    }
                }
            }
        },
        '& div.selected-color': {
            border: `3px solid #AD66D5`
        },
        '& div.photos-wrapper': {
            '& h6': {
                [theme.breakpoints.down('xs')]: {
                    marginBottom: '10px'
                }
            },
            marginBottom: '20px'
        }
    }
}));
