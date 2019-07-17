import React, { Component } from 'react';
import '../styles/featureScroll.scss'
import '../styles/shared.scss'
import { Link } from 'react-router-dom';

class FeatureScroll extends Component{
    constructor(props){
        super(props);
        this.state = {
            featured: 0,
            switching: false
        };
        this.updateFeatured = this.updateFeatured.bind(this)
    }

    componentDidMount(){
        this.updateFeatured()
    }
    
    componentDidUpdate(){
        this.updateFeatured()
    }
    
    updateFeatured(){
        if(this.timeout){
            clearTimeout(this.timeout)
        }
        this.timeout = setTimeout(() => {
            this.updateState(this.state.featured + 1);
        }, 3000)
    }

    updateState = (nextImg) => {
        this.setState(state => {
            return {
                featured: (nextImg) % this.props.features.length,
                switching: true
            }
        });
        setTimeout(() => this.setState({switching: false}), 200);
    };

    render(){
        let {isMobile} = this.props;
        return (
            <div id={this.props.id} className="featureScroll" style={this.props.style}>
                <div className={isMobile?"mobileFeatureWrapper":"featureWrapper"}>
                        {(() => {
                            if(!isMobile){
                                return <React.Fragment>
                                    <div className='screenshot'>
                                        <img
                                            src={this.props.features[this.state.featured].screenshot}
                                            alt="feature-screenshot"/>
                                    </div>
                                    <div className="featureList">
                                        <div className="features">
                                            {this.props.features.map((f,i) => 
                                            <button
                                                className={`featureCard ${i===this.state.featured? "featured" : ""}`}
                                                key={i}
                                                onClick={() => { this.updateState(i)}}>
                                                <div className="icon"><img src={f.icon} alt="feature-icon"/></div>
                                                <div className="text">{f.title}</div>
                                            </button>)}
                                        </div>
                                        <div className="more">
                                            <Link to={this.props.morePath}>{this.props.moreLinkText}</Link>
                                        </div>
                                    </div>
                                </React.Fragment>
                            }else{
                                return (
                                    <div className="mobileFeatures">
                                    {this.props.features.map((f,i) => 
                                        <div className="mobileFeature" key={i}>
                                            <div className="title" style={i == 0? {marginTop:0}:{}}>
                                                <div className="icon"><img src={f.icon} alt="feature-icon"/></div>
                                                <div className="text">{f.title}</div>
                                            </div>
                                            <div className="mobileScreenshot" key={`${i}_s`}>
                                                <img src={f.screenshot} alt="feature-screenshot"/>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                )
                            }
                        })()}
                    
                </div>
            </div>
        )
    }
}

/*example

import mochFeature1 from '../res/img/moch-feature-1.png'
import mochFeature1logo from '../res/img/moch-feature-1-logo.png'
import mochFeature2 from '../res/img/moch-feature-2.png'
import mochFeature2logo from '../res/img/moch-feature-2-logo.png'

<FeatureScroll 
    features={[
        {screenshot:mochFeature1, title:"Amazing callssdsd", icon:mochFeature1logo},
        {screenshot:mochFeature2, title:"Cool groups", icon:mochFeature2logo},
        {screenshot:mochFeature1, title:"I have no idea", icon:mochFeature1logo},
        {screenshot:mochFeature2, title:"Works like a charm and a half", icon:mochFeature2logo},
        {screenshot:mochFeature1, title:"I have no idea", icon:mochFeature1logo}
    ]}
    moreLinkText={
        "view more features"
    }
    morePath={
        `#`
    }

    isMobile={this.props.isMobile}
/>
*/

export default FeatureScroll;