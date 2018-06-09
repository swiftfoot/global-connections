import React from "react";
import PropTypes from "prop-types";

import SiteCarousel from "../../components/SiteCarousel/SiteCarousel";

import SiteStar from "../../components/SiteStar/SiteStar";
import SiteSchema from "../../schemas/site";

import "./MainScreen.css";

const propTypes = {
  sites: PropTypes.arrayOf(SiteSchema).isRequired,
  selectedSite: SiteSchema.isRequired,
  onSiteTapped: PropTypes.func.isRequired,
  onSiteChanged: PropTypes.func.isRequired
};

const MainScreen = props => {
  const { sites, selectedSite, onSiteTapped, onSiteChanged } = props;
  return (
    <div className="mainScreen">
      <div className="titleImage">
        <img src="img/Header01-HCHM.png" alt="Global Connections" />
        <img
          src="img/Header02-GlobalConnections.png"
          alt="Global Connections"
        />
      </div>
      <div className="bg" />
      {sites[0].top // If I have locations on the map
        ? sites.map(site => (
          <SiteStar
              top={site.top}
              left={site.left}
              key={`sitestar-${site.id}`}
              active={selectedSite === site}
            />
          ))
        : null}
      <SiteCarousel
        sites={sites}
        selectedSite={selectedSite}
        siteTapped={onSiteTapped}
        siteChanged={onSiteChanged}
      />
    </div>
  );
};

MainScreen.propTypes = propTypes;
export default MainScreen;
