import {FC} from 'react';
import {Box, Typography} from '@material-ui/core';
import {useTranslation} from 'react-i18next';
import {
    CabrioletIcon,
    CoupeIcon,
    CrossoverIcon,
    FastbackIcon,
    HardtopIcon,
    HatchbackIcon,
    LiftbackIcon,
    LimousineIcon,
    MinevanIcon,
    MinibusIcon,
    PickupIcon,
    RoadsterIcon,
    SedanIcon,
    StationWagonIcon,
    SuvIcon,
    TargaIcon,
    VanIcon
} from '@src/components/elements/icons';
import {CustomSlider} from '@src/components/elements/custom_slider/CustomSlider';
import {useStyles} from './useStyles';
import {Settings} from 'react-slick';

type BodyTypesProps = {
    disableRequire?: boolean,
    bodies,
    values,
    errorMsg: string,
    handleSelect: (k, v) => void
};

const bodyIcons = [
    {
        id: 1,
        name: 'cabriolet',
        icon: <CabrioletIcon/>
    },
    {
        id: 2,
        name: 'hatchback',
        icon: <HatchbackIcon/>
    },
    {
        id: 3,
        name: 'coupe',
        icon: <CoupeIcon/>
    },
    {
        id: 4,
        name: 'suv',
        icon: <SuvIcon/>
    },
    {
        id: 5,
        name: 'minibus',
        icon: <MinibusIcon/>
    },
    {
        id: 6,
        name: 'minevan',
        icon: <MinevanIcon/>
    },
    {
        id: 7,
        name: 'pickup',
        icon: <PickupIcon/>
    },
    {
        id: 8,
        name: 'sedan',
        icon: <SedanIcon/>
    },
    {
        id: 9,
        name: 'station_wagon',
        icon: <StationWagonIcon/>
    },
    {
        id: 10,
        name: 'сrossover',
        icon: <CrossoverIcon/>
    },
    {
        id: 11,
        name: 'roadster',
        icon: <RoadsterIcon/>
    },
    {
        id: 12,
        name: 'limousine',
        icon: <LimousineIcon/>
    },
    {
        id: 13,
        name: 'targa',
        icon: <TargaIcon/>
    },
    {
        id: 14,
        name: 'fastback',
        icon: <FastbackIcon/>
    },
    {
        id: 15,
        name: 'hardtop',
        icon: <HardtopIcon/>
    },
    {
        id: 16,
        name: 'liftback',
        icon: <LiftbackIcon/>
    },
    {
        id: 17,
        name: 'van',
        icon: <VanIcon/>
    }
];

export const BodySelect: FC<BodyTypesProps> = (props) => {
    const {
        values,
        bodies,
        errorMsg,
        handleSelect,
        disableRequire
    } = props;
    const {t} = useTranslation('filters');

    const sliderSettings: Settings = {
        dots: false,
        arrows: false,
        infinite: false,
        slidesToShow: 9.5,
        centerPadding: '0px',
        swipeToSlide: true,
        adaptiveHeight: false,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 7.5
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 6.5
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4.5
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                    waitForAnimate: false
                }
            }
        ]
    };

    const handleBodySelect = (body) => () => handleSelect('body', body);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant='subtitle1' gutterBottom>
                <strong>
                    {t('car.body.name')}
                    {!disableRequire && <span className='error-text'>*&nbsp;</span>}
                </strong>
                {errorMsg && (
                    <span className='error-text'>
                        {errorMsg}
                    </span>
                )}
            </Typography>
            <CustomSlider {...sliderSettings}>
                {bodies
                    ? bodies.map(body => {
                        const carBodyIcon = bodyIcons.find(el => el.name === body.name).icon;
                        return (
                            <Box
                                key={body.id}
                                style={{width: 'fit-content'}}
                                onClick={handleBodySelect(body)}
                                className={body.id === values.body?.id ? 'selected' : ''}
                            >
                                {carBodyIcon}
                                <Typography
                                    component='p'
                                    variant='subtitle1'
                                >
                                    {t(`car.${body.name}.name`)}
                                </Typography>
                            </Box>
                        );
                    })
                    : <div/>}
            </CustomSlider>
        </div>
    );
};