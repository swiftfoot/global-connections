import React, { Fragment } from "react";
import PropTypes from "prop-types";

const propTypes = {
  person: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

const SiteOverview = props => {
  const { person, label } = props;
  return (
    <Fragment>
      <div className="person">{person}</div>
      <img src="img/Line-SingleWhite.png" alt="" className="separator" />
      <div className="location">{label}</div>
    </Fragment>
  );
};

SiteOverview.propTypes = propTypes;

export default SiteOverview;
