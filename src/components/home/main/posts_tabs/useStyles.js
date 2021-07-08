import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& > h2.title': {
            marginBottom: '30px'
        },
        '& div.MuiTabs-root': {
            display: 'flex',
            width: '100%',
            minHeight: 'auto',
            marginBottom: '33px',
            [theme.breakpoints.down('md')]: {
                marginBottom: '20px'
            },
            '& div.MuiTabs-flexContainer': {
                borderBottom: `1px solid ${theme.palette.common.tab}`,
                '& h6': {
                    textTransform: 'uppercase',
                    color: theme.palette.common.tab,
                    [theme.breakpoints.down('md')]: {
                        textTransform: 'none',
                        color: '#838383 !important'
                    }
                }
            },
            '& button.Mui-selected': {
                '& h6.MuiTypography-h6': {
                    color: theme.palette.primary.secondary,
                    [theme.breakpoints.down('md')]: {
                        color: '#4E4E4E !important'
                    }
                }
            },
            '& span.MuiTabs-indicator': {
                backgroundColor: theme.palette.primary.secondary,
                [theme.breakpoints.down('md')]: {
                    backgroundColor: `#675EAA`
                }
            }
        },
        '& div.tabs-content': {
            marginBottom: '40px',
            '& div.MuiGrid-container': {
                width: 'calc(100% + 14px)',
                margin: '-7px',
                '& div.MuiGrid-item': {
                    padding: '7px',
                    [theme.breakpoints.down('xs')]: {
                        padding: '4px'
                    }
                }
            }
        },
        '& div.pagination': {
            display: 'flex',
            justifyContent: 'center'
        }
    },
    showMoreContainer: {
        marginTop: '40px',
        [theme.breakpoints.down('md')]: {
            marginTop: '30px'
        },
        '& div.show-more-block': {
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            '& > button': {
                position: 'relative',
                width: '170px',
                height: '38px',
                backgroundColor: theme.palette.primary.white,
                boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
                border: 'none',
                borderRadius: '100px',
                zIndex: 1,
                '& > h6.MuiTypography-subtitle2': {
                    lineHeight: '17px',
                    letterSpacing: '0.25px'
                }
            }
        }
    }
}));
