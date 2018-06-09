import MainScreen from "../MainScreen";

import sites from "../../../sites/globalSites.json";

export default {
  component: MainScreen,
  props: {
    sites,
    selectedSite: sites[0],
    onSiteTapped: site => console.log(`site tapped ${JSON.stringify(site)}`),
    onSiteChanged: site => console.log(`site changed ${JSON.stringify(site)}`)
  }
};
