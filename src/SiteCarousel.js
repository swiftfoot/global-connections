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
                    {this.props.sites.map(function(site, key) { return (
                        <div key={key}>{site.title}</div>
                        );}
                    )}
                </Slider>
            </div>
        );
    }
    changed(slick, currentSlide) {
        console.log('changed');
        this.props.siteSelected(this.props.sites[currentSlide]);
    }
}

export default SiteCarousel;