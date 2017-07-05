import React, {Component} from 'react';
import './App.css';
import SiteCarousel from './SiteCarousel';
import SiteDetail from './SiteDetails';
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
            <div>
                <SiteCarousel sites={sites} siteSelected={this.selectSite.bind(this)}/>
                <SiteDetail site={this.state.selectedSite} siteClosed={this.siteClosed.bind(this)}/>
            </div>
        );
    }

    selectSite(site) {
        console.log("site Selected");
        this.setState({
           selectedSite: site
        });
    }
    siteClosed() {
        console.log("site closed");
        this.setState({
            selectedSite: null
        });
    }
}

export default App;
