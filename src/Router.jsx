import React, { Component } from 'react';
import Dashboard from './screens/Dashboard.jsx';
import Features from './screens/Features.jsx';
import { BrowserRouter, Route } from 'react-router-dom';


/**
 * hiest level - routes pages
 */
class Router extends Component{
    render(){
        return <div>
            <BrowserRouter>
                <Route exact={true} path="/" component={Dashboard}/>
                <Route path="/features" component={Features}/>
            </BrowserRouter>
        </div>
    }
}

export default Router;