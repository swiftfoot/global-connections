import React, { Component } from "react";

import "./App.css";
import SiteCarousel from "../components/SiteCarousel/SiteCarousel";
import SiteDetail from "../components/SiteDetails/SiteDetails";
import SiteStar from "../components/SiteStar/SiteStar";
import sitesFile from "../sites/globalSites.json";

class App extends Component {
  state = {
    sites: sitesFile,
    selectedSite: sitesFile[0]
  };

  handleSiteToggle = isOpen => {
    console.log(` isOpen: ${isOpen}}`);
  };

  handleSiteChanged = site => {
    console.log(`site: ${JSON.stringify(site)}`);
  };

  render() {
    const { selectedSite, sites } = this.state;
    return (
      <div className="app">
        <div className="titleImage app">
          <img src="img/Header01-HCHM.png" alt="Global Connections" />
          <img
            src="img/Header02-GlobalConnections.png"
            alt="Global Connections"
          />
        </div>
        <div className="bg" />
        {sites.map(site => (
          <SiteStar
            top={site.top}
            left={site.left}
            key={`sitestar-${site.id}`}
            active={selectedSite === site}
          />
        ))}
        <SiteCarousel
          sites={sites}
          selectedSiteIndex={selectedSite.id}
          siteTapped={this.handleSiteToggle}
          siteChanged={this.handleSiteChanged}
        />
        <SiteDetail />
      </div>
    );
  }
}

export default App;
