import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    cabinetTabs: {
        marginBottom: 15,
        minHeight: 'auto',
        '& .MuiTab-root': {
            borderBottom: '1px solid #838383',
            padding: 0,
            minHeight: 40,
            borderRadius: '3px 3px 0px 0px',
            '& h6.MuiTypography-subtitle1': {
                textTransform: 'uppercase'
            },
            [theme.breakpoints.down('xs')]: {
                '& h6.MuiTypography-subtitle1': {
                    fontSize: '0.875rem'
                }
            }
        },
        '& .MuiTabs-indicator': {
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: ({page, tabIndex}) =>
                page === 'auctions'
                    ? theme.palette.primary.secondary
                    : page === 'posts' || 'purchases'
                    ? theme.palette.common.activeTab
                    : (page === 'favorite' || 'banned') && tabIndex === 0
                        ? theme.palette.primary.createAdBtnColor
                        : theme.palette.primary.lotBgColor
        },
        '& button.Mui-selected': {
            backgroundColor: ({page, tabIndex}) =>
                page === 'auctions'
                    ? theme.palette.primary.secondaryLight
                    : page === 'posts' || 'purchases'
                    ? theme.palette.primary.primaryLight
                    : (page === 'favorite' || 'banned') && tabIndex === 0
                        ? theme.palette.primary.primaryLight
                        : theme.palette.primary.secondaryLight,
            '& h6.MuiTypography-subtitle1': {
                color: ({page, tabIndex}) =>
                    page === 'auctions'
                        ? theme.palette.primary.secondary
                        : page === 'posts' || 'purchases'
                        ? theme.palette.common.activeTab
                        : (page === 'favorite' || 'banned') && tabIndex === 0
                            ? theme.palette.common.activeTab
                            : theme.palette.primary.secondary
            }
        }
    }
}));