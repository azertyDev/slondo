import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {},
    modal: {
        backgroundColor: 'rgba(0, 0, 0, .95)',
        '& h6.MuiTypography-h6': {
            color: '#fff',
            fontWeight: '600',
            marginLeft: '130px'
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
                            },
                        }
                    },
                },
            },
        },
        '&.makeStyles-secondSlider-21': {
            maxWidth: '1085px',
            marginTop: 30,
            '& > div.slick-slider': {
                '& div.slick-list': {
                    height: '150px !important',
                    '& div.slick-track': {
                        display: 'flex',
                        justifyContent: 'center',
                        '& div.slick-slide': {
                            width: 'auto !important',
                            marginRight: 15,
                            '& img': {
                                width: '255px !important',
                                height: 150
                            }
                        }
                    },
                }
            }
        }
    }
}));
