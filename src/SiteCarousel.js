import Slider from 'react-slick';
import React from 'react';
import './SiteCarousel.css';

class SiteCarousel extends React.Component {
    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '60px',
            afterChange: this.changed,
        };
        return (
            <div>
                <Slider {...settings}>
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                    <div><h3>5</h3></div>
                    <div><h3>6</h3></div>
                </Slider>
            </div>
        );
    }
    changed(slick) {
        print("slide changed: " + slick);
    }
}

export default SiteCarousel;