import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& > h1.title': {
            marginBottom: '30px',
            fontSize: theme.typography.pxToRem(36),
            fontWeight: 400
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
                '& button.MuiTab-root': {
                    borderRadius: '3px 3px 0px 0px',
                    '& h6': {
                        textTransform: 'uppercase',
                        [theme.breakpoints.down('md')]: {
                            fontSize: '1rem',
                            textTransform: 'none'
                        }
                    },
                    '&.Mui-selected': {
                        backgroundColor: ({tabValue}) =>
                            tabValue === 0
                                ? theme.palette.primary.primaryLight
                                : theme.palette.primary.secondaryLight,
                        '& h6': {
                            color: ({tabValue}) =>
                                tabValue === 0
                                    ? theme.palette.common.activeTab
                                    : theme.palette.primary.lotBgColor
                        }
                    }
                }
            },
            '& .MuiTabs-indicator': {
                backgroundColor: ({tabValue}) =>
                    tabValue === 0
                        ? theme.palette.common.activeTab
                        : theme.palette.primary.lotBgColor
            }
        },
        '& div.tabs-content': {
            '& div.MuiGrid-container': {
                width: 'calc(100% + 14px)',
                margin: '-7px',
                '& div.MuiGrid-item': {
                    padding: '7px',
                    [theme.breakpoints.down('xs')]: {
                        padding: '4px'
                    }
                }
            },
            '& > div > div:first-child': {
                marginBottom: '40px'
            },
            '& ins.adsbygoogle[data-ad-status="unfilled"]': {
                backgroundColor: '#f0f0f0'
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
                background: theme.palette.primary.white,
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


