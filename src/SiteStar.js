import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './SiteStar.css';

class SiteStar extends Component {

    render() {
        const imgSrc = this.props.active ? "Star-LIT.png" : "Star-50percentLIT.png";
        const style = {
            position: "absolute",
            top: this.props.top,
            left: this.props.left,
        };
        return (
            <img className="siteStar" src={"img/" + imgSrc} style={style} alt="imgSrc" />
        );
    }
}

SiteStar.propTypes = {
    top: PropTypes.string.isRequired,
    left: PropTypes.string.isRequired,
    site: PropTypes.object.isRequired,
    active: PropTypes.bool.isRequired,
}

const mapStateToProps = (state, ownprops) => {
    let active = false;
    if (ownprops.site === state.site) {
        active = true;
    }
    return {
        top: ownprops.top,
        left: ownprops.left,
        active: active
    }
}

export default connect(mapStateToProps)(SiteStar);
