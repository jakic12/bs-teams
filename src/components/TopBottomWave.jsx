import React, { Component } from 'react'
import BottomWaveMini from '../res/img/space_spodaj_funkcije_mini.svg'
import BottomWave from '../res/img/space_spodaj_funkcije.svg'
import '../styles/topBottom.scss'

class TopBottom extends Component{
    render(){
        return (
            <div className="topBottomWave">
                <div className="top">
                    <div className="topInner">
                        {this.props.children[0]}
                    </div>
                </div>
                <img src={!this.props.isMobile ? BottomWaveMini : BottomWave }/>
                <div className="bottom">
                    <div className="bottomInner">
                        {this.props.children[1]}
                    </div>
                </div>
            </div>
        )
    }
}

export default TopBottom;