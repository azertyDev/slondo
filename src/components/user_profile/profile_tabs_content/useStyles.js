import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {},
    cabinetTabs: {
        marginBottom: 15,
        height: 28,
        '& .MuiTabs-indicator': {
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: (props) =>
                props.pathname === '/cabinet/auctions'
                    ? theme.palette.primary.lotBgColor
                    : props.pathname === '/cabinet/posts' || props.pathname === '/cabinet/purchases'
                    ? theme.palette.primary.createAdBtnColor
                    : props.pathname === '/cabinet/favorite' && props.tabIndex === 0
                        ? theme.palette.primary.createAdBtnColor
                        : theme.palette.primary.lotBgColor
        },
        '& button.Mui-selected': {
            '& h6.MuiTypography-subtitle1': {
                color: (props) =>
                    props.pathname === '/cabinet/auctions'
                        ? theme.palette.primary.lotBgColor
                        : props.pathname === '/cabinet/posts' || props.pathname === '/cabinet/purchases'
                        ? theme.palette.primary.createAdBtnColor
                        : props.pathname === '/cabinet/favorite' && props.tabIndex === 0
                            ? theme.palette.primary.createAdBtnColor
                            : theme.palette.primary.lotBgColor
            }
        }
    }
}));