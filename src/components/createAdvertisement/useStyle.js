import { makeStyles } from '@material-ui/core/styles'

export const useStyle = makeStyles((theme) => ({
    root: {
        '& input.MuiOutlinedInput-input, div.MuiOutlinedInput-input': {
            padding: '10px 15px',
        },
        '& svg.MuiSvgIcon-root': {
            fill: '#9a64d0',
        },
    },
    title: {
        marginTop: '50px',
        marginBottom: '50px',
        '& span': {
            color: '#9c65d5',
        },
    },
    typeAndCategoryBlock: {
        marginBottom: '30px',
    },
    advertisementSettings: {
        marginBottom: '25px',
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
    phoneButton: {
        textTransform: 'initial',
        color: '#9b66d2',
        '& button.MuiButton-text': {
            padding: '0',
        },
    },
    nextButtonBlock: {
        marginTop: '20px',
    },
    nextButton: {
        width: '250px',
        [theme.breakpoints.down('md')]: {
            width: '200px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '150px',
        },
    },
}))
