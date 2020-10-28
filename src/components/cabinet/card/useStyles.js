import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    root: {
        '& div.ad-block': {
            marginTop: '20px',
            '& > div:first-child': {
                maxWidth: '75%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '10px',
                '& > h6.MuiTypography-subtitle1': {
                    fontSize: '12px',
                    '& > span': {
                        color: '#7DBCF6',
                    },
                },
            },
            '& > div': {
                display: 'flex',
                flexDirection: 'row',
                '& > div:first-child': {
                    maxWidth: '75%',
                    '& > div.MuiPaper-root': {
                        display: 'flex',
                        border: 0,
                        '& > div.img': {
                            borderTopLeftRadius: '10px',
                            borderBottomLeftRadius: '10px',
                            width: '80%',
                            height: 'auto',
                            backgroundImage:
                                'url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgtRf_ypExsaR6LsfyIdgSA-VW_MTKz8zo-g&usqp=CAU")',
                            backgroundPosition: 'center top',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            position: 'relative',
                            '& > span.MuiTypography-caption': {
                                position: 'absolute',
                                top: '5px',
                                left: '5px',
                                backgroundColor: 'rgba(136, 202, 236, 0.65)',
                                borderRadius: '5px',
                                padding: '0 7px 0 7px',
                                letterSpacing: '0.4px',
                                color: '#fff',
                            },
                            '& > span:last-child': {
                                position: 'absolute',
                                bottom: '10px',
                                left: '10px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '0 3px 0 3px',
                                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                                borderRadius: '5px',
                                '& > svg': {
                                    marginRight: '5px',
                                },
                            },
                        },
                        '& > div:last-child': {
                            padding: '10px 10px 10px 20px',
                            border: '1px solid #ccc',
                            borderLeft: 0,
                            borderRadius: '0 10px 10px 0',
                            '& > div.header': {
                                display: 'flex',
                                justifyContent: 'space-between',
                                width: '100%',
                                marginBottom: '10px',
                                '& > div': {
                                    display: 'flex',
                                    alignItems: 'center',
                                    '& > h6.MuiTypography-subtitle1': {
                                        fontSize: '18px',
                                        borderBottom: '1px solid #4E4E4E',
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
                                    '& > a:last-child > svg': {
                                        marginLeft: '15px',
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
                            '& > div:first-child': {
                                display: 'flex',
                                alignItems: 'center',
                                width: '60%',
                                '& > a': {
                                    display: 'flex',
                                },
                            }, '& > div': {
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                                width: '40%',
                            },
                        },
                    },
                },
                '& > div.card-buttons': {
                    width: '25%',
                    marginLeft: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    '& > button': {
                        padding: '10px',
                        marginBottom: '10px',
                        '& > svg': {
                            marginRight: '10px',
                        },
                    },
                },
            },
        },
    },
}))
