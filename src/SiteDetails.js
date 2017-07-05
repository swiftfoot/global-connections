import React, { Component } from 'react';
//import Slider from 'react-slick';
import './SiteDetails.css';

class SiteDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSite: null,
        };
    }

    render() {
        const style = {display: this.state.selectedSite !== null ? "flex" : "none"};
        return (
            <div className="siteDetails" style={style}>
                    Hi There!
            </div>
        );
    }
}

export default SiteDetails;
