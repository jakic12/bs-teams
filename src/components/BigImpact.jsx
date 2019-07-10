import React, { Component } from 'react'
import '../styles/bigImpact.scss'
import Button from '../components/Button'

class BigImpact extends Component{
    render(){
        return (
            <div className="bigImpact" style={{backgroundImage:`url(${this.props.image})`, marginTop:`100px`, marginBottom:`100px`}}>
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

/*example
<BigImpact
    title="Product Features"
    subtitle="Nekaj funkcij, ki jih je X zmozen opravljati:"
    content={[
        {title:"Feature 1", desc:"Very short description lorem ipsum dor sit amet"},
        {title:"Feature 2", desc:"Very short description lorem ipsum dor sit amet"},
        {title:"Feature 3", desc:"Very short description lorem ipsum dor sit amet"},
        {title:"Feature 4", desc:"Very short description lorem ipsum dor sit amet"},
        {title:"Feature 5", desc:"Very short description lorem ipsum dor sit amet"},
        {title:"Feature 6", desc:"Very short description lorem ipsum dor sit amet"}
    ]}
    image={coffeImage}
    buttonText={"FREE TRIAL"}
/>*/

export default BigImpact;