import Slider from 'react-slick';
import React from 'react';
import './SiteCarousel.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectSite, siteTapped } from './actions/AppActions';

class SiteCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            autoScroll: true,
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
            afterChange: this.props.siteChanged.bind(this),
        };
        const style={visibility: this.props.visible ? "visible": "hidden"};
        return (
            <div className="siteCarouselPositioner" style={style}>
                <div className="person">{this.props.selectedSite.person}</div>
                <hr className="separator"/>
                <div className="location">{this.props.selectedSite.city}, {this.props.selectedSite.country} </div>
                <div className="siteCarouselBackground"/>
                <div className="siteCarousel">
                    <Slider ref='slider' {...settings}>
                        {this.props.sites.map((site, key) => { return (
                            <div className="slide" key={key} onTouchStart={this.onDoubleClick.bind(this)} onDoubleClick={this.onDoubleClick.bind(this)}><img draggable="false" id={key} className="innerSlide" src={site.thumbnail} alt={site.person}></img></div>
                            );}
                        )}
                    </Slider>
                </div>
            </div>
        );
    }

    /**
     * Need to decide whether to move the slider or launch the site
     */
    onDoubleClick(e) {
        let site = parseInt(e.target.id, 10);
        if (this.props.sites[site] === this.props.selectedSite) {
            this.props.siteTapped(this.props.sites[site]);
        } else {
            this.refs.slider.slickGoTo(site);
        }
    }

    componentDidMount() {
        // Check every 2 seconds whether autoscroll needed
        this.autoPlayInterval = setInterval(() => {
            if (this.state.autoScroll) {
                this.refs.slider.slickNext();
            }
        }, 2000);
        document.body.addEventListener('touchstart', (e) => {
            this.setAutoScroll(false);
        }, false);
        document.body.addEventListener('click', (e) => {
            this.setAutoScroll(false);
        }, false);
    }

    setAutoScroll(autoScroll) {
        this.setState( {
            autoScroll: autoScroll
        })
        //Set a timer for 30 seconds to restart autoscroll
        if (!autoScroll) {
            this.resetTimeout();
        }
    }

    resetTimeout() {
        clearTimeout(this.autoScrollTimeout);

        this.autoScrollTimeout = setTimeout(() => {
             if (this.props.visible) {
                this.setAutoScroll(true);
             } else {
                 this.resetTimeout();
             }
        }, 5000);
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
};

const mapDispatchToProps = (dispatch, ownprops) => {
    return {
        siteTapped: (site) => {
            dispatch(siteTapped(site));
        },
        siteChanged: (currentSlide) => {
            dispatch(selectSite(ownprops.sites[currentSlide]));
        }
    }
};

const mapStateToProps = (state, ownprops) => {
    return {
        selectedSite: state.site,
        sites: ownprops.sites,
        visible: !state.details
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(SiteCarousel);