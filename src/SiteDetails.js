import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import './SiteDetails.css';

class SiteDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSite: null,
            imageIndex: 0,
            moreDetails: false,
        };
    }

    render() {
        let settings = {
            dots: true,
            infinite: false,
            arrows: false,
            speed: 200,
            slidesToShow: 1,
            slidesToScroll: 1,
            afterChange: this.imageChanged.bind(this),
            variableWidth: true,
        };
        const style = {display: this.state.selectedSite !== null ? "flex" : "none"};
        const initialDetailsStyle = {display: !this.state.moreDetails ? "flex": "none"};
        const moreDetailsStyle = {display: this.state.moreDetails ? "flex": "none"};
        if (this.state.selectedSite) {
            return (
                <div className="siteDetails" style={style}>
                    <div className="siteDetailBackground"></div>
                    <div className="detailImageCarousel">
                        <Slider ref='slider' {...settings}>
                            {this.state.selectedSite.detailImages.map((imageDetails, key) => {
                                    return (
                                        <div className="imageDetails">
                                            <img className="image" draggable="false" key={"imageDetail" + this.state.selectedSite.person + key} id={key}
                                             src={imageDetails.src} alt={imageDetails.caption}></img>
                                        </div>
                                    );
                                }
                            )}
                        </Slider>
                    </div>
                    <div className="rightDetails" style={initialDetailsStyle}>
                        <div className="locationDetails">{this.state.selectedSite.city + ", " + this.state.selectedSite.country}</div>
                        <div className="personDetails">{this.state.selectedSite.person}</div>
                        <div className="war">{this.state.selectedSite.war}</div>
                        <div className="caption">{this.state.selectedSite.detailImages[this.state.imageIndex].caption}</div>
                        {
                            this.state.selectedSite.learn_more ? <div className="moreDetailsImage"><div>WANT TO LEARN MORE?</div><img draggable="false" src="img/more_details.png" alt="More Details" onTouchStart={this.openMoreDetails.bind(this)} onClick={this.openMoreDetails.bind(this)}></img></div> : ""}


                    </div>
                    <div className="moreDetails" style={moreDetailsStyle}>
                        <img src="img/more_details.png" alt="More Details"/>
                        <div>{this.state.selectedSite.person}</div>
                        <div className="learnMore">{this.state.selectedSite.learn_more}</div>
                    </div>
                    <img src="img/close.png" style={initialDetailsStyle} alt="Close" className="closeButton" onClick={this.closeSite.bind(this)} onTouchStart={this.closeSite.bind(this)}/>
                    <img src="img/back.png" style={moreDetailsStyle} alt="Back" className="backButton" onClick={this.closeMoreDetails.bind(this)} onTouchStart={this.closeMoreDetails.bind(this)}/>
                </div>
            );
        } else {
            return <div></div>;
        }
    }
    openSite(site) {
        this.setState({
            selectedSite: site
        })
    }
    closeSite() {
        this.setState({
            selectedSite: null
        })
        this.props.siteClosed();
    }
    imageChanged(image) {
        this.setState({
           selectedSite: this.state.selectedSite,
           imageIndex: image,
        });
    }
    openMoreDetails() {
        console.log("More Details");
        this.setState({
            moreDetails: true
        })
    }
    closeMoreDetails() {
        console.log("Close More Details");
        this.setState({
            moreDetails: false
        })
    }
}

SiteDetails.propTypes = {
    siteClosed: PropTypes.func.isRequired
}

export default SiteDetails;
