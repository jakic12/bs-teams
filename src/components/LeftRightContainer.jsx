import React, { Component } from 'react'
import '../styles/LeftRightContainer.scss'

class LeftRightContainer extends Component{
    render(){
        if (this.props.flip) {
            return (
                <div className="leftRightContainer">
                    <div className="containerWrapper">
                        <div className="half">
                            <img className="TeamsImg" src={this.props.image} alt="TeamsImg" />
                        </div>
                        <div className="half">
                            <h1 className="title">{this.props.title}</h1>
                            <p className="text">{this.props.description}</p>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="leftRightContainer">
                    <div className="containerWrapper">
                        <div className="half">
                            <h1 className="title">{this.props.title}</h1>
                            <p className="text">{this.props.description}</p>
                        </div>
                        <div className="half">
                            <img className="TeamsImg" src={this.props.image} alt="TeamsImg" />
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default LeftRightContainer;