import React from "react";
import PropTypes from "prop-types";

import "./SiteOverview.css";

const propTypes = {
  person: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

const SiteOverview = props => {
  const { person, label } = props;
  return (
    <div className="siteOverview">
      <div className="person">{person}</div>
      <img src="img/Line-SingleWhite.png" alt="" className="separator" />
      <div className="label">{label}</div>
    </div>
  );
};

SiteOverview.propTypes = propTypes;

export default SiteOverview;
