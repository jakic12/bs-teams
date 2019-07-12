import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
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

        return <div>
            <BrowserRouter>
                <TopMenu isMobile={isMobile}/>
                <div className="main-content">
                    <Route exact={true} path="/" render={props => <Homepage {...props} isMobile={isMobile} />} />
                    <Route path="/features" render={props => <Features {...props} isMobile={isMobile} />} />
                </div>
            </BrowserRouter>
        </div>
    }
}

export default Router;