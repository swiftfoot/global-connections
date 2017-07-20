import React, {Component} from 'react';
import './App.css';
import SiteCarousel from './SiteCarousel';
import SiteDetail from './SiteDetails';
import SiteStar from './SiteStar';
import sites from './sites/globalSites';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

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
        this.store = createStore(this.handleState);
    }

    render() {
        return (
            <Provider store={this.store}>
                <div className="app">
                    <div className="titleImage app">
                        <img src="img/Header01-HCHM.png" alt="Global Connections"/>
                        <img src="img/Header02-GlobalConnections.png" alt="Global Connections"/>
                    </div>
                    <div className="bg"/>
                    {sites.map((site, key) => { return (
                            <SiteStar top={site.top} left={site.left} key={key} active={false} site={site}/>
                        );}
                    )}
                    <SiteCarousel sites={sites} selectedSiteIndex="0"/>
                    <SiteDetail />
                </div>
            </Provider>
        );
    }

    /**
     * App state reducer function, might be better broken out to separate module
     * @param state
     * @param action
     * @returns {*}
     */
    handleState(state={site: sites[0], details: false}, action) {
        switch(action.type) {
            case 'OPEN':
                return {site: state.site, details: true};
            case 'SWITCHSITE':
                return {site: action.site, details: false};
            case 'CLOSE':
                return {site: state.site, details: false    };
            default:
                return state;
        }
    }
}

export default App;
