import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import pose, {PoseGroup} from 'react-pose';
import CookieConsent from "react-cookie-consent";
import Button from 'react-bootstrap/Button';

import TopMenu from './components/TopMenu'
import Homepage from './screens/Homepage';
import Features from './screens/Features';
import Contact from './screens/Contact';
import CookiePolicy from './components/CookiePolicy';


const RouteContainer = pose.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

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

      return (
        <ParallaxProvider>
          <BrowserRouter>
            <Route
              render={({ location }) => (
                <div style={{width: '100%', height: '100%'}}>
                  <TopMenu isMobile={isMobile}/>

                  <CookieConsent
                    location="bottom"
                    buttonText="Razumem"
                    style={{ background: "#3a3a3a", zIndex: 5000 }}
                    buttonStyle={{ background: "#c51e2b", color: "#ffffff", fontSize: "13px" }}
                    expires={150}
                  >
                    We use cookies to ensure that we give you the best experience on our website. If you continue to use this site we will assume that you are happy with it.{" "}
                          <Button className="btn btn-primary shadow-none" style={{outline: 'none', background: '#3a3a3a', border: 'none', color: 'white', fontSize: "15px", marginTop: '-5px'}} onClick={() => this.setState({showCookiePolicy: true})}><u>Learn more</u></Button>
                </CookieConsent>

                <CookiePolicy 
                show={this.state.showCookiePolicy} 
                setShow={show => this.setState({showCookiePolicy: show})}
                />
                
                    <RouteContainer key={'route'}>
                        <Switch key={'switch'} location={location}>
                            {console.log(location)}
                            <Route exact path="/" render={props => <Homepage {...props} isMobile={isMobile}/>} key="home" />
                            <Route path="/features" render={props => <Features {...props} isMobile={isMobile}/>} key="features" />
                            <Route path="/contact" render={props => <Contact {...props} isMobile={isMobile}/>} key="contact" />
                        </Switch>
                    </RouteContainer>
                </div>
              )}
            />
          </BrowserRouter>
        </ParallaxProvider>
      );
    }
}

export default Router;