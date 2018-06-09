import React from "react";
import PropTypes from "prop-types";

import "./PullScreen.css";

const propTypes = {
  titleImage: PropTypes.string,
  background: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

const defaultProps = {
  titleImage: "img/pull-screen/IntroScreenBar.png",
  background: "img/pull-screen/redtails bg gray.mp4"
};

const PullScreen = props => {
  const { background, titleImage, onClick } = props;
  if (background.indexOf("mp4")) {
    return (
      <div onClick={onClick}>
        <video width="100%" height="100%" autoPlay muted loop>
          <source src={background} />
        </video>
        <div className="title">
          <img className="titleImage" src={titleImage} alt="title" />
        </div>
      </div>
    );
  }
  return null;
};

PullScreen.propTypes = propTypes;
PullScreen.defaultProps = defaultProps;

export default PullScreen;
