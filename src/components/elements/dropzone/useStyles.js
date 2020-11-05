import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
    root: {
        '& > aside > div.dropzone': {
            width: '40px',
            height: '40px',
            background: '#845CAB',
            borderRadius: '100%',
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: 30,
            '&:hover': {
                cursor: 'pointer'
            }
        }
    },
    thumbsContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    thumb: {
        marginRight: 5,
        marginBottom: 5,
    },
    thumbInner: {
        display: 'flex',
        minWidth: 0,
        overflow: 'hidden'
    },
    img: {
        // display: 'block',
        width: 211,
        height: 120,
    },

}))