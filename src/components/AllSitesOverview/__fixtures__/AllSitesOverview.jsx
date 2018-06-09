import AllSitesOverview from "../AllSitesOverview";

import sites from "../../../sites/globalSites.json";

export default {
  component: AllSitesOverview,
  props: { sites, selectedSite: sites[2] }
};
