import {makeStyles} from '@material-ui/core/styles'

export const useStyle = makeStyles((theme) => ({
    root: {
        '& input.MuiOutlinedInput-input, div.MuiOutlinedInput-input': {
            padding: '10px 15px',
        },
        '& svg.MuiSvgIcon-root': {
            fill: '#9a64d0',
        },
        '& div.photos-dropdown': {
            height: '200px',
            backgroundColor: '#C0C0C0',
            borderRadius: '4px'
        }
    },
    title: {
        margin: '50px 0',
        '& span': {
            color: '#9c65d5',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '2rem',
            margin: '30px 0',
        },
    },
    advertisementSettings: {
        margin: '30px 0',
    },
    advertisementType: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-between',
    },
    categoryNameInput: {
        // width: '250px',
        padding: '10px',
        borderRadius: 4,
        position: 'relative',
        border: '1px solid #ced4da',
        fontSize: '0.9rem',
        textOverflow: 'ellipsis',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '& input.MuiInputBase-input': {
            padding: '0',
        },
    },
    advertisementName: {
        '& p.MuiFormHelperText-contained': {
            margin: '5px 0 0 0',
        },
    },
    selectPrice: {
        '& div.MuiOutlinedInput-input': {
            paddingLeft: '10px',
            paddingRight: '10px',
        },
        '& svg.MuiSelect-iconOutlined': {
            right: '5px',
        },
    },
    paymentAndDelivery: {
        display: 'flex',
        alignItems: 'center',
        flexFlow: 'row',
        // justifyContent: 'space-between',
        '& a': {
            textDecoration: 'none',
        },
        '& span.MuiButtonBase-root': {
            padding: '0',
            borderRadius: '5px',
            '& svg path': {
                backgroundColor: '#eaeaea',
                fill: '#ccc',
            },
        },
        '& svg.question-mark': {
            marginLeft: '5px',
        },
        '& h6.MuiTypography-subtitle2': {
            fontSize: '12px',
            marginLeft: '5px',
        },
        '& span.safe-auction-rules': {
            color: '#9a64d0;',
        },
    },
    description: {
        maxWidth: '100%',
        minWidth: '100%',
        maxHeight: '230px',
        minHeight: '230px',
        padding: '10px',
    },
    getSettings: {
        textTransform: 'initial',
        textDecoration: 'none',
        color: '#9b66d2',
    },
    nextButtonBlock: {
        marginTop: '50px',
        [theme.breakpoints.down('md')]: {
            marginTop: '30px',
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: '25px',
        },
    },
    nextButton: {
        padding: '10px 80px',
        [theme.breakpoints.down('sm')]: {padding: '10px 50px'},
    },
    required: {
        color: 'red ',
    },
    spacingNone: {
        padding: '4px !important',
        [theme.breakpoints.down('sm')]: {
            padding: '8px 8px 0 0 !important',
        },
    },
    adBanner: {
        '& > div > div.right-banner': {
            width: '100%',
            height: '470px',
            borderRadius: '7px',
            backgroundColor: '#C0C0C0',
        }
    }
}))
