import sites from "../../../sites/globalSites.json";

import SiteDetails from "../SiteDetails";

export default {
  component: SiteDetails,
  props: {
    selectedSite: sites[0],
    onCloseSite: site => console.log(`close site ${JSON.stringify(site)}`)
  }
};
