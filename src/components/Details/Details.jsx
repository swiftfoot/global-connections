import React from "react";
import PropTypes from "prop-types";
import "./Details.css";

const propTypes = {
  label: PropTypes.string.isRequired,
  person: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  credit: PropTypes.string.isRequired,
  learnMore: PropTypes.string,
  onMoreDetails: PropTypes.func.isRequired
};

const defaultProps = {
  learnMore: undefined
};

const Details = props => {
  const {
    label,
    person,
    title,
    caption,
    credit,
    learnMore,
    onMoreDetails
  } = props;

  return (
    <div className="rightDetails">
      <div className="locationDetails ">{`${label}`}</div>
      <img className="separator" src="img/Lines-TwoYellowDividers.png" alt="" />
      <div className="personDetails">{person}</div>
      <img className="separator" src="img/Lines-TwoYellowDividers.png" alt="" />
      <div className="imageDetails">
        <p className="title">{title}</p>
        <div className="caption">{caption}</div>
      </div>
      <img className="separator" src="img/Line-CreamDotted.png" alt="" />
      <div className="credit">{credit}</div>
      {learnMore ? (
        <div className="moreDetailsImage">
          <img
            draggable="false"
            src="img/Button-WantToLearnMore.png"
            alt="More Details"
            onTouchStart={onMoreDetails}
            onClick={onMoreDetails}
          />
        </div>
      ) : null}
    </div>
  );
};

Details.propTypes = propTypes;
Details.defaultProps = defaultProps;
export default Details;
