import {makeStyles} from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            width: 'auto'
        },
        '& div.body-types': {
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            [theme.breakpoints.down('sm')]: {
                flexDirection: 'column'
            },
            '& div.MuiBox-root': {
                width: 'min-content',
                '&:not(:last-child)': {
                    marginRight: 5
                },
                borderRadius: '10px',
                cursor: 'pointer',
                padding: '5px',
                '& svg': {
                    '& path': {
                        fill: theme.palette.primary.black
                    }
                },
                '&.selected': {
                    boxShadow: `0px 0px 8px ${theme.palette.primary.main}`,
                    '& p.MuiTypography-subtitle1': {
                        color: theme.palette.primary.main
                    },
                    '& svg': {
                        '& path': {
                            fill: theme.palette.primary.main
                        }
                    }
                }
            }
        }
    }
}));