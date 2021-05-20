import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& ul.MuiList-padding': {
            padding: 0
        },
        '& div.MuiListItem-gutters': {
            padding: '7px 17px 6px 16px'
        },
        '& div.MuiCollapse-container': {
            backgroundColor: theme.palette.primary.white,
            zIndex: 100,
            '& div.MuiList-root:hover': {
                backgroundColor: theme.palette.primary.gray
            }
        },
        '& ul': {
            border: ({open}) => open && '1px solid',
            overflowY: 'auto'
        },
        '& div.selected-item': {
            border: '1px solid',
            borderBottom: ({open}) => open && 0,
            borderRadius: ({open}) => open ? '5px 5px 0 0' : '5px'
        },
        '& div.filters-wrapper': {
            position: 'absolute',
            display: 'flex',
            backgroundColor: theme.palette.primary.white,
            zIndex: 100,
            '& ul.sub-ctgrs': {
                height: '442px',
                borderLeft: 0,
                '& div.MuiCollapse-container': {
                    width: 'fit-content',
                    borderRadius: '0',
                    borderLeft: 0
                }
            },
            '& ul.ctgrs': {
                '& div.MuiCollapse-container': {
                    borderTop: 0,
                    borderRadius: '0 0 0 5px'
                }
            }
        }
    },
    selected: {
        backgroundColor: theme.palette.primary.gray
    }
}));
