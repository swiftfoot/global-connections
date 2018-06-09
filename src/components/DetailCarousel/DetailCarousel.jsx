import Slider from "react-slick";
import React from "react";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./DetailCarousel.css";

const propTypes = {
  detailImages: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      caption: PropTypes.string.isRequired
    })
  ).isRequired,
  onImageChanged: PropTypes.func.isRequired
};

const settings = {
  dots: true,
  infinite: true,
  arrows: false,
  speed: 200,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 10000,
  afterChange: this.imageChanged,
  variableWidth: true,
  adaptiveHeight: true,
  centerMode: true,
  centerPadding: "50px"
};

const DetailCarousel = props => {
  const { detailImages, onImageChanged } = props;
  return (
    <div className="detailImageCarousel">
      <Slider {...settings} afterChange={onImageChanged}>
        {detailImages.map((imageDetails, key) => (
          <div key={`details-${imageDetails.caption}`}>
            <img
              className="image"
              draggable="false"
              key={`imageDetail${imageDetails.caption}`}
              id={key}
              src={imageDetails.src}
              alt={imageDetails.caption}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

DetailCarousel.propTypes = propTypes;

export default DetailCarousel;
