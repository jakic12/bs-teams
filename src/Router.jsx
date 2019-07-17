import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import TopMenu from './components/TopMenu'

import Homepage from './screens/Homepage';
import Features from './screens/Features';

/**
 * hiest level - routes pages
 */
class Router extends Component{
    constructor(props){
        super(props);
        this.state = {
            width:window.innerWidth
        }
    }

    componentWillMount(){
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };

    render(){
        const { width } = this.state;
        const isMobile = width <= 765;

        const isIE = /*@cc_on!@*/false || !!document.documentMode;

        return <div>
            <ParallaxProvider>
                {!isIE && 
                    <BrowserRouter>
                        <TopMenu isMobile={isMobile}/>
                        <div className="main-content">
                            <Route exact={true} path="/" render={props => <Homepage {...props} isMobile={isMobile} />} />
                        </div>
                    </BrowserRouter>
                }
                {isIE && <div>Ta stran ne dela na Internet Explorer, prosimo uporabite <a href="https://support.google.com/chrome/answer/95346?co=GENIE.Platform%3DDesktop&hl=en">chrome</a> ali <a href="https://www.mozilla.org/sl/firefox/new/">firefox</a></div>}
            </ParallaxProvider>
        </div>
    }
}

export default Router;