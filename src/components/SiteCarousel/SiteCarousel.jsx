import PropTypes from "prop-types";
import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./SiteCarousel.css";
import SiteOverview from "../SiteOverview/SiteOverview";

import SiteSchema from "../../schemas/site";

class SiteCarousel extends React.Component {
  static propTypes = {
    sites: PropTypes.arrayOf(SiteSchema).isRequired,
    siteTapped: PropTypes.func.isRequired,
    siteChanged: PropTypes.func.isRequired,
    visible: PropTypes.bool,
    selectedSite: SiteSchema.isRequired
  };

  static defaultProps = {
    visible: true
  };

  constructor() {
    super();
    this.settings = {
      dots: false,
      infinite: true,
      arrows: false,
      speed: 200,
      slidesToShow: 5,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: "0px",
      autoplay: true,
      autoplaySpeed: 5000,
      focusOnSelect: true,
      initialSlide: 2
    };
  }

  render() {
    const {
      visible,
      siteChanged,
      selectedSite,
      siteTapped,
      sites
    } = this.props;

    const style = { visibility: visible ? "visible" : "hidden" };
    return (
      <div className="siteCarouselPositioner" style={style}>
        <SiteOverview
          person={selectedSite.person}
          city={selectedSite.city}
          country={selectedSite.country}
        />
        <div className="siteCarouselBackground" />
        <div className="siteCarousel">
          <Slider {...this.settings} afterChange={siteChanged}>
            {sites.map((site, key) => (
              <div
                className="slide"
                key={`div-${site.id}`}
                onDoubleClick={() => siteTapped(site.id)}
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
