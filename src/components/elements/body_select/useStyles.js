import {makeStyles} from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& .slick-list': {
            padding: '10px 0',
            '& div.slick-track': {
                display: 'flex',
                alignItems: 'end',
                '& div.slick-slide': {
                    '& div.MuiBox-root': {
                        width: 'fit-content!important',
                        margin: 'auto'
                    }
                }
            },
            '& .MuiBox-root': {
                cursor: 'pointer',
                userSelect: 'none',
                display: 'flex!important',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                '& svg': {
                    marginBottom: 5
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