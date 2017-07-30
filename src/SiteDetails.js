import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import './SiteDetails.css';
import { connect } from 'react-redux';
import { siteClosed } from './actions/AppActions';

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
        const style = {display: this.props.selectedSite !== null ? "flex" : "none"};
        const initialDetailsStyle = {display: !this.state.moreDetails ? "flex": "none"};
        const moreDetailsStyle = {display: this.state.moreDetails ? "flex": "none"};
        if (this.props.selectedSite) {
            return (
                <div className="siteDetails" style={style}>
                    <div className="siteDetailBackground"></div>
                    <div className="detailImageCarousel">
                        <Slider ref='slider' {...settings}>
                            {this.props.selectedSite.detailImages.map((imageDetails, key) => {
                                    return (
                                        <div className="imageDetails">
                                            <img className="image" draggable="false" key={"imageDetail" + this.props.selectedSite.person + key} id={key}
                                             src={imageDetails.src} alt={imageDetails.caption}></img>
                                        </div>
                                    );
                                }
                            )}
                        </Slider>
                    </div>
                    <div className="rightDetails" style={initialDetailsStyle}>
                        <div className="locationDetails location">{this.props.selectedSite.city + ", " + this.props.selectedSite.country}</div>
                        <img className="separator" src="img/Lines-TwoYellowDividers.png" alt=""/>
                        <div className="personDetails person">{this.props.selectedSite.person}</div>
                        <img className="separator" src="img/Lines-TwoYellowDividers.png" alt=""/>
                        <div className="war">{this.props.selectedSite.war}</div>
                        <img className="separator" src="img/Line-CreamDotted.png" alt=""/>
                        <div className="caption">{this.props.selectedSite.detailImages[this.state.imageIndex].caption}</div>
                        <img className="separator" src="img/Line-CreamDotted.png" alt=""/>
                        {
                            this.props.selectedSite.learn_more ? <div className="moreDetailsImage"><img draggable="false" src="img/Button-WantToLearnMore.png" alt="More Details" onTouchStart={this.openMoreDetails.bind(this)} onClick={this.openMoreDetails.bind(this)}></img></div> : ""}


                    </div>
                    <div className="moreDetails" style={moreDetailsStyle}>
                        <img src="img/Header-ReadMore.png" alt="More Details"/>
                        <div className="moreDetailsPerson">{this.props.selectedSite.person}</div>
                        <div className="learnMore">{this.props.selectedSite.learn_more}</div>
                    </div>
                    <img src="img/Button-Close-X.png" style={initialDetailsStyle} alt="Close" className="closeButton" onClick={this.props.onCloseSite} onTouchStart={this.props.onCloseSite}/>
                    <img src="img/Button-BackArrow.png" style={moreDetailsStyle} alt="Back" className="backButton" onClick={this.closeMoreDetails.bind(this)} onTouchStart={this.closeMoreDetails.bind(this)}/>
                </div>
            );
        } else {
            return <div></div>;
        }
    }
    imageChanged(image) {
        this.setState({
           selectedSite: this.props.selectedSite,
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
    selectedSite: PropTypes.object,
    moreDetails: PropTypes.bool.isRequired
}

const mapStateToProps = (state, ownprops) => {
    let selectedSite = null;
    if (state.details) {
        selectedSite = state.site;
    }
    return {
        selectedSite: selectedSite,
        moreDetails: false
    }
}

const mapDispatchToProps = (dispatch, ownprops) => {
    return {
        onCloseSite: (e) => {
            dispatch(siteClosed());
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(SiteDetails);
