import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& div.ad-block': {
            marginTop: '20px',
            '& > div:first-child': {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '10px',
                '& > h6.MuiTypography-subtitle1': {
                    fontSize: '12px',
                    color: '#4E4E4E',
                    '& > span': {
                        color: '#7DBCF6',
                    },
                },
            },
            '& > div > div.MuiPaper-root': {
                display: 'flex',
                borderRadius: '10px',
                '& > div.img': {
                    marginRight: '20px',
                    width: '80%',
                    height: 'auto',
                    backgroundImage:
                        'url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKX8bOU_yQLLwNbuVTBNxrb1PW1yIpoxsgUg&usqp=CAU")',
                    backgroundPosition: 'center top',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                },
                '& > div:last-child': {
                    padding: '10px',
                    '& > div.header': {
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        marginBottom: '10px',
                        '& > div': {
                            display: 'flex',
                            alignItems: 'center',
                            '& > h6.MuiTypography-h6': {
                                borderBottom: '1px solid #000',
                                lineHeight: '20px',
                            },
                            '& > h6.MuiTypography-subtitle2': {
                                borderBottom: '1px solid #838383',
                                lineHeight: '15px',
                                color: '#838383',
                            },
                            '& > a > svg': {
                                display: 'flex',
                                marginLeft: '5px',
                                '& > path': {
                                    fill: '#838383',
                                },
                            },
                        },
                    },
                },
                '& > div > div.description': {
                    color: '#838383',
                    marginBottom: '10px',
                },
                '& > div > div.location': {
                    display: 'flex',
                    justifyContent: 'space-between',
                    '& > div': {
                        display: 'flex',
                        alignItems: 'center',
                        '& > a': {
                            display: 'flex',
                        },
                    },
                },
            },
        },
    },
}));
