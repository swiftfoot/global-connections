import DetailCarousel from "../DetailCarousel";

import sites from "../../../sites/globalSites.json";

export default {
  component: DetailCarousel,
  props: {
    detailImages: sites[0].detailImages,
    onImageChanged: image => console.log(`image changed ${image}`)
  }
};
