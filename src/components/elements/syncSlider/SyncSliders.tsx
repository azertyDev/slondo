import React, { useEffect, useRef, useState } from 'react'
import { CustomSlider } from '../customSlider/CustomSlider'
import { useStyles } from './useStyles'

export const SyncSliders = (props) => {
    const [slidersNav, setSlidersNav] = useState({ nav1: null, nav2: null })
    const slider1 = useRef()
    const slider2 = useRef()

    useEffect(() => {
        setSlidersNav({
            nav1: slider1.current,
            nav2: slider2.current,
        })
    }, [])
    const imgUrls = [
        {
            url: 'img/advertisement-image.jpg',
            alt: 'adv-image',
        },
        {
            url: 'img/advertisement-image.jpg',
            alt: 'adv-image',
        },
        {
            url: 'img/advertisement-image.jpg',
            alt: 'adv-image',
        },
        {
            url: 'img/advertisement-image.jpg',
            alt: 'adv-image',
        },
    ]

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div className="first-slider">
                <CustomSlider
                    asNavFor={slidersNav.nav2}
                    ref={slider1}
                    dots={false}
                >
                    {imgUrls.map(({ url, alt }, i) => (
                        <div key={i}>
                            <img src={url} alt={alt} />
                        </div>
                    ))}
                </CustomSlider>
            </div>
            <div className="second-slider">
                <CustomSlider
                    asNavFor={slidersNav.nav1}
                    ref={slider2}
                    dots={false}
                    slidesToShow={5}
                    swipeToSlide={true}
                    focusOnSelect={true}
                >
                    {imgUrls.map(({ url, alt }, i) => (
                        <div key={i}>
                            <img src={url} alt={alt} />
                        </div>
                    ))}
                </CustomSlider>
            </div>
        </div>
    )
}
