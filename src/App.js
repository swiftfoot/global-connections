import React, {Component} from 'react';
import './App.css';
import SiteCarousel from './SiteCarousel';
import SiteDetail from './SiteDetails';
import SiteStar from './SiteStar';
import sites from './sites/globalSites';

class App extends Component {
    constructor(props) {
        super(props);

        for (let i = 0; i < sites.length; i++) {
            let site = sites[i];
            console.log('site: ' + JSON.stringify(site));
        }
        this.state = {
            selectedSite: null
        };
    }

    render() {
        return (
            <div className="app" onTouchStart={this.resetTimeout.bind(this)} onClick={this.resetTimeout.bind(this)}>
                <img src="img/GlobalConnectionsTitle.png" alt="Global Connections"/>
                <div className="bg"/>
                {sites.map((site, key) => { return (
                        <SiteStar top={site.top} left={site.left} key={key} ref={"star"+site.person}/>
                    );}
                )}
                <SiteCarousel sites={sites} siteSelected={this.selectSite.bind(this)}
                              ref="siteCarousel"
                              siteTapped={this.siteTapped.bind(this)}/>
                <SiteDetail ref="siteDetail" site={this.state.selectedSite} siteClosed={this.siteClosed.bind(this)}/>
            </div>
        );
    }

    componentDidMount() {
        this.selectSite(sites[0]);
    }

    selectSite(site) {
        // Deselect the previous site
        if (this.state.selectedSite) {
            this.refs["star" + this.state.selectedSite.person].setActive(false);
        }
        console.log("site Selected");
        this.setState({
           selectedSite: site
        });
        console.log(this.refs["star"+site.person]);
        this.refs["star"+site.person].setActive(true);
    }

    siteTapped(site) {
        this.refs.siteCarousel.hide();
        this.showingDetail = true;
        this.refs.siteDetail.openSite(site);
    }
    siteClosed() {
        this.showingDetail = false;
        this.refs.siteCarousel.show();
    }
    resetTimeout() {
        clearTimeout(this.autoScrollTimeout);
        this.refs.siteCarousel.setAutoScroll(false);
        this.autoScrollTimeout = setTimeout(() => {
            if (!this.showingDetail) {
                this.refs.siteCarousel.setAutoScroll(true);
            } else {
                // Try again in 30 seconds
                this.resetTimeout();
            }
        }, 30000);
    }
}

export default App;
