import React, { Component } from 'react'
import '../styles/sponzors.scss'


class Sponzors extends Component{
    render(){
        return (
            <div className="sponzors">
                <div className="sponzorsWrapper">
                    <div className="logos">
                        {this.props.sponzors.map(s => 
                            <img src={ s } alt="Kepion" className="logo"/>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default Sponzors;