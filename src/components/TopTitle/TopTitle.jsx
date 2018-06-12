import React from "react";
import PropTypes from "prop-types";

import "./TopTitle.css";

const propTypes = {
  imageURL: PropTypes.string,
  children: PropTypes.node
};
const defaultProps = {
  imageURL: "img/main-screen/FlyingHigherTitle.png",
  children: "Flying Higher"
};
const TopTitle = props => (
  <div className="topTitleImage">
    <img width="100%" src={props.imageURL} alt="title" />
    <div className="titleText topTitleText">{props.children}</div>
  </div>
);

TopTitle.propTypes = propTypes;
TopTitle.defaultProps = defaultProps;
export default TopTitle;
