import React, { Component } from 'react'
import '../styles/sponzors.scss'
import Carousel from '../components/Carousel'


class Sponzors extends Component{
    render(){
        return (
            <div className="sponzors">
                <div className="sponzorsWrapper">
                    <div className="title">
                        Zaupajo nam že
                    </div>
                    <div className="logos">
                        <Carousel isMobile={this.props.isMobile}>
                            {this.props.sponzors.map((s,i) => 
                                <img key={i} src={ s } alt="reference"/>
                            )}
                        </Carousel>
                    </div>
                </div>
            </div>

        )
    }
}

export default Sponzors;