import React, { Component } from 'react'
import BottomWave from '../res/img/svg/bg_spodaj.svg'
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
                <img src={ BottomWave } />
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