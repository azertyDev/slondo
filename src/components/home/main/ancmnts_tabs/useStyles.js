import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& > h2.title': {
            marginBottom: '30px',
            fontWeight: 400
        },
        '& div.MuiTabs-root': {
            display: 'flex',
            width: '100%',
            minHeight: 'auto',
            marginBottom: '33px',
            '& div.MuiTabs-flexContainer': {
                borderBottom: `1px solid ${theme.palette.common.tab}`,
                '& h6': {
                    textTransform: 'uppercase',
                    color: theme.palette.common.tab,
                }
            },
            '& button.Mui-selected': {
                '& h6.MuiTypography-h6': {
                    color: theme.palette.common.activeTab
                }
            },
            '& span.MuiTabs-indicator': {
                backgroundColor: theme.palette.common.activeTab
            }
        },
        '& div.tabs-content': {
            marginBottom: '40px',
            '& div.MuiGrid-container': {
                width: 'calc(100% + 14px)',
                margin: '-7px',
                '& div.MuiGrid-item': {
                    padding: '7px'
                }
            }
        },
        '& div.pagination': {
            display: 'flex',
            justifyContent: 'center',
        }
    },
    showMoreContainer: {
        marginTop: '40px',
        [theme.breakpoints.down('md')]: {
            marginTop: '30px',
        },
        '& div.show-more-block': {
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            '& > button': {
                position: 'relative',
                width: '170px',
                color: '#000',
                backgroundColor: theme.palette.primary.white,
                boxShadow: '0px 0px 8px rgba(132, 92, 171, 0.2)',
                borderRadius: '100px',
                zIndex: 1,
                '& > h6.MuiTypography-subtitle2': {
                    lineHeight: '17px',
                    letterSpacing: '0.25px',
                }
            }
        }
    }
}));
