import React, { Component } from "react";
import PropTypes from "prop-types";
import DetailCarousel from "../DetailCarousel/DetailCarousel";
import Details from "../Details/Details";
import SiteSchema from "../../schemas/site";
import "./SiteDetails.css";

class SiteDetails extends Component {
  static propTypes = {
    selectedSite: SiteSchema.isRequired,
    onCloseSite: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      imageIndex: 0
      // moreDetails: false
    };
  }
  onImageChanged = image => {
    this.setState({
      imageIndex: image
    });
  };

  /*
  toggleMoreDetails = () => {
    console.log("toggle More Details");
    this.setState({
      moreDetails: false
    });
  }; */

  render() {
    const { selectedSite, onCloseSite } = this.props;
    const { imageIndex } = this.state;

    return (
      <div className="siteDetails">
        <div className="siteDetailBackground">
          <DetailCarousel
            detailImages={selectedSite.detailImages}
            onImageChanged={this.onImageChanged}
          />
          <Details
            {...selectedSite}
            {...selectedSite.detailImages[imageIndex]}
            onMoreDetails={this.toggleMoreDetails}
          />
          <img
            src="img/Button-Close-X.png"
            alt="Close"
            className="closeButton"
            onClick={onCloseSite}
            onTouchStart={onCloseSite}
          />
        </div>
      </div>
    );
  }
}

export default SiteDetails;
