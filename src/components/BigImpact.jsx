import React, { Component } from 'react'
import '../styles/BigImpact.scss'
import Button from '../components/Button'

class BigImpact extends Component{
    static propTypes = {
        title:String,
        subtitle:String,
        content:Array,
        image:Object,
        buttonText:String

    }
    render(){
        return (
            <div className="bigImpact" style={{backgroundImage:`url(${this.props.image})`}}>
                <div className="content">
                    <div className="header">
                        <div className="title">
                            <h1>{this.props.title}</h1>
                        </div>
                        <div className="subtitle">
                            {this.props.subtitle}
                        </div>
                    </div>
                    <div className="body">
                        <ul>
                            {this.props.content.map((feature) => 
                                <li key={feature.title}><div className="title">{feature.title}</div>
                                <div className="desc">{feature.desc}</div></li>
                            )}
                        </ul>
                    </div>
                    <div className="foot">
                        <Button title={this.props.buttonText} />
                    </div>
                </div>
            </div>
        )
    }
}

export default BigImpact;