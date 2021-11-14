import {makeStyles} from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& div.react-multi-carousel-list': {
            padding: '10px 0',
            '& div.react-multi-carousel-track': {
                display: 'flex',
                alignItems: 'end'
            },
            '& .MuiBox-root': {
                margin: 'auto',
                cursor: 'pointer',
                userSelect: 'none',
                display: 'flex!important',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                '& svg': {
                    marginBottom: 5
                },
                '& p.MuiTypography-subtitle1': {
                    [theme.breakpoints.down('sm')]: {
                        fontSize: '0.75rem'
                    }
                },
                '&.selected': {
                    '& p.MuiTypography-subtitle1': {
                        color: theme.palette.primary.secondary
                    },
                    '& svg': {
                        '& path': {
                            fill: theme.palette.primary.secondary
                        }
                    }
                }
            }
        }
    }
}));