import {makeStyles} from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiAccordionSummary-content': {
            display: 'flex',
            alignItems: 'center',
            '& svg': {
                marginRight: '10px'
            }
        },
        '& div.title-wrapper': {
            marginBottom: '15px'
        },
        '& > div': {
            marginBottom: '15px'
        },
        '& div.publish-button-wrapper': {
            display: 'flex',
            justifyContent: 'flex-end',
            '& > button > h6': {
                color: theme.palette.primary.white
            }
        }
    }
}));
