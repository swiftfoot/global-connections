import Slider from 'react-slick';
import React from 'react';
import './SiteCarousel.css';

class SiteCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSiteIndex: 0
        }
    }

    render() {
        //TODO: Convert onDoubleClick to onTouchTap and try swiping
        let settings = {
            dots: false,
            infinite: true,
            arrows: false,
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '0px',
            afterChange: this.changed.bind(this),
        };
        return (
            <div className="siteCarouselPositioner">
                <div className="person">{this.props.sites[this.state.selectedSiteIndex].person}</div>
                <hr className="separator"/>
                <div className="location">{this.props.sites[this.state.selectedSiteIndex].city}, {this.props.sites[this.state.selectedSiteIndex].country} </div>
                <div className="siteCarouselBackground"/>
                <div className="siteCarousel">
                    <Slider ref='slider' {...settings}>
                        {this.props.sites.map((site, key) => { return (
                            <div className="slide" key={key} onDoubleClick={this.tapped.bind(this)}><img draggable="false" className="innerSlide" src={site.thumbnail} alt={site.person}></img></div>
                            );}
                        )}
                    </Slider>
                </div>
            </div>
        );
    }
    tapped(e) {
        this.refs.slider.slickGoTo(parseInt(e.target.parentElement.getAttribute('data-index'), 10));
    }
    changed(currentSlide) {
        console.log('changed');
        // Update the current site index
        this.setState( {
            selectedSiteIndex: currentSlide
        });
        this.props.siteSelected(this.props.sites[currentSlide]);
    }
}

export default SiteCarousel;