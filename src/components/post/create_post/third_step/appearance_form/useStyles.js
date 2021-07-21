import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& div.preview': {
            '& div.color-preview': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '7px 10px',
                marginBottom: '25px',
                background: '#FFFF',
                borderRadius: '100px',
                width: '25%',
                '& h6 > strong': {
                    fontWeight: '500'
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
                },
                [theme.breakpoints.down('sm')]: {
                    width: '250px'
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
            cursor: 'pointer',
            [theme.breakpoints.down('sm')]: {
                display: 'block'
            },
            '& div.color-wrapper': {
                display: 'flex',
                padding: '7px 10px',
                alignItems: 'center',
                flexDirection: 'column',
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
        },
        '& div.photos-wrapper': {
            maxHeight: '270px',
            marginBottom: '15px',
            [theme.breakpoints.down('xs')]: {
                maxHeight: '473px'
            },
            '& h6': {
                margin: '10px 0',
                [theme.breakpoints.down('sm')]: {
                    margin: '0 0 10px'
                }
            }
        }
    }
}));
