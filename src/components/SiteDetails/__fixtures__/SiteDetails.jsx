import sites from "../../../sites/globalSites.json";

import SiteDetails from "../SiteDetails";

export default {
  component: SiteDetails,
  props: {
    selectedSite: sites[0],
    isOpen: true,
    onCloseSite: () => console.log(`close site `)
  }
};
