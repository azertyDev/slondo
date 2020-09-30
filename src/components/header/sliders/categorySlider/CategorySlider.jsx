import React, {Component} from 'react'
import SlickSlider from 'react-slick'
import {Container, Typography} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import {CarIcon} from '../../../elements/icons'

// Styles
import {useStyles} from './useStyle'

class CategorySlider extends Component {
    constructor(props) {
        super(props)
        this.next = this.next.bind(this)
        this.previous = this.previous.bind(this)
    }
    
    initialNumSlides = 12
    slides = [...Array(this.initialNumSlides).keys()].map((i) => ({index: i}))
    state = {slides: this.slides, index: 0}
    next = () => {
        this.slider.slickNext()
    }
    previous = () => {
        this.slider.slickPrev()
    }
    beforeChange = (prev, next) => {
        this.setState({index: next})
        console.log(next)
    }
    
    render() {
        const {classes} = this.props
        const {index, slides} = this.state
        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            autoplay: false,
            centerMode: false,
            arrows: false,
            beforeChange: this.beforeChange,
        }
        return (
            <div className={classes.root}>
                <Container className="category-slider">
                    <Typography variant="h4">Популярные категории</Typography>
                    <SlickSlider ref={(c) => (this.slider = c)} {...settings}>
                        {this.state.slides.map(({index}) => (
                            <div
                                className="category-item"
                                key={index}
                                style={{
                                    width: 'auto',
                                    display: 'flex !important',
                                    flexFlow: 'column wrap',
                                    alignItems: 'center',
                                    fontSize: '1rem',
                                    marginRight: '20px',
                                }}
                            >
                                <a href="#" key={index}>
                                    <img src={CarIcon}/>
                                    <p>Легковые автомобили</p>
                                </a>
                            </div>
                        ))}
                    </SlickSlider>
                    
                    <IconButton
                        className="left-button"
                        size="small"
                        disabled={index === 0}
                        onClick={this.previous}
                    >
                        <ArrowLeftIcon fontSize="large"/>
                    </IconButton>
                    <IconButton
                        className="right-button"
                        size="small"
                        disabled={index === slides.length - 1}
                        onClick={this.next}
                    >
                        <ArrowRightIcon fontSize="large"/>
                    </IconButton>
                </Container>
            </div>
        )
    }
}

export default withStyles(useStyles)(CategorySlider)
