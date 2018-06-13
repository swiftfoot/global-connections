import React from "react";
import PropTypes from "prop-types";

import "./PullScreen.css";

const propTypes = {
  titleImage: PropTypes.string,
  titleText: PropTypes.string,
  background: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

const defaultProps = {
  titleImage: "img/pull-screen/IntroScreenBarTitle.png",
  titleText: "Flying Higher",
  background: "img/pull-screen/redtails bg gray.mp4"
};

const PullScreen = props => {
  const { background, titleImage, onClick, titleText } = props;
  if (background.indexOf("mp4")) {
    return (
      <div onClick={onClick}>
        <div className="videoScrim" />
        <video width="100%" height="100%" autoPlay muted loop>
          <source src={background} />
        </video>
        <div className="title">
          <div className="titleBackground" />
          <img className="titleImage" src={titleImage} alt="title" />
          <div className="titleText">{titleText}</div>
          <div className="touchText">Touch the screen to begin.</div>
        </div>
      </div>
    );
  }
  return null;
};

PullScreen.propTypes = propTypes;
PullScreen.defaultProps = defaultProps;

export default PullScreen;
