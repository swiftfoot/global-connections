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
        this.store = createStore(this.handleState.bind(this));
    }

    render() {
        return (
            <Provider store={this.store}>
                <div className="app">
                    <img src="img/GlobalConnectionsTitle.png" alt="Global Connections" className="titleImage"/>
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
