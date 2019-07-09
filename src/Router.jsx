import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import TopMenu from './components/TopMenu'

import Homepage from './screens/Homepage';
import Features from './screens/Features';

/**
 * hiest level - routes pages
 */
class Router extends Component{
    render(){
        return <div>
            <BrowserRouter>
                <TopMenu />
                <div className="main-content">
                    <Route exact={true} path="/" component={Homepage}/>
                    <Route path="/features" component={Features}/>
                </div>
            </BrowserRouter>
        </div>
    }
}

export default Router;