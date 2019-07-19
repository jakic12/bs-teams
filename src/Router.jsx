import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import pose, {PoseGroup} from 'react-pose';
import CookieConsent from "react-cookie-consent";
import Button from 'react-bootstrap/Button';

import TopMenu from './components/TopMenu'

import Homepage from './screens/Homepage';
import Contact from './screens/Contact';
import CookiePolicy from './components/CookiePolicy';


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
                  <CookieConsent
                    location="bottom"
                    buttonText="Razumem"
                    style={{ background: "#2B373B" }}
                    buttonStyle={{ background: "#c51e2b", color: "#ffffff", fontSize: "13px" }}
                    expires={150}
                  >
                    We use cookies to ensure that we give you the best experience on our website. If you continue to use this site we will assume that you are happy with it.{" "}
                          <a style={{color: 'white', fontSize: "15px"}} ><u>Learn more</u></a>
                </CookieConsent>
                        <div className="main-content">
                            <Route exact={true} path="/" render={props => <Homepage {...props} isMobile={isMobile} />} />
                            <Route exact={true} path="/contact" render={props => <Contact {...props} isMobile={isMobile} />} />
                        </div>
                    </BrowserRouter>
                }
                {isIE && <div>Ta stran ne dela na Internet Explorer, prosimo uporabite <a href="https://support.google.com/chrome/answer/95346?co=GENIE.Platform%3DDesktop&hl=en">chrome</a> ali <a href="https://www.mozilla.org/sl/firefox/new/">firefox</a></div>}
            </ParallaxProvider>
        </div>
    }
}

export default Router;