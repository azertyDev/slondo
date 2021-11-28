import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: 30,
        [theme.breakpoints.down('sm')]: {
            marginTop: 0
        },
        '& div.right-content-adv-wrapper': {
            height: '200px',
            [theme.breakpoints.down('xs')]: {
                height: '150px'
            }
        },
        '& div.content-adv-wrapper': {
            height: '345px',
            [theme.breakpoints.down('xs')]: {
                height: '233px'
            }
        },
        '& div.view-btns': {
            '& button': {
                padding: 6,
                '&.selected svg rect': {
                    fill: '#845CAB'
                }
            }
        },
        '& ins.adsbygoogle[data-ad-status="unfilled"]': {
            height: '100%!important',
            backgroundColor: '#f0f0f0'
        },
        '& div.sidebar-adv-wrapper': {
            marginBottom: '15px',
            paddingRight: 0
        }
    }
}));
