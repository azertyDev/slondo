import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        '& > div': {
            marginBottom: '30px',
            '&:last-child': {
                margin: 0,
            },
        },
        '& div.contact-buttons': {
            '& button': {
                width: '100%',
                border: 'none',
                height: 44,
                width: '100%',
                '&:not(:last-child)': {
                    marginBottom: '10px',
                },
                '&.safe-shopping-btn': {
                    background: '#7DBCF6',
                    '& > svg': {
                        marginRight: 10,
                        width: '17px',
                        height: '20px',
                        '& > path': {
                            fill: '#fff',
                        },
                    },
                },
            },
        },
    },
}));
