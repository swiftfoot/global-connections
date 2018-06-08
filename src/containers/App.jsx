import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectSite, siteTapped } from '../actions/AppActions';
import './App.css';
import SiteCarousel from '../components/SiteCarousel/SiteCarousel';
import SiteDetail from '../SiteDetails';
import SiteStar from '../components/SiteStar/SiteStar';
import SiteSchema from '../schemas/site';

const propTypes = {
  selectedSite: PropTypes.shape(SiteSchema),
  sites: PropTypes.arrayOf(SiteSchema).isRequired,
  actions: PropTypes.shape({
    onTap: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
  }).isRequired,
};

const defaultProps = {
  selectedSite: undefined,
};

const App = props => {
  const {
    selectedSite,
    sites,
    actions: { onTap, onSelect },
  } = props;
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
        selectedSiteIndex="0"
        siteTapped={onTap}
        siteChanged={onSelect}
      />
      <SiteDetail />
    </div>
  );
};

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default connect(
  state => ({
    selectedSite: state.site,
    sites: state.sites,
    visible: !state.details,
  }),
  dispatch => ({
    actions: bindActionCreators(
      { onTap: siteTapped, onSelect: selectSite },
      dispatch
    ),
  })
)(App);
