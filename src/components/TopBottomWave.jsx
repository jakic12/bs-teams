import React, { Component } from 'react'
import BottomWave from '../res/img/wave_spodaj.svg'
import BottomBottomWave from '../res/img/wave_spodaj_spodaj.svg'
import '../styles/topBottom.scss'
import ReactSvg from 'react-svg';

class TopBottom extends Component{
    render(){
        return (
            <div className="topBottomWave">
                <div className="top">
                    <div className="topInner">
                        {this.props.children[0]}
                    </div>
                </div>
                <ReactSvg src={BottomWave} className="waveImage" alt="waveImage"/>
                <div className="bottomWrapper">
                    <div className="bottom" style={{background:`url(${BottomBottomWave}) no-repeat`}}>
                        <div className="bottomInner">
                            {this.props.children[1]}
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default TopBottom;