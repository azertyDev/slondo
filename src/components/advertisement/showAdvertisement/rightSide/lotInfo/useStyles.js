import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& div.lot-info': {
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            marginBottom: '50px',
            '& > div': {
                display: 'flex',
                justifyContent: 'center',
            },

            '& > div:nth-child(2)': {
                display: 'flex',
                justifyContent: 'center',
                paddingBottom: '20px',
                borderBottom: '1px solid #ccc',
                marginBottom: '20px',
                '& div': {
                    width: '80%',
                    height: '60px',
                    backgroundColor: '#ccc',
                },
            },
            '& div.lot-participants': {
                flexDirection: 'column',
                marginBottom: '20px',
                paddingBottom: '20px',
                borderBottom: '1px solid #ccc',
                '& > div': {
                    display: 'flex',
                    justifyContent: 'space-between',
                    '& > h6.MuiTypography-subtitle1': {
                        width: '50%',
                    },
                    '& > h6.MuiTypography-subtitle1:last-child': {
                        textAlign: 'end',
                    },
                    '& > button': {
                        marginTop: '20px',
                    },
                },
            },
            '& div.bet-info': {
                flexDirection: 'column',
                paddingBottom: "20px",
                borderBottom: '1px solid #ccc',
                '& > div': {
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '10px',
                },
                '& > div:nth-child(2)': {
                    display: 'flex',
                    '& > div': {
                        marginRight: '10px',
                        '& > div > input.MuiOutlinedInput-input': {
                            padding: '10px',
                        },
                    },
                    '& > button': {
                        width: '40%',
                    },
                },
                
                '& > div:nth-child(3)': {
                    justifyContent: 'flex-start',
                    marginBottom: '30px'
                },
                '& > div:last-child': {
                },
            },
        },
    },
}));
