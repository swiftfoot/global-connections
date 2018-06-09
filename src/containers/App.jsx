import React, { Component } from "react";

import "./App.css";

import sites from "../sites/globalSites.json";
import MainScreen from "../components/MainScreen/MainScreen";
import PullScreen from "../components/PullScreen/PullScreen";
import SiteDetails from "../components/SiteDetails/SiteDetails";

class App extends Component {
  state = {
    selectedSite: sites[0],
    isPullShowing: true,
    isSiteOpen: false
  };

  handleSiteToggle = () => {
    this.setState(state => ({ isSiteOpen: !state.isSiteOpen }));
  };

  handleSiteChanged = site => {
    console.log(`site: ${JSON.stringify(site)}`);
  };

  handleTogglePull = () => {
    this.setState(state => ({ isPullShowing: !state.isPullShowing }));
  };

  render() {
    const { isPullShowing, isSiteOpen, selectedSite } = this.state;
    return (
      <div className="app">
        {isPullShowing ? (
          <PullScreen onClick={this.handleTogglePull} />
        ) : !isSiteOpen ? (
          <MainScreen
            sites={sites}
            selectedSite={selectedSite}
            onSiteTapped={this.handleSiteToggle}
            onSiteChanged={this.handleSiteChanged}
          />
        ) : (
          <SiteDetails
            onCloseSite={this.handleSiteToggle}
            selectedSite={selectedSite}
          />
        )}
      </div>
    );
  }
}

export default App;
