import React, { Component } from 'react';
import '../styles/featureScroll.scss'
import { Link } from 'react-router-dom';

class FeatureScroll extends Component{
    constructor(props){
        super(props)

        this.state = {
            featured:0
        }

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
            this.setState(state => {
                return {featured: (state.featured+1) % this.props.features.length}
            })
        }, 3000)
    }

    render(){
        return (
            <div className="featureScroll">
                <div className="featureWrapper">
                    <div className="screenshot">
                        <img src={this.props.features[this.state.featured].screenshot} alt="feature-screenshot"/>
                    </div>
                    <div className="featureList">
                        <div className="features">
                            {this.props.features.map((f,i) => 
                                <button className={`featureCard ${i===this.state.featured? "featured" : ""}`} key={i} onClick={() => {this.setState({featured:i})}}>
                                    <div className="icon"><img src={f.icon} alt="feature-icon"/></div>
                                    <div className="text">{f.title}</div>
                                </button>
                            )}
                        </div>
                        <div className="more">
                            <Link to={this.props.morePath}>{this.props.moreLinkText}</Link>
                        </div>
                    </div>
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
/>
*/

export default FeatureScroll;