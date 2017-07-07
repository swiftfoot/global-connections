import React, { Component } from 'react';
import Slider from 'react-slick';
import './SiteDetails.css';

class SiteDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSite: null,
            imageIndex: 0
        };
    }

    render() {
        let settings = {
            dots: true,
            infinite: true,
            arrows: false,
            speed: 200,
            slidesToShow: 1,
            slidesToScroll: 1,
            afterChange: this.imageChanged.bind(this),
        };
        const style = {display: this.state.selectedSite !== null ? "flex" : "none"};
        if (this.state.selectedSite) {
            return (
                <div className="siteDetails siteDetailBackground" style={style}>
                    <div className="detailImageCarousel">
                        <Slider ref='slider' {...settings}>
                            {this.state.selectedSite.detailImages.map((imageDetails, key) => {
                                    return (
                                        <img draggable="false" key={key} id={key} className="imageDetails"
                                             src={imageDetails.src} alt={imageDetails.caption}></img>
                                    );
                                }
                            )}
                        </Slider>
                    </div>
                    <div className="rightDetails">
                        <div className="locationDetails">{this.state.selectedSite.city + ", " + this.state.selectedSite.country}</div>
                        <div className="personDetails">{this.state.selectedSite.person}</div>
                        <div className="war">{this.state.selectedSite.war}</div>
                        <div className="caption">{this.state.selectedSite.detailImages[this.state.imageIndex].caption}</div>
                        <input type="button" value="Close" onClick={this.closeSite.bind(this)}/>
                    </div>
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
}

export default SiteDetails;
