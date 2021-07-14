import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& .image': {
            width: '100%'
        },
        '& .image-wrapper': {
            border: '1px solid #E0E0E0',
            borderRadius: '10px'
        },
        '& .term': {
            '&:before': {
                content: '"•"',
                marginRight: 5
            }
        },
        '& .color-silver': {
            color: '#838383'
        },
        '& a.link': {
            textDecoration: 'none',
            color: theme.palette.common.activeTab
        },
        '& .mb-18': {
            marginBottom: '18px'
        },
        '& .bg-color': {
            backgroundColor: '#F7F7F7'
        },
        '& .color-orange': {
            color: '#F2994A'
        },
        '& .fs-18': {
            fontSize: '18px'
        },
        '& h6.MuiTypography-root': {
            lineHeight: '22px'
        }
    }
}));
