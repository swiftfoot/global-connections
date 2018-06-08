import PropTypes from 'prop-types';
import Slider from 'react-slick';
import React from 'react';

import './SiteCarousel.css';

import SiteSchema from '../../schemas/site';

class SiteCarousel extends React.Component {
  static propTypes = {
    sites: PropTypes.arrayOf(SiteSchema).isRequired,
    siteTapped: PropTypes.func.isRequired,
    siteChanged: PropTypes.func.isRequired,
    visible: PropTypes.bool,
    selectedSite: SiteSchema.isRequired,
  };

  static defaultProps = {
    visible: true,
  };

  state = {
    autoScroll: true,
  };

  componentDidMount() {
    // Check every 2 seconds whether autoscroll needed
    this.autoPlayInterval = setInterval(() => {
      if (this.state.autoScroll) {
        this.slider.slickNext();
      }
    }, 5000);
    document.body.addEventListener(
      'touchstart',
      () => {
        this.setAutoScroll(false);
      },
      false
    );
    document.body.addEventListener(
      'click',
      () => {
        this.setAutoScroll(false);
      },
      false
    );
  }
  /**
   * Need to decide whether to move the slider or launch the site
   */
  onDoubleClick = e => {
    const site = parseInt(e.target.id, 10);
    if (this.props.sites[site] === this.props.selectedSite) {
      this.props.siteTapped(this.props.sites[site]);
    } else {
      this.slider.slickGoTo(site);
    }
  };

  setRef = slider => {
    this.slider = slider;
  };

  setAutoScroll(autoScroll) {
    this.setState({
      autoScroll,
    });
    // Set a timer for 30 seconds to restart autoscroll
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
    }, 30000);
  }

  render() {
    // TODO: Convert onDoubleClick to onTouchTap and try swiping
    const settings = {
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
    const style = { visibility: this.props.visible ? 'visible' : 'hidden' };
    return (
      <div className="siteCarouselPositioner" style={style}>
        <div className="person">{this.props.selectedSite.person}</div>
        <img src="img/Line-SingleWhite.png" alt="" className="separator" />
        <div className="location">
          {this.props.selectedSite.city}, {this.props.selectedSite.country}{' '}
        </div>
        <div className="siteCarouselBackground" />
        <div className="siteCarousel">
          <Slider ref={this.setRef} {...settings}>
            {this.props.sites.map((site, key) => (
              <div
                className="slide"
                key={`div-${site.id}`}
                onTouchStart={this.onDoubleClick}
                onDoubleClick={this.onDoubleClick}
              >
                <img
                  draggable="false"
                  id={key}
                  className="innerSlide"
                  src={site.thumbnail}
                  alt={site.person}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}

export default SiteCarousel;
