import Slider from 'react-slick';
import React from 'react';
import './SiteCarousel.css';

class SiteCarousel extends React.Component {
    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '60px',
            afterChange: this.changed.bind(this),
        };
        return (
            <div className="siteCarousel">
                <Slider {...settings}>
                    {this.props.sites.map(function(site, key) { return (
                        <div className="slide" key={key}>{site.title}</div>
                        );}
                    )}
                </Slider>
            </div>
        );
    }
    changed(currentSlide) {
        console.log('changed');
        this.props.siteSelected(this.props.sites[currentSlide]);
    }
}

export default SiteCarousel;