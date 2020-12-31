import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: '30px',
        '& div.contact-buttons': {
            '& button': {
                border: 'none',
                height: 44,
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
