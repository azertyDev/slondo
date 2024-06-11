import {FC} from 'react';
import {Box, Typography} from '@material-ui/core';
import {useTranslation} from 'next-i18next';
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
import {Slider} from "@src/components/elements/slider/Slider";
import {useStyles} from './useStyles';

type BodyTypesProps = {
    disableRequire?: boolean,
    bodies,
    values,
    errorMsg: string,
    handleSelect: (k, v) => void
};

export const BodySelect: FC<BodyTypesProps> = (props) => {
    const {
        values,
        bodies = [],
        errorMsg,
        handleSelect,
        disableRequire
    } = props;

    const {t} = useTranslation('filters');
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
            <Slider config={config}>
                {bodies.map(body => {
                        const {icon} = bodyIcons.find(el => el.name === body.name);
                        return (
                            <Box
                                key={body.id}
                                style={{width: 'fit-content'}}
                                onClick={handleBodySelect(body)}
                                className={body.id === values.body?.id ? 'selected' : ''}
                            >
                                {icon}
                                <Typography
                                    component='p'
                                    variant='subtitle1'
                                >
                                    {t(`car.${body.name}.name`)}
                                </Typography>
                            </Box>
                        );
                    }
                )}
            </Slider>
        </div>
    );
};

const config = {
    partialVisible: true,
    responsive: {
        desktop: {
            breakpoint: {max: 1920, min: 992},
            items: 8
        },
        laptop: {
            breakpoint: {max: 992, min: 768},
            items: 6
        },
        tablet: {
            breakpoint: {max: 768, min: 576},
            items: 4,
            slidesToSlide: 4,
            partialVisibilityGutter: 20
        },
        mobile: {
            breakpoint: {max: 576, min: 0},
            items: 3,
            slidesToSlide: 3,
            partialVisibilityGutter: 15
        }
    }
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