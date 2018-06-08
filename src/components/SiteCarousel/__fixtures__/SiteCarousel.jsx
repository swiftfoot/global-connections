import SiteCarousel from '../SiteCarousel';

import sites from '../../../sites/globalSites.json';

export default {
  component: SiteCarousel,
  props: {
    sites,
    siteTapped: site => console.log(`tapped Site: ${JSON.stringify(site)}`),
    siteChanged: site => console.log(`changed Site: ${JSON.stringify(site)}`),
    selectedSite: sites[0],
  },
};
