import React from "react";
import PropTypes from "prop-types";

import "./Intro.css";

const propTypes = {
  intro: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  callToAction: PropTypes.string.isRequired
};

const Intro = props => (
  <div className="intro">
    <div className="introText">
      {props.intro.split(";").map((line, index, { length }) => (
        <span>
          {`${line}${index + 1 !== length ? ";" : ""}`}
          <br />
        </span>
      ))}
    </div>
    <div className="introDetails">
      <div className="introDetailsText">{props.details}</div>
      <img
        className="introSeparator"
        src="img/intro/TextSeparatorBars.png"
        alt=""
      />
      <img
        className="introSeparator"
        src="img/intro/TextSeparatorBars.png"
        alt=""
      />
      <div className="introDetailsText">{props.callToAction}</div>
    </div>
  </div>
);

Intro.propTypes = propTypes;

export default Intro;
