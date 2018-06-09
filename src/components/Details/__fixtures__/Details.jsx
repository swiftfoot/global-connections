import Details from "../Details";

import sites from "../../../sites/globalSites.json";

export default {
  component: Details,
  props: {
    ...sites[0],
    ...sites[0].detailImages[0],
    onMoreDetails: moreDetails => console.log(`more details: ${moreDetails}`),
    onCloseDetails: closeDetails =>
      console.log(`close details: ${closeDetails}`)
  }
};
