import {makeStyles} from '@material-ui/core/styles'


export const useStyles = makeStyles((theme) => ({
    root: {
        '& > li': {
            backgroundColor: theme.palette.primary.white,
            borderBottom: `1px solid ${theme.palette.primary.gray}`,
            '& h6': {
                color: theme.palette.primary.black,
                fontWeight: 600
            },
            '& > div.MuiListItem-root': {
                paddingTop: '10px',
                paddingBottom: '10px'
            },
            '& > div.MuiListItemSecondaryAction-root': {
                '& > button.MuiIconButton-root': {
                    padding: '8px'
                },
                '& svg': {
                    width: '15px',
                    height: '15px',
                    '& > path': {
                        fill: theme.palette.primary.black
                    }
                }
            },
            '&:first-child': {
                borderTop: `1px solid ${theme.palette.primary.gray}`,
            },
        }
    }
}));