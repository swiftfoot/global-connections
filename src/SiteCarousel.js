import Slider from 'react-slick';
import React from 'react';
import './SiteCarousel.css';
import PropTypes from 'prop-types';

class SiteCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSiteIndex: 0,
            visible: true
        }
    }

    render() {
        //TODO: Convert onDoubleClick to onTouchTap and try swiping
        let settings = {
            dots: false,
            infinite: true,
            arrows: false,
            speed: 200,
            slidesToShow: 5,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '0px',
            afterChange: this.changed.bind(this),
        };
        const style={visibility: this.state.visible ? "visible": "hidden"};
        return (
            <div className="siteCarouselPositioner" style={style}>
                <div className="person">{this.props.sites[this.state.selectedSiteIndex].person}</div>
                <hr className="separator"/>
                <div className="location">{this.props.sites[this.state.selectedSiteIndex].city}, {this.props.sites[this.state.selectedSiteIndex].country} </div>
                <div className="siteCarouselBackground"/>
                <div className="siteCarousel">
                    <Slider ref='slider' {...settings}>
                        {this.props.sites.map((site, key) => { return (
                            <div className="slide" key={key} onDoubleClick={this.tapped.bind(this)}><img draggable="false" id={key} className="innerSlide" src={site.thumbnail} alt={site.person}></img></div>
                            );}
                        )}
                    </Slider>
                </div>
            </div>
        );
    }

    componentDidMount() {
        // Hack because autoplay is broken in react-slick for me
        this.setAutoScroll(true);
    }
    tapped(e) {
        let site = parseInt(e.target.id, 10);
        if (site === this.state.selectedSiteIndex) {
            this.props.siteTapped(this.props.sites[site]);
        } else {
            this.refs.slider.slickGoTo(site);
        }
    }
    changed(currentSlide) {
        // Update the current site index
        this.setState( {
            selectedSiteIndex: currentSlide
        });
        this.props.siteSelected(this.props.sites[currentSlide]);
    }

    setAutoScroll(autoScroll) {
        if (!autoScroll) {
            clearTimeout(this.autoPlayInterval);
            this.refs.slider.innerSlider.pause();
        } else {
            this.autoPlayInterval = setInterval(() => {
                this.refs.slider.slickNext()
            }, 2000);
        }
    }

    hide() {
        this.setState({
            selectedSiteIndex: this.state.selectedSiteIndex,
            visible: false,
        });
        this.setAutoScroll(false);
    }
    show() {
        this.setState({
            selectedSiteIndex: this.state.selectedSiteIndex,
            visible: true,
        });
    }
}

SiteCarousel.propTypes = {
    sites: PropTypes.arrayOf(PropTypes.shape({
        person: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        title:  PropTypes.string.isRequired,
        war:  PropTypes.string.isRequired
    })).isRequired,
    siteSelected: PropTypes.func.isRequired,
    siteTapped: PropTypes.func.isRequired
}

export default SiteCarousel;