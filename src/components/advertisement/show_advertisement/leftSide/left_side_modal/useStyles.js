import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {},
    modal: {
        backgroundColor: 'rgba(0, 0, 0, .95)',
        '& h6.MuiTypography-h6': {
            color: '#fff',
            fontWeight: '600',
            textAlign: 'center',
        }
    },
    slider: {
        width: '100%',
        '& div': {
            '&.makeStyles-firstSlider-20 div.slick-slider': {
                '& > div.slick-list': {
                    width: '1065px !important',
                    height: '627px !important',
                    margin: '0 auto',
                    padding: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    '& div.slick-track': {
                        display: 'flex',
                        justifyContent: 'center',
                        '& div.slick-slide': {
                            display: 'flex',
                            justifyContent: 'center',
                            marginRight: 0,
                            '& div img': {
                                width: '100% !important',
                                '&:hover': {
                                    cursor: 'default'
                                }
                            },
                        }
                    },
                },
            },
            '&.makeStyles-secondSlider-21': {
                marginTop: 30,
                '& > div.slick-slider': {
                    '& div.slick-list': {
                        width: '1065px',
                        margin: '0 auto',
                        '& div.slick-track': {
                            display: 'flex',
                            '& div.slick-slide': {
                                marginRight: 15,
                                width: 'auto !important',
                                '& div': {
                                    width: '255px !important',
                                    height: '150px !important',
                                    '& img': {
                                        height: 150
                                    }
                                },
                            }
                        },
                    }
                }
            }
        },
    },
    sliderCounter: {
        width: '90px',
        height: '30px',
        background: '#000000',
        borderRadius: '100px',
        margin: '30px auto 0 auto',
        '& h6.MuiTypography-subtitle1': {
            textAlign: 'center',
            color: '#fff',
            padding: '8px 0'
        }
    },
}));
