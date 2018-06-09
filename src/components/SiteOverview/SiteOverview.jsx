import React, { Fragment } from "react";
import PropTypes from "prop-types";

const propTypes = {
  person: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired
};

const SiteOverview = props => {
  const { person, city, country } = props;
  return (
    <Fragment>
      <div className="person">{person}</div>
      <img src="img/Line-SingleWhite.png" alt="" className="separator" />
      <div className="location">
        {city}, {country}
      </div>
    </Fragment>
  );
};

SiteOverview.propTypes = propTypes;

export default SiteOverview;
