import React, { Component } from 'react'
import '../styles/sponzors.scss'


class Sponzors extends Component{
    render(){
        return (
            <div className="sponzors">
                <div className="sponzorsWrapper">
                    <div className="title">
                        Zaupajo nam že
                    </div>
                    <div className="logos">
                        {this.props.sponzors.map((s,i) => 
                            <img key={i} src={ s } alt="Kepion" className="logo"/>
                        )}
                    </div>
                </div>
            </div>

        )
    }
}

export default Sponzors;