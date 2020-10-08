import React, { Component } from 'react'
import Slider from 'react-slick'

export default class CenterMode extends Component {
    render() {
        const settings = {
            customPaging: function (i) {
                return (
                    <a>
                        <img src={`${baseUrl}/abstract0${i + 1}.jpg`} />
                    </a>
                )
            },
            dots: true,
            dotsClass: 'slick-dots slick-thumb',
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        }
        return (
            <div>
                <h2>Custom Paging</h2>
                <Slider {...settings}>
                    <div>
                        <img src='/abstract01.jpg' />
                    </div>
                    <div>
                        <img src='/abstract02.jpg' />
                    </div>
                    <div>
                        <img src='/abstract03.jpg' />
                    </div>
                    <div>
                        <img src='/abstract04.jpg' />
                    </div>
                </Slider>
            </div>
        )
    }
}
