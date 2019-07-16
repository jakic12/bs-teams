import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import pose, {PoseGroup} from 'react-pose';

import TopMenu from './components/TopMenu'
import Homepage from './screens/Homepage';
import Features from './screens/Features';
import Contact from './screens/Contact';


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
                    <PoseGroup>
                      <RouteContainer key={'route'}>
                        <Switch key={'switch'} location={location}>
                          <Route exact path="/" render={props => <Homepage {...props} isMobile={isMobile}/>} key="home" />
                          <Route path="/features" render={props => <Features {...props} isMobile={isMobile}/>} key="features" />
                          <Route path="/contact" render={props => <Contact {...props} isMobile={isMobile}/>} key="contact" />
                        </Switch>
                      </RouteContainer>
                    </PoseGroup>
                </div>
              )}
            />
          </BrowserRouter>
        </ParallaxProvider>
      );
    }
}

export default Router;